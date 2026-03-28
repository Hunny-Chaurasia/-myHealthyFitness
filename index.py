from flask import Flask, request, jsonify, session
from flask_cors import CORS
import sqlite3
import hashlib
import os
from datetime import datetime
import re

app = Flask(__name__)
app.secret_key = os.urandom(24)
CORS(app, origins=["http://localhost:5001", "http://127.0.0.1:5001", "null"])

DATABASE = 'fitness_users.db'

def init_db():
    """Initialize the database with users table"""
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    
    # Create users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            email TEXT,
            fitness_goal TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_login TIMESTAMP,
            calories_burned INTEGER DEFAULT 0,
            workout_count INTEGER DEFAULT 0
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ Database initialized successfully")

def hash_password(password):
    """Hash password using SHA-256"""
    return hashlib.sha256(password.encode()).hexdigest()

def validate_username(username):
    """Validate username (alphanumeric and underscores only)"""
    return bool(re.match(r'^[a-zA-Z0-9_]{3,20}$', username))

def validate_password(password):
    """Validate password (minimum 6 characters)"""
    return len(password) >= 6

def validate_email(email):
    """Validate email format"""
    if not email:
        return True
    return bool(re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email))

@app.route('/api/signup', methods=['POST'])
def signup():
    """Handle user registration"""
    try:
        data = request.get_json()
        username = data.get('username', '').strip()
        password = data.get('password', '')
        email = data.get('email', '').strip()
        fitness_goal = data.get('role', '')
        
        # Validation
        if not username or not password or not fitness_goal:
            return jsonify({'message': '❌ Please fill in all required fields!'}), 400
        
        if not validate_username(username):
            return jsonify({'message': '❌ Username must be 3-20 characters (letters, numbers, underscores only)!'}), 400
        
        if not validate_password(password):
            return jsonify({'message': '❌ Password must be at least 6 characters long!'}), 400
        
        if email and not validate_email(email):
            return jsonify({'message': '❌ Please enter a valid email address!'}), 400
        
        # Connect to database
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        # Check if username already exists
        cursor.execute('SELECT id FROM users WHERE username = ?', (username,))
        if cursor.fetchone():
            conn.close()
            return jsonify({'message': '❌ Username already taken! Try another one.'}), 409
        
        # Hash password and insert user
        password_hash = hash_password(password)
        cursor.execute('''
            INSERT INTO users (username, password_hash, email, fitness_goal, created_at)
            VALUES (?, ?, ?, ?, ?)
        ''', (username, password_hash, email, fitness_goal, datetime.now()))
        
        conn.commit()
        user_id = cursor.lastrowid
        conn.close()
        
        return jsonify({
            'message': '🎉 Account created successfully!',
            'user_id': user_id,
            'username': username
        }), 201
        
    except Exception as e:
        print(f"Signup error: {e}")
        return jsonify({'message': '❌ Server error. Please try again later.'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    """Handle user login"""
    try:
        data = request.get_json()
        username = data.get('username', '').strip()
        password = data.get('password', '')
        fitness_goal = data.get('role', '')
        
        if not username or not password:
            return jsonify({'message': '❌ Please enter username and password!'}), 400
        
        # Connect to database
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        # Get user by username
        cursor.execute('''
            SELECT id, username, password_hash, email, fitness_goal, calories_burned, workout_count
            FROM users 
            WHERE username = ?
        ''', (username,))
        
        user = cursor.fetchone()
        
        if not user:
            conn.close()
            return jsonify({'message': '❌ User not found! Please sign up first.'}), 404
        
        # Verify password
        password_hash = hash_password(password)
        
        if user[2] != password_hash:
            conn.close()
            return jsonify({'message': '❌ Incorrect password! Please try again.'}), 401
        
        # Check fitness goal match (optional warning)
        if fitness_goal and user[4] != fitness_goal:
            # Still allow login but note the mismatch
            pass
        
        # Update last login
        cursor.execute('''
            UPDATE users 
            SET last_login = ? 
            WHERE id = ?
        ''', (datetime.now(), user[0]))
        conn.commit()
        conn.close()
        
        return jsonify({
            'message': '✅ Login successful!',
            'user_id': user[0],
            'username': user[1],
            'email': user[3],
            'fitness_goal': user[4],
            'calories_burned': user[5],
            'workout_count': user[6]
        }), 200
        
    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({'message': '❌ Server error. Please try again later.'}), 500

@app.route('/api/user/<username>', methods=['GET'])
def get_user(username):
    """Get user profile data"""
    try:
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT username, email, fitness_goal, created_at, last_login, calories_burned, workout_count
            FROM users 
            WHERE username = ?
        ''', (username,))
        
        user = cursor.fetchone()
        conn.close()
        
        if not user:
            return jsonify({'message': 'User not found'}), 404
        
        return jsonify({
            'username': user[0],
            'email': user[1],
            'fitness_goal': user[2],
            'joined_at': user[3],
            'last_login': user[4],
            'calories_burned': user[5],
            'workout_count': user[6]
        }), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@app.route('/api/update_stats', methods=['POST'])
def update_stats():
    """Update user workout statistics"""
    try:
        data = request.get_json()
        username = data.get('username')
        calories = data.get('calories', 0)
        
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        cursor.execute('''
            UPDATE users 
            SET calories_burned = calories_burned + ?,
                workout_count = workout_count + 1
            WHERE username = ?
        ''', (calories, username))
        
        conn.commit()
        conn.close()
        
        return jsonify({'message': 'Stats updated successfully!'}), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@app.route('/api/leaderboard', methods=['GET'])
def leaderboard():
    """Get top users by calories burned"""
    try:
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT username, calories_burned, workout_count
            FROM users 
            ORDER BY calories_burned DESC 
            LIMIT 10
        ''')
        
        leaders = cursor.fetchall()
        conn.close()
        
        return jsonify([{
            'username': l[0],
            'calories_burned': l[1],
            'workout_count': l[2]
        } for l in leaders]), 200
        
    except Exception as e:
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    init_db()
    print("🚀 Fitness Authentication Server Running!")
    print("📍 http://localhost:5001")
    print("📊 Database: fitness_users.db")
    app.run(debug=True, port=5001)
