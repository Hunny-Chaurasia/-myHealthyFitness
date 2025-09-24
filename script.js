let userPoints = 342;
let userStreak = 7;

function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active-nav');
  });

  // Show selected screen
  document.getElementById(screenId).classList.add('active-nav');

  // Update navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active-nav');
  });
  event.target.closest('.nav-item').classList.add('active-nav');
}

function showScreen() {
  showScreen('lesson');
  // Update nav to show we're in lesson mode
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active-nav');
  });
}

function playVideo() {
  const player = document.querySelector('.video-player');
  player.innerHTML = '⏸️';
  player.style.background = 'linear-gradient(135deg, #27ae60, #00cec9)';

  // Simulate video progress
  setTimeout(() => {
    player.innerHTML = '✅ Video Complete!';
    player.style.background = 'linear-gradient(135deg, #27ae60, #00b894)';
  }, 2000);
}

function selectAnswer(button, isCorrect) {
  // Disable all buttons
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.style.pointerEvents = 'none';
  });

  if (isCorrect) {
    button.classList.add('correct');
    userPoints += 10;

    // Show points earned
    const pointsDiv = document.createElement('div');
    pointsDiv.className = 'points-earned bounce';
    pointsDiv.innerHTML = '🎉 Correct! +10 Points';
    button.parentNode.appendChild(pointsDiv);

    // Confetti effect
    setTimeout(() => {
      pointsDiv.innerHTML = '🎊 Well done! Moving to next lesson...';
    }, 1000);

  } else {
    button.style.background = '#f8d7da';
    button.style.borderColor = '#e74c3c';

    // Show correct answer
    document.querySelectorAll('.answer-btn')[2].classList.add('correct');

    const encouragement = document.createElement('div');
    encouragement.style.background = '#fff3cd';
    encouragement.style.padding = '10px';
    encouragement.style.borderRadius = '8px';
    encouragement.style.marginTop = '10px';
    encouragement.innerHTML = '💪 Keep trying! The correct answer is highlighted.';
    button.parentNode.appendChild(encouragement);
  }
}

// Simulate offline capability

// Add smooth transitions
document.addEventListener('click', (e) => {
  if (e.target.closest('.subject-card') || e.target.closest('.start-learning-btn')) {
    e.target.closest('div, button').style.transform = 'scale(0.95)';
    setTimeout(() => {
      if (e.target.closest('div, button')) {
        e.target.closest('div, button').style.transform = 'scale(1)';
      }
    }, 150);
  }
});

function toggleSwitch(element) {
  element.classList.toggle('active');
}


//workout acc age
// document.addEventListener("DOMContentLoaded", function () {
  // Hide all workout sections initially
  // const sections = [
  //   "kids_5-12_section",
  //   "kids_13-16_section",
  //   "age_17-21_section",
  //   "age_22-45_section",
  //   "age_46-75_section",
  // ];
  // sections.forEach((id) => {
  //   const el = document.getElementById(id);
  //   if (el) el.style.display = "none";
  // });
  // Prompt user for age
  // let age = prompt("Please enter your age:");
  // Validate input
  // age = parseInt(age);
  // if (isNaN(age) || age <= 0) {
    // alert("Invalid age entered. Showing all workouts.");
    // Show all sections if invalid age
  //   sections.forEach((id) => {
  //     const el = document.getElementById(id);
  //     if (el) el.style.display = "grid";
  //   });
  //   return;
  // }
  // Show only the section corresponding to the age
//   if (age >= 5 && age <= 12) {
//     document.getElementById("kids_5-12_section").style.display = "grid";
//   } else if (age >= 13 && age <= 16) {
//     document.getElementById("kids_13-16_section").style.display = "grid";
//   } else if (age >= 17 && age <= 21) {
//     document.getElementById("age_17-21_section").style.display = "grid";
//   } else if (age >= 22 && age <= 45) {
//     document.getElementById("age_22-45_section").style.display = "grid";
//   } else if (age >= 46 && age <= 75) {
//     document.getElementById("age_46-75_section").style.display = "grid";
//   } else {
//     alert("No workouts available for your age group. Showing all workouts.");
//     sections.forEach((id) => {
//       const el = document.getElementById(id);
//       if (el) el.style.display = "grid";
//     });
//   }
// });

const menu = document.getElementById("Menu");
const navigationshow = document.getElementById("bottom-nav");
let show = false;

menu.addEventListener("click", () => {
  if (show === false) {
    show = true;
    navigationshow.style.display = "block";
  } else {
    show = false;
    navigationshow.style.display = "none";
  }
});
// Animate counters on page load
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Add hover effects and interactions
document.addEventListener('DOMContentLoaded', function () {
  // Animate stats on load
  setTimeout(() => {
    animateCounter(document.getElementById('articles-today'), 127);
    animateCounter(document.getElementById('topics'), 45);
  }, 500);

  // Add click handlers for article cards
  document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function () {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(-5px)';
      }, 100);
    });
  });

  // Live update simulation
  setInterval(() => {
    const readersElement = document.getElementById('readers');
    let currentReaders = parseFloat(readersElement.textContent);
    currentReaders += Math.random() * 0.001;
    readersElement.textContent = currentReaders.toFixed(1) + 'M';
  }, 5000);

  // Add smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
// Nutrition tracking functionality
let nutritionData = {
  calories: { current: 1245, target: 2200 },
  water: { current: 2.1, target: 3.5 },
  protein: { current: 89, target: 120 },
  fruits: { current: 5, target: 8 }
};

function updateProgress() {
  const progressBars = document.querySelectorAll('.progress-fill-nutrition');

  progressBars.forEach(bar => {
    if (bar.classList.contains('calories-progress-nutrition')) {
      const percentage = (nutritionData.calories.current / nutritionData.calories.target) * 100;
      bar.style.width = Math.min(percentage, 100) + '%';
    }
    if (bar.classList.contains('water-progress-nutrition')) {
      const percentage = (nutritionData.water.current / nutritionData.water.target) * 100;
      bar.style.width = Math.min(percentage, 100) + '%';
    }
    if (bar.classList.contains('protein-progress-nutrition')) {
      const percentage = (nutritionData.protein.current / nutritionData.protein.target) * 100;
      bar.style.width = Math.min(percentage, 100) + '%';
    }
    if (bar.classList.contains('fruits-progress-nutrition')) {
      const percentage = (nutritionData.fruits.current / nutritionData.fruits.target) * 100;
      bar.style.width = Math.min(percentage, 100) + '%';
    }
  });
}

function logMeal() {
  alert('Meal logging feature would open here! 🍽️');
  // In a real app, this would open a meal logging interface
}

function addWater() {
  nutritionData.water.current += 0.25;
  if (nutritionData.water.current > nutritionData.water.target) {
    nutritionData.water.current = nutritionData.water.target;
  }

  // Update the display
  const waterValue = document.querySelector('.stat-card-nutrition:nth-child(2) .stat-value-nutrition');
  waterValue.innerHTML = `${nutritionData.water.current.toFixed(1)}<span style="color: #6b7280; font-size: 16px;">/${nutritionData.water.target}</span>`;

  updateProgress();

  // Show feedback
  if (nutritionData.water.current >= nutritionData.water.target) {
    alert('Great! You\'ve reached your daily water goal! 💧');
  }
}

function scanFood() {
  alert('Food scanning feature would activate camera here! 📷');
  // In a real app, this would open camera for food recognition
}

// Add click animations
document.querySelectorAll('.btn-nutrition').forEach(button => {
  button.addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// Add hover effects for meal items
document.querySelectorAll('.meal-item-nutrition').forEach(item => {
  item.addEventListener('mouseenter', function () {
    this.style.background = 'rgba(255, 255, 255, 0.05)';
    this.style.borderRadius = '8px';
    this.style.padding = '15px';
    this.style.margin = '0 -15px';
    this.style.transition = 'all 0.3s ease';
  });

  item.addEventListener('mouseleave', function () {
    this.style.background = '';
    this.style.borderRadius = '';
    this.style.padding = '15px 0';
    this.style.margin = '';
  });
});

// Initialize progress bars
updateProgress();

// Add some dynamic updates
setInterval(() => {
  const insights = document.querySelector('.insight-text-nutrition');
  const time = new Date().getHours();

  if (time >= 17 && time < 20) {
    insights.textContent = "It's dinner time! Don't forget to log your evening meal.";
  } else if (time >= 20) {
    insights.textContent = "Great job today! Review your nutrition goals for tomorrow.";
  }
}, 60000); // Check every minute

// Comprehensive animation system for scroll events and screen changes
function initializeComprehensiveAnimations() {
  // Add CSS for all animation types
  const style = document.createElement('style');
  style.textContent = `
        .slide-up {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s ease-out;
        }
        
        .slide-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Animation for screen changes */
        .screen-transition {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.5s ease-in-out;
        }
        
        .screen-transition.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
  document.head.appendChild(style);

  // Function to animate elements when they come into view
  function animateElementsOnScroll() {
    const elements = document.querySelectorAll('.slide-up:not(.visible)');

    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if element is in viewport
      if (rect.top < windowHeight - 50 && rect.bottom > 0) {
        element.classList.add('visible');
      }
    });
  }

  // Function to prepare elements for animation
  function prepareElementsForAnimation() {
    const elementsToAnimate = document.querySelectorAll(`
            .welcome-section,
            .progress-card,
            .Challenge-card,
            .Quick-card,
            .Workouts-card,
            .article-card,
            .expert-card,
            .category-card,
            .stat-card,
            .settings-section,
            .breaking-news,
            .trending-topics,
            .newsletter,
            .News-header,
            #data > div,
            #Nut_data > div,
            .simple-card,
            .Achievers
        `);

    elementsToAnimate.forEach(element => {
      element.classList.add('slide-up');
    });
  }

  // Throttled scroll handler
  let scrollTicking = false;
  function handleScroll() {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        animateElementsOnScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  // Handle wheel events (mouse scroll)
  function handleWheel(event) {
    handleScroll();
  }

  // Handle touch events (mobile scroll)
  function handleTouch(event) {
    handleScroll();
  }

  // Handle keyboard scroll events
  function handleKeyboard(event) {
    // Arrow keys, Page Up/Down, Space, Home, End
    if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(event.keyCode)) {
      handleScroll();
    }
  }

  // Enhanced showScreen function with animations
  function enhanceScreenTransitions() {
    // Find existing showScreen function or create one
    window.originalShowScreen = window.showScreen || function (screenId) {
      // Default screen switching logic
      document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active-nav');
      });
      document.getElementById(screenId).classList.add('active');
    };

    // Override showScreen with animation
    window.showScreen = function (screenId) {
      // Hide all screens with fade out
      document.querySelectorAll('.screen.active').forEach(screen => {
        screen.style.opacity = '0';
        screen.style.transform = 'translateY(-20px)';

        setTimeout(() => {
          screen.classList.remove('active');
          screen.style.opacity = '';
          screen.style.transform = '';
        }, 250);
      });

      // Show new screen with fade in
      setTimeout(() => {
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
          newScreen.classList.add('active');

          // Prepare elements in new screen for animation
          const elementsInScreen = newScreen.querySelectorAll(`
                        .welcome-section,
                        .progress-card,
                        .Challenge-card,
                        .Quick-card,
                        .Workouts-card,
                        .article-card,
                        .expert-card,
                        .category-card,
                        .stat-card,
                        .settings-section,
                        .breaking-news,
                        .trending-topics,
                        .newsletter,
                        .News-header,
                        #data > div,
                        #Nut_data > div
                        .feature-card-chatbot
                        .chat-container-chatbot
                    `);

          // Reset animations for elements in new screen
          elementsInScreen.forEach(element => {
            element.classList.remove('visible');
            element.classList.add('slide-up');
          });

          // Trigger animations after screen transition
          setTimeout(() => {
            animateElementsOnScroll();
          }, 100);

          // Animate screen entrance
          newScreen.style.opacity = '0';
          newScreen.style.transform = 'translateY(20px)';

          setTimeout(() => {
            newScreen.style.transition = 'all 0.5s ease-out';
            newScreen.style.opacity = '1';
            newScreen.style.transform = 'translateY(0)';

            setTimeout(() => {
              newScreen.style.transition = '';
            }, 500);
          }, 50);
        }
      }, 250);
    };
  }

  // Initialize all event listeners
  function initializeEventListeners() {
    // Scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Wheel event (mouse scroll)
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Touch events for mobile scrolling
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });

    // Keyboard navigation
    window.addEventListener('keydown', handleKeyboard);

    // Resize event to recalculate positions
    window.addEventListener('resize', () => {
      setTimeout(handleScroll, 100);
    });
  }

  // Initialize everything
  function initialize() {
    prepareElementsForAnimation();
    enhanceScreenTransitions();
    initializeEventListeners();

    // Initial check for visible elements
    setTimeout(() => {
      animateElementsOnScroll();
    }, 100);

    console.log('Comprehensive scroll animations initialized');
  }

  // Run initialization
  initialize();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeComprehensiveAnimations);

// Fallback initialization
window.addEventListener('load', function () {
  if (!document.querySelector('.slide-up')) {
    initializeComprehensiveAnimations();
  }
});

// Re-initialize animations when navigating back/forward
window.addEventListener('popstate', function () {
  setTimeout(() => {
    initializeComprehensiveAnimations();
  }, 100);
});


// chatbot
let conversationMode = 'fitness'; // 'fitness' or 'general'

// Toggle between fitness-focused and general conversation modes
function toggleConversationMode() {
  conversationMode = conversationMode === 'fitness' ? 'general' : 'fitness';
  document.getElementById('modeStatus').textContent = `Current Mode: ${conversationMode === 'fitness' ? 'Fitness Focused' : 'General Conversation'}`;

  addMessage(`I've switched to ${conversationMode === 'fitness' ? 'fitness-focused mode. Ask me anything about workouts, nutrition, or wellbeing!' : 'general conversation mode. I can chat about various topics but still specialize in fitness!'}`, 'bot');
}

// Function to handle sending a message
function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();

  if (message) {
    addMessage(message, 'user');
    userInput.value = '';

    // Show typing indicator
    showTypingIndicator();

    // Generate AI response
    generateAIResponse(message);
  }
}

// Function to handle suggestion clicks
function sendSuggestion(suggestion) {
  document.getElementById('userInput').value = suggestion;
  sendMessage();
}

// Function to handle Enter key press
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Function to add a message to the chat
function addMessage(text, sender) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender + '-message');
  messageDiv.innerHTML = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
  const chatMessages = document.getElementById('chatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('typing-indicator');
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = 'FitAI is thinking <div class="typing-dots"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
  const typingIndicator = document.getElementById('typingIndicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }
}

// Function to generate AI response
async function generateAIResponse(userMessage) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

  removeTypingIndicator();

  // Generate response based on conversation mode and user message
  const response = generateDynamicResponse(userMessage);
  addMessage(response, 'bot');
}

// Generate dynamic responses based on user input
function generateDynamicResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();

  // Handle greetings and casual conversation
  if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hey') || lowerCaseMessage.includes('namaste')) {
    const greetings = [
      "Hello there! How can I help with your fitness journey today?",
      "Hi! Ready to work on your fitness goals?",
      "Hey! What fitness questions can I answer for you?",
      "Hello! How are you feeling today? Any fitness challenges I can help with?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (lowerCaseMessage.includes('how are you')) {
    return "I'm doing great, thanks for asking! Ready to help you with your fitness goals. What would you like to know today?";
  }

  if (lowerCaseMessage.includes('thank') || lowerCaseMessage.includes('shukriya')) {
    return "You're welcome! I'm always here to help with your fitness journey. Is there anything else you'd like to know?";
  }

  if (lowerCaseMessage.includes('your name') || lowerCaseMessage.includes('who are you')) {
    return "I'm FitAI, your personal fitness assistant! I specialize in helping people with workout plans, nutrition advice, and overall wellbeing.";
  }

  // Handle general questions when in general mode
  if (conversationMode === 'general') {
    if (lowerCaseMessage.includes('weather')) {
      return "I specialize in fitness rather than weather, but I can tell you that great weather is perfect for outdoor workouts!";
    }

    if (lowerCaseMessage.includes('joke') || lowerCaseMessage.includes('funny')) {
      const jokes = [
        "Why did the gym close down? It just didn't work out!",
        "Why was the robot so good at exercise? It had lots of core processing power!",
        "I was going to tell a time-traveling joke, but you didn't like it yet!"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
  }

  // Fitness-related responses
  if (lowerCaseMessage.includes('workout') || lowerCaseMessage.includes('exercise')) {
    if (lowerCaseMessage.includes('how often') || lowerCaseMessage.includes('frequency')) {
      return "For most people, 3-5 workouts per week is ideal. Beginners should start with 3 days, while advanced trainees can do 5-6 days with proper programming.";
    } else if (lowerCaseMessage.includes('long') || lowerCaseMessage.includes('duration')) {
      return "A good workout should last 45-90 minutes. Focus on quality over quantity - intense, focused training is better than hours of half-hearted exercise.";
    } else if (lowerCaseMessage.includes('time') || lowerCaseMessage.includes('when')) {
      return "The best time to workout is when you can be consistent! Morning workouts help with consistency, while afternoon workouts may have better performance due to higher body temperature.";
    } else {
      const workoutTips = [
        "For effective workouts, focus on compound movements like squats, deadlifts, and push-ups that work multiple muscle groups.",
        "Remember to warm up before workouts and cool down afterward to prevent injury and improve recovery.",
        "Progressive overload is key - gradually increase the weight, reps, or intensity of your workouts to keep making progress."
      ];
      return workoutTips[Math.floor(Math.random() * workoutTips.length)];
    }
  }

  if (lowerCaseMessage.includes('food') || lowerCaseMessage.includes('diet') || lowerCaseMessage.includes('eat') || lowerCaseMessage.includes('nutrition')) {
    if (lowerCaseMessage.includes('before') || lowerCaseMessage.includes('pre-workout')) {
      return "Eat a balanced meal with carbs and protein 2-3 hours before training. For quick energy 30-60 minutes before, try a banana or small smoothie.";
    } else if (lowerCaseMessage.includes('after') || lowerCaseMessage.includes('post-workout')) {
      return "After training, consume protein and carbs within 2 hours. A shake with whey protein and a banana is a great option for muscle recovery.";
    } else if (lowerCaseMessage.includes('protein')) {
      return "Active individuals need 1.6-2.2g of protein per kg of bodyweight daily. Spread your protein intake across 3-5 meals for optimal muscle synthesis.";
    } else {
      const nutritionTips = [
        "Focus on whole foods like lean proteins, complex carbs, healthy fats, and plenty of vegetables for optimal nutrition.",
        "Hydration is crucial for performance and recovery. Aim for 2-3 liters of water daily, more if you're sweating heavily.",
        "Don't eliminate entire food groups - balanced nutrition with occasional treats is more sustainable than extreme restriction."
      ];
      return nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
    }
  }

  if (lowerCaseMessage.includes('muscle') || lowerCaseMessage.includes('build')) {
    if (lowerCaseMessage.includes('build') || lowerCaseMessage.includes('gain')) {
      return "To build muscle: 1) Follow a progressive resistance training program 2) Eat in a slight calorie surplus with enough protein 3) Get 7-9 hours of sleep 4) Be consistent for at least 3-6 months";
    } else if (lowerCaseMessage.includes('recover') || lowerCaseMessage.includes('recovery')) {
      return "Muscles grow during recovery, not during workouts. Ensure you're getting enough sleep, managing stress, and allowing 48 hours before working the same muscle group again.";
    } else {
      return "Building muscle requires consistent resistance training, proper nutrition with adequate protein, and sufficient recovery time between workouts.";
    }
  }

  if (lowerCaseMessage.includes('weight loss') || lowerCaseMessage.includes('fat loss') || lowerCaseMessage.includes('lose weight')) {
    if (lowerCaseMessage.includes('cardio')) {
      return "Both HIIT and steady-state cardio are effective. HIIT burns more calories in less time, while steady-state is easier to recover from. Aim for 150-300 minutes of cardio per week.";
    } else if (lowerCaseMessage.includes('diet') || lowerCaseMessage.includes('eat')) {
      return "The best diet for weight loss is one you can maintain long-term. Focus on whole foods, protein intake, and a moderate calorie deficit of 500 calories per day.";
    } else {
      return "Weight loss requires a combination of proper nutrition, training, and consistency. The most effective approach is a moderate calorie deficit with resistance training and cardio.";
    }
  }

  if (lowerCaseMessage.includes('water') || lowerCaseMessage.includes('hydrat')) {
    return "Aim for 2-3 liters of water daily. During workouts, drink 500ml 2 hours before and 200-300ml every 15-20 minutes during exercise.";
  }

  if (lowerCaseMessage.includes('sleep')) {
    return "7-9 hours of quality sleep is crucial for recovery, hormone balance, and performance. Maintain a consistent sleep schedule and create a dark, cool sleeping environment.";
  }

  if (lowerCaseMessage.includes('chest')) {
    // bench press without machine
    if (lowerCaseMessage.includes('barbell') &&
      (lowerCaseMessage.includes('bench press') || lowerCaseMessage.includes('barbell without machineries') || lowerCaseMessage.includes('barbell without machine') || lowerCaseMessage.includes('barbell press for chest'))) {

      return `
    Muscles: Pectorals, anterior deltoids, triceps <br>
    Setup: Lie on bench, grip bar wider than shoulders <br>
    Movement: Lower bar to chest, press up <br>
    Variations: Incline, decline, close-grip <br><br>

    <strong>1. Incline Barbell Press</strong><br>
    &bull; Angle: 30-45 degrees <br>
    &bull; Focus: Upper chest <br>
    &bull; Form: Keep core tight, controlled movement <br><br>

    <strong>2. Decline Barbell Press</strong><br>
    &bull; Angle: 15-30 degrees decline <br>
    &bull; Focus: Lower chest <br>
    &bull; Safety: Use spotter, secure feet <br>
    `;
    } else if (lowerCaseMessage.includes('dumbbell') || lowerCaseMessage.includes('dumbell')) {

      return `chest dumbell`;

    } else if (lowerCaseMessage.includes('with equipments') || lowerCaseMessage.includes('with machines') || lowerCaseMessage.includes('using machine')) {

      return `chest machines`;

    } else {
      return `
    Choose one from our scope:<br>
    &bull; Chest Barbell Exercises without Machineries<br>
    &bull; Chest Dumbbell Exercises <br>
    &bull; Chest Machine Exercises <br>`
    }
  }


  // Default response for unknown queries
  const defaultResponses = [
    "I specialize in fitness advice. Could you tell me more about what you'd like to know?",
    "I'm here to help with your fitness journey! Could you please provide more details so I can give you the best advice?",
    "That's an interesting question! As a fitness assistant, I can help with workout plans, nutrition advice, and wellbeing tips.",
    "I'm not sure I understand. Could you rephrase that? I'm best at answering fitness-related questions."
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

//Progress
document.addEventListener('DOMContentLoaded', () => {
  // Sample data to populate the dashboard
  const workoutData = [
    { date: '3/18/2024', type: 'Strength', duration: '45min', calories: 320, intensity: 'High' },
    { date: '3/17/2024', type: 'Cardio', duration: '30min', calories: 380, intensity: 'Medium' },
    { date: '3/16/2024', type: 'Yoga', duration: '60min', calories: 180, intensity: 'Low' },
    { date: '3/15/2024', type: 'Rest Day', duration: 'Missed', calories: '', intensity: 'Missed' },
    { date: '3/14/2024', type: 'HIIT', duration: '25min', calories: 350, intensity: 'High' },
    { date: '3/13/2024', type: 'Strength', duration: '50min', calories: 380, intensity: 'High' },
    { date: '3/12/2024', type: 'Cardio', duration: '35min', calories: 290, intensity: 'Medium' }
  ];

  // Selectors
  const navButtons = document.querySelectorAll('.nav-button-progress');
  const viewSections = document.querySelectorAll('.view-section-progress');
  const dailySessionList = document.getElementById('daily-sessions-list-progress');

  // Function to populate daily sessions
  const populateDailySessions = () => {
    dailySessionList.innerHTML = '';
    workoutData.forEach(session => {
      const sessionItem = document.createElement('div');
      sessionItem.classList.add('session-item-progress');

      // Set different icons for different workout types
      let icon = '';
      let iconColor = '';
      switch (session.type) {
        case 'Strength':
          icon = '💪';
          iconColor = 'var(--accent-purple-progress)';
          break;
        case 'Cardio':
          icon = '❤️';
          iconColor = 'var(--accent-red-progress)';
          break;
        case 'Yoga':
          icon = '🧘';
          iconColor = 'var(--accent-green-progress)';
          break;
        case 'HIIT':
          icon = '⚡';
          iconColor = 'var(--accent-blue-progress)';
          break;
        case 'Rest Day':
          icon = '';
          iconColor = '#791919ff';
          break;
      }

      sessionItem.innerHTML = `
                <span class="session-icon-progress" style="color: ${iconColor};">${icon}</span>
                <div class="session-details-progress">
                    <p class="session-date-progress">${session.date}</p>
                    <p class="session-type-progress">${session.type}</p>
                </div>
                <div class="session-stats-progress">
                    <span class="duration-progress">${session.duration}</span>
                    <span class="calories-progress">${session.calories}</span>
                    <span class="intensity-progress ${session.intensity.toLowerCase()}">${session.intensity}</span>
                </div>
            `;
      dailySessionList.appendChild(sessionItem);
    });
  };

  // Function to handle navigation
  const switchView = (targetId) => {
    viewSections.forEach(section => {
      section.classList.remove('active');
    });
    navButtons.forEach(button => {
      button.classList.remove('active');
    });

    document.getElementById(targetId).classList.add('active');
    document.querySelector(`#${targetId.replace('-view', '-btn')}`).classList.add('active');
  };

  // Event listeners for navigation buttons
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.id.replace('-btn', '-view');
      switchView(targetId);
    });
  });

  // Initialize the page with the daily view and populate data
  populateDailySessions();
  switchView('daily-view-progress');
});

// community
function showcommunity(screenName) {
  // Remove active class from all nav items
  document.querySelectorAll('.nav-item-community').forEach(item => {
    item.classList.remove('active-community');
  });

  // Add active class to clicked item
  event.currentTarget.classList.add('active-community');

  // Here you would typically show different content based on screenName
  console.log('Showing screen:', screenName);

  // For demo purposes, just update the title
  const titles = {
    'Leaderboard': 'Global Leaderboard',
    'Live Streams': 'Live Workout Sessions',
    'Challenges': 'Active Challenges'
  };

  document.querySelector('.leaderboard-title-community').innerHTML =
    `<i class="fas fa-trophy"></i> ${titles[screenName]}`;
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function () {
  // Animate stats on load
  const statNumbers = document.querySelectorAll('.stat-number-community');
  statNumbers.forEach((stat, index) => {
    setTimeout(() => {
      stat.style.transform = 'scale(1.1)';
      setTimeout(() => {
        stat.style.transform = 'scale(1)';
      }, 200);
    }, index * 100);
  });

  // Add click animation to buttons
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Add hover effects to leaderboard items
  document.querySelectorAll('.leaderboard-item-community').forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.style.transform = 'translateX(5px)';
    });

    item.addEventListener('mouseleave', function () {
      this.style.transform = 'translateX(0)';
    });
  });
});

// Simulate real-time updates
setInterval(() => {
  const liveSessionsElement = document.querySelector('.live-sessions-community');
  const currentValue = parseInt(liveSessionsElement.textContent);
  const change = Math.random() > 0.5 ? 1 : -1;
  const newValue = Math.max(100, currentValue + change);
  liveSessionsElement.textContent = newValue;
}, 5000);

// Live-stream
// Navigation functionality
document.querySelectorAll('.nav-link-community').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link-community').forEach(l => l.classList.remove('active-community'));
    this.classList.add('active-community');
  });
});

// Stream button functionality
document.querySelector('.stream-button-community').addEventListener('click', function () {
  this.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
  this.innerHTML = '🔴 Going Live...';

  setTimeout(() => {
    this.style.background = 'linear-gradient(45deg, #8b5cf6, #a855f7)';
    this.innerHTML = '🎥 Start Stream';
  }, 3000);
});

// Reminder button functionality
document.querySelectorAll('.reminder-button-community').forEach(button => {
  button.addEventListener('click', function () {
    const originalText = this.innerHTML;
    this.innerHTML = '✅ Reminder Set';
    this.style.background = 'rgba(16, 185, 129, 0.2)';
    this.style.borderColor = 'rgba(16, 185, 129, 0.4)';

    setTimeout(() => {
      this.innerHTML = originalText;
      this.style.background = 'rgba(255, 255, 255, 0.1)';
      this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }, 2000);
  });
});

// Real-time viewer count updates (simulation)
function updateViewerCounts() {
  const viewerElements = document.querySelectorAll('.session-stats-community span:first-child');
  viewerElements.forEach(element => {
    if (element.textContent.includes('🔥')) {
      const currentCount = parseInt(element.textContent.replace('🔥 ', '').replace(',', ''));
      const change = Math.floor(Math.random() * 20) - 10;
      const newCount = Math.max(0, currentCount + change);
      element.textContent = `🔥 ${newCount.toLocaleString()}`;
    }
  });
}

// Update viewer counts every 5 seconds
setInterval(updateViewerCounts, 5000);

// Add hover effects to session cards
document.querySelectorAll('.session-card-community').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.borderLeftWidth = '5px';
  });

  card.addEventListener('mouseleave', function () {
    this.style.borderLeftWidth = '3px';
  });
});
// Achievements


// Join Challenge button functionality
document.querySelectorAll('.join-button-community').forEach(button => {
  button.addEventListener('click', function () {
    const originalText = this.innerHTML;
    const originalBg = this.style.background;

    this.innerHTML = '✅ Joined!';
    this.style.background = 'linear-gradient(45deg, #10b981, #059669)';
    this.style.transform = 'scale(0.95)';

    setTimeout(() => {
      this.innerHTML = '🔥 Challenge Active';
      this.style.background = 'linear-gradient(45deg, #8b5cf6, #a855f7)';
      this.style.transform = 'scale(1)';
    }, 1500);
  });
});

// Progress bar animation on load
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-fill-community');
  progressBars.forEach((bar, index) => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, index * 200);
  });
}

// Simulate real-time progress updates
function updateProgress() {
  const progressElements = [
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(1) .progress-fill-community', current: 85 },
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(2) .progress-fill-community', current: 78 },
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(3) .progress-fill-community', current: 71 },
    { selector: '.challenges-grid-community .challenge-card-community:nth-child(4) .progress-fill-community', current: 68 }
  ];

  progressElements.forEach(element => {
    const progressBar = document.querySelector(element.selector);
    const randomIncrease = Math.random() * 0.1;
    const newProgress = Math.min(100, element.current + randomIncrease);

    if (progressBar) {
      progressBar.style.width = `${newProgress}%`;
    }
  });
}

// Hover effects for challenge cards
document.querySelectorAll('.challenge-card-community').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.borderColor = 'rgb(255 255 255 / 50%)';
    this.style.boxShadow = '0 20px 40px rgb(0 0 0 / 74%) 0px 20px 40px';
  });

  card.addEventListener('mouseleave', function () {
    this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    this.style.boxShadow = 'none';
  });
});

// Initialize animations
setTimeout(animateProgressBars, 500);

// Update progress every 10 seconds
setInterval(updateProgress, 10000);

// Trophy pulse effect
const trophy = document.querySelector('.trophy-pulse-community');
if (trophy) {
  trophy.addEventListener('click', function () {
    this.style.transform = 'scale(1.2) rotate(15deg)';
    setTimeout(() => {
      this.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
  });
}

// Challenge completion celebration
function celebrateCompletion() {
  const champion = document.querySelector('.champion-stat-number-community');
  if (champion && champion.textContent === '1/3') {
    // Simulate challenge completion
    setTimeout(() => {
      champion.textContent = '2/3';
      champion.style.color = '#f59e0b';
      champion.style.fontWeight = 'bold';
    }, 5000);
  }
}

// Function to show the selected community content
function showCommunityContent(contentId) {
  // Hide all content sections
  const contents = document.querySelectorAll('.community-content');
  contents.forEach(content => {
    content.classList.remove('visible');
    content.classList.add('hidden');
  });

  // Show the selected content
  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.remove('hidden');
    selectedContent.classList.add('visible');
  }

  // Update active navigation item
  const navItems = document.querySelectorAll('.nav-item-community');
  navItems.forEach(item => {
    item.classList.remove('active-community');
  });

  // Find and activate the clicked nav item
  event.target.classList.add('active-community');
}

// Progresss acievements
document.addEventListener('DOMContentLoaded', function () {
  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-fill-PROGRESS-ACHIEVEMENTS');

  function animateProgressBars() {
    progressBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 500);
    });
  }

  // Trigger animation on page load
  setTimeout(animateProgressBars, 1000);

  // Share button functionality
  const shareBtn = document.querySelector('.share-btn-PROGRESS-ACHIEVEMENTS');
  shareBtn.addEventListener('click', function () {
    // Create a simple share effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
      }, 200);
    }, 100);

    // Simulate share action
    alert('Achievement progress shared! 🎉');
  });

  // Achievement card hover effects
  const achievementCards = document.querySelectorAll('.achievement-card-PROGRESS-ACHIEVEMENTS');
  achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.background = 'rgba(30, 41, 59, 0.8)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.background = 'rgba(30, 41, 59, 0.6)';
    });
  });

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target + (target === 67 ? '%' : '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start) + (target === 67 ? '%' : '');
      }
    }, 16);
  }

  // Trigger counter animations
  setTimeout(() => {
    const statNumbers = document.querySelectorAll('.stat-number-PROGRESS-ACHIEVEMENTS');
    animateCounter(statNumbers[0], 3);
    animateCounter(statNumbers[1], 3);
    animateCounter(statNumbers[2], 67);
  }, 1500);
});

// MONTHLY
class MonthlyDashboard_PROGRESS_MONTHLY {
  constructor() {
    this.initializeProgress_PROGRESS_MONTHLY();
    this.setupInteractions_PROGRESS_MONTHLY();
    this.animateMetrics_PROGRESS_MONTHLY();
    this.setupRealtimeUpdates_PROGRESS_MONTHLY();
  }

  initializeProgress_PROGRESS_MONTHLY() {
    const progressBars_PROGRESS_MONTHLY = document.querySelectorAll('.progress-fill-PROGRESS-MONTHLY');

    progressBars_PROGRESS_MONTHLY.forEach((bar_PROGRESS_MONTHLY, index_PROGRESS_MONTHLY) => {
      const targetProgress_PROGRESS_MONTHLY = bar_PROGRESS_MONTHLY.getAttribute('data-progress') || 0;
      bar_PROGRESS_MONTHLY.style.width = '0%';

      setTimeout(() => {
        bar_PROGRESS_MONTHLY.style.width = `${targetProgress_PROGRESS_MONTHLY}%`;
      }, 1000 + (index_PROGRESS_MONTHLY * 200));
    });
  }

  animateMetrics_PROGRESS_MONTHLY() {
    const metricValues_PROGRESS_MONTHLY = [
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[0], target: [24, 31], separator: '/' },
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[1], target: 18, suffix: 'h' },
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[2], target: 7200, format: 'comma' },
      { element: document.querySelectorAll('.metric-value-PROGRESS-MONTHLY')[3], target: 18 }
    ];

    metricValues_PROGRESS_MONTHLY.forEach((metric_PROGRESS_MONTHLY, index_PROGRESS_MONTHLY) => {
      setTimeout(() => {
        this.animateCounter_PROGRESS_MONTHLY(metric_PROGRESS_MONTHLY);
      }, 1500 + (index_PROGRESS_MONTHLY * 300));
    });
  }

  animateCounter_PROGRESS_MONTHLY(metric_PROGRESS_MONTHLY) {
    const element_PROGRESS_MONTHLY = metric_PROGRESS_MONTHLY.element;
    if (!element_PROGRESS_MONTHLY) return;

    const target_PROGRESS_MONTHLY = Array.isArray(metric_PROGRESS_MONTHLY.target)
      ? metric_PROGRESS_MONTHLY.target[0]
      : metric_PROGRESS_MONTHLY.target;

    let current_PROGRESS_MONTHLY = 0;
    const increment_PROGRESS_MONTHLY = target_PROGRESS_MONTHLY / 50;

    const timer_PROGRESS_MONTHLY = setInterval(() => {
      current_PROGRESS_MONTHLY += increment_PROGRESS_MONTHLY;

      if (current_PROGRESS_MONTHLY >= target_PROGRESS_MONTHLY) {
        current_PROGRESS_MONTHLY = target_PROGRESS_MONTHLY;
        clearInterval(timer_PROGRESS_MONTHLY);
      }

      let displayValue_PROGRESS_MONTHLY = Math.floor(current_PROGRESS_MONTHLY);

      if (metric_PROGRESS_MONTHLY.format === 'comma') {
        displayValue_PROGRESS_MONTHLY = displayValue_PROGRESS_MONTHLY.toLocaleString();
      }

      if (Array.isArray(metric_PROGRESS_MONTHLY.target)) {
        displayValue_PROGRESS_MONTHLY = `${displayValue_PROGRESS_MONTHLY}${metric_PROGRESS_MONTHLY.separator}${metric_PROGRESS_MONTHLY.target[1]}`;
      } else {
        if (metric_PROGRESS_MONTHLY.suffix) displayValue_PROGRESS_MONTHLY += metric_PROGRESS_MONTHLY.suffix;
      }

      element_PROGRESS_MONTHLY.textContent = displayValue_PROGRESS_MONTHLY;
    }, 30);
  }

  setupInteractions_PROGRESS_MONTHLY() {
    const metricCards_PROGRESS_MONTHLY = document.querySelectorAll('.metric-card-PROGRESS-MONTHLY');
    const reportButton_PROGRESS_MONTHLY = document.querySelector('.report-button-PROGRESS-MONTHLY');
    const insightCards_PROGRESS_MONTHLY = document.querySelectorAll('.insight-card-PROGRESS-MONTHLY');

    metricCards_PROGRESS_MONTHLY.forEach(card_PROGRESS_MONTHLY => {
      card_PROGRESS_MONTHLY.addEventListener('click', () => {
        this.handleMetricClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY);
      });
    });

    reportButton_PROGRESS_MONTHLY.addEventListener('click', () => {
      this.handleReportClick_PROGRESS_MONTHLY();
    });

    insightCards_PROGRESS_MONTHLY.forEach(card_PROGRESS_MONTHLY => {
      card_PROGRESS_MONTHLY.addEventListener('click', () => {
        this.handleInsightClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY);
      });
    });
  }

  handleMetricClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY) {
    // Remove previous selections
    document.querySelectorAll('.metric-card-PROGRESS-MONTHLY').forEach(c => {
      c.classList.remove('pulse-animation-PROGRESS-MONTHLY');
      c.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });

    // Highlight selected card
    card_PROGRESS_MONTHLY.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    card_PROGRESS_MONTHLY.classList.add('pulse-animation-PROGRESS-MONTHLY');

    const icon_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.querySelector('.metric-icon-PROGRESS-MONTHLY');
    icon_PROGRESS_MONTHLY.style.transform = 'scale(1.3) rotate(15deg)';

    setTimeout(() => {
      icon_PROGRESS_MONTHLY.style.transform = 'scale(1) rotate(0deg)';
      card_PROGRESS_MONTHLY.classList.remove('pulse-animation-PROGRESS-MONTHLY');
      card_PROGRESS_MONTHLY.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }, 2000);
  }

  handleInsightClick_PROGRESS_MONTHLY(card_PROGRESS_MONTHLY) {
    const originalBackground_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.style.background;
    card_PROGRESS_MONTHLY.style.background = 'rgba(59, 130, 246, 0.2)';
    card_PROGRESS_MONTHLY.style.transform = 'scale(1.02)';

    setTimeout(() => {
      card_PROGRESS_MONTHLY.style.background = originalBackground_PROGRESS_MONTHLY;
      card_PROGRESS_MONTHLY.style.transform = 'scale(1)';
    }, 300);
  }

  handleReportClick_PROGRESS_MONTHLY() {
    const button_PROGRESS_MONTHLY = document.querySelector('.report-button-PROGRESS-MONTHLY');
    button_PROGRESS_MONTHLY.style.transform = 'scale(0.95)';

    setTimeout(() => {
      button_PROGRESS_MONTHLY.style.transform = 'scale(1)';
      this.showComprehensiveReport_PROGRESS_MONTHLY();
    }, 150);
  }

  showComprehensiveReport_PROGRESS_MONTHLY() {
    const modal_PROGRESS_MONTHLY = document.createElement('div');
    modal_PROGRESS_MONTHLY.className = 'report-modal-PROGRESS-MONTHLY';
    modal_PROGRESS_MONTHLY.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        animation: fadeIn-PROGRESS-MONTHLY 0.3s ease;
                    ">
                        <div style="
                            background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95));
                            border-radius: 20px;
                            padding: 40px;
                            max-width: 600px;
                            width: 90%;
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            backdrop-filter: blur(20px);
                        ">
                            <h2 style="color: #3b82f6; margin-bottom: 20px; font-size: 24px;">📊 Comprehensive Monthly Report</h2>
                            <div style="text-align: left; margin: 20px 0;">
                                <p style="color: #94a3b8; margin-bottom: 15px; line-height: 1.6;">
                                    <strong style="color: #ffffff;">Performance Highlights:</strong><br>
                                    • Completed 77% of monthly workout goals<br>
                                    • Achieved personal record streak of 18 days<br>
                                    • Burned 7,200 calories total (300/day average)<br>
                                    • Monday shows consistent miss pattern
                                </p>
                                <p style="color: #94a3b8; margin-bottom: 15px; line-height: 1.6;">
                                    <strong style="color: #ffffff;">Recommendations:</strong><br>
                                    • Schedule Monday prep sessions on Sunday evening<br>
                                    • Maintain current intensity level (Medium)<br>
                                    • Target 85% completion rate next month
                                </p>
                            </div>
                            <button onclick="document.body.removeChild(this.closest('.report-modal-PROGRESS-MONTHLY'))" style="
                                background: linear-gradient(135deg, #3b82f6, #1d4ed8);
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 10px;
                                cursor: pointer;
                                font-size: 16px;
                                font-weight: 600;
                                margin-top: 20px;
                            ">Close Report</button>
                        </div>
                    </div>
                `;

    const style_PROGRESS_MONTHLY = document.createElement('style');
    style_PROGRESS_MONTHLY.textContent = `
                    @keyframes fadeIn-PROGRESS-MONTHLY {
                        from { opacity: 0; transform: scale(0.9); }
                        to { opacity: 1; transform: scale(1); }
                    }
                `;
    document.head.appendChild(style_PROGRESS_MONTHLY);
    document.body.appendChild(modal_PROGRESS_MONTHLY);
  }

  setupRealtimeUpdates_PROGRESS_MONTHLY() {
    // Simulate real-time data updates
    setInterval(() => {
      const completionRate_PROGRESS_MONTHLY = document.querySelector('.green-value-PROGRESS-MONTHLY');
      if (completionRate_PROGRESS_MONTHLY && Math.random() > 0.7) {
        const currentRate_PROGRESS_MONTHLY = parseInt(completionRate_PROGRESS_MONTHLY.textContent);
        const newRate_PROGRESS_MONTHLY = Math.min(currentRate_PROGRESS_MONTHLY + 1, 100);
        completionRate_PROGRESS_MONTHLY.textContent = `${newRate_PROGRESS_MONTHLY}%`;

        // Update progress bar
        const progressBar_PROGRESS_MONTHLY = document.querySelector('.progress-fill-PROGRESS-MONTHLY');
        progressBar_PROGRESS_MONTHLY.style.width = `${newRate_PROGRESS_MONTHLY}%`;
      }
    }, 10000);
  }

  updateMonthlyData_PROGRESS_MONTHLY(newData_PROGRESS_MONTHLY) {
    Object.keys(newData_PROGRESS_MONTHLY).forEach(key_PROGRESS_MONTHLY => {
      const element_PROGRESS_MONTHLY = document.querySelector(`[data-metric="${key_PROGRESS_MONTHLY}"]`);
      if (element_PROGRESS_MONTHLY) {
        element_PROGRESS_MONTHLY.textContent = newData_PROGRESS_MONTHLY[key_PROGRESS_MONTHLY];
      }
    });
  }
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
  const dashboard_PROGRESS_MONTHLY = new MonthlyDashboard_PROGRESS_MONTHLY();

  // Add breathing animation to star icon
  const starIcon_PROGRESS_MONTHLY = document.querySelector('.star-icon-PROGRESS-MONTHLY');
  if (starIcon_PROGRESS_MONTHLY) {
    setInterval(() => {
      starIcon_PROGRESS_MONTHLY.style.transform = 'scale(1.1) rotate(5deg)';
      setTimeout(() => {
        starIcon_PROGRESS_MONTHLY.style.transform = 'scale(1) rotate(0deg)';
      }, 500);
    }, 3000);
  }
});

// Add hover sound effects (visual feedback)
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.metric-card-PROGRESS-MONTHLY')) {
    const card_PROGRESS_MONTHLY = e.target.closest('.metric-card-PROGRESS-MONTHLY');
    const icon_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.querySelector('.metric-icon-PROGRESS-MONTHLY');
    icon_PROGRESS_MONTHLY.style.transform = 'scale(1.1)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.metric-card-PROGRESS-MONTHLY')) {
    const card_PROGRESS_MONTHLY = e.target.closest('.metric-card-PROGRESS-MONTHLY');
    const icon_PROGRESS_MONTHLY = card_PROGRESS_MONTHLY.querySelector('.metric-icon-PROGRESS-MONTHLY');
    icon_PROGRESS_MONTHLY.style.transform = 'scale(1)';
  }
});

// Add floating particles background effect
function createFloatingParticles_PROGRESS_MONTHLY() {
  const particleContainer_PROGRESS_MONTHLY = document.createElement('div');
  particleContainer_PROGRESS_MONTHLY.className = 'floating-particles-PROGRESS-MONTHLY';
  particleContainer_PROGRESS_MONTHLY.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                overflow: hidden;
            `;

  for (let i = 0; i < 30; i++) {
    const particle_PROGRESS_MONTHLY = document.createElement('div');
    particle_PROGRESS_MONTHLY.className = `particle-${i}-PROGRESS-MONTHLY`;
    particle_PROGRESS_MONTHLY.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 4 + 2}px;
                    height: ${Math.random() * 4 + 2}px;
                    background: ${['#3b82f6', '#fbbf24', '#f87171', '#a78bfa'][Math.floor(Math.random() * 4)]};
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    opacity: ${Math.random() * 0.5 + 0.2};
                    animation: float-particle-${i}-PROGRESS-MONTHLY ${Math.random() * 10 + 15}s linear infinite;
                `;
    particleContainer_PROGRESS_MONTHLY.appendChild(particle_PROGRESS_MONTHLY);

    // Create unique animation keyframes for each particle
    const keyframes_PROGRESS_MONTHLY = document.createElement('style');
    keyframes_PROGRESS_MONTHLY.textContent = `
                    @keyframes float-particle-${i}-PROGRESS-MONTHLY {
                        0% { 
                            transform: translateY(0px) rotate(0deg); 
                            opacity: 0;
                        }
                        10% {
                            opacity: ${Math.random() * 0.5 + 0.2};
                        }
                        90% {
                            opacity: ${Math.random() * 0.5 + 0.2};
                        }
                        100% { 
                            transform: translateY(-100vh) rotate(360deg); 
                            opacity: 0;
                        }
                    }
                `;
    document.head.appendChild(keyframes_PROGRESS_MONTHLY);
  }

  document.body.appendChild(particleContainer_PROGRESS_MONTHLY);
}

// Initialize floating particles
window.addEventListener('load', () => {
  createFloatingParticles_PROGRESS_MONTHLY();
});

// Add data export functionality
function exportMonthlyData_PROGRESS_MONTHLY() {
  const data_PROGRESS_MONTHLY = {
    monthlyWorkouts: '24/31',
    totalTrainingTime: '18h',
    caloriesBurned: '7,200',
    bestStreak: '18',
    completionRate: '77%',
    missedSessions: '7',
    avgIntensity: 'Medium',
    progressVsGoal: '+12%',
    mostMissedDay: 'Monday (3 times)',
    recoveryRate: '85%'
  };

  const jsonData_PROGRESS_MONTHLY = JSON.stringify(data_PROGRESS_MONTHLY, null, 2);
  const blob_PROGRESS_MONTHLY = new Blob([jsonData_PROGRESS_MONTHLY], { type: 'application/json' });
  const url_PROGRESS_MONTHLY = URL.createObjectURL(blob_PROGRESS_MONTHLY);

  const link_PROGRESS_MONTHLY = document.createElement('a');
  link_PROGRESS_MONTHLY.href = url_PROGRESS_MONTHLY;
  link_PROGRESS_MONTHLY.download = `monthly-fitness-report-${new Date().toISOString().slice(0, 7)}.json`;
  document.body.appendChild(link_PROGRESS_MONTHLY);
  link_PROGRESS_MONTHLY.click();
  document.body.removeChild(link_PROGRESS_MONTHLY);
  URL.revokeObjectURL(url_PROGRESS_MONTHLY);
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case 'r':
        e.preventDefault();
        document.querySelector('.report-button-PROGRESS-MONTHLY').click();
        break;
      case 'e':
        e.preventDefault();
        exportMonthlyData_PROGRESS_MONTHLY();
        break;
    }
  }
});

// Add progress tracking animation
function trackProgress_PROGRESS_MONTHLY() {
  const progressElements_PROGRESS_MONTHLY = document.querySelectorAll('.summary-value-PROGRESS-MONTHLY');

  progressElements_PROGRESS_MONTHLY.forEach(element_PROGRESS_MONTHLY => {
    element_PROGRESS_MONTHLY.addEventListener('animationend', () => {
      element_PROGRESS_MONTHLY.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
      setTimeout(() => {
        element_PROGRESS_MONTHLY.style.boxShadow = 'none';
      }, 1000);
    });
  });
}

// Initialize progress tracking
setTimeout(trackProgress_PROGRESS_MONTHLY, 2000);

// WEEKLY
class WeeklyDashboard_PROGRESS_WEEKLY {
  constructor() {
    this.initializeAnimations_PROGRESS_WEEKLY();
    this.setupInteractivity_PROGRESS_WEEKLY();
    this.animateCounters_PROGRESS_WEEKLY();
  }

  initializeAnimations_PROGRESS_WEEKLY() {
    const progressBars_PROGRESS_WEEKLY = document.querySelectorAll('.progress-bar-fill-PROGRESS-WEEKLY');

    progressBars_PROGRESS_WEEKLY.forEach((bar_PROGRESS_WEEKLY, index_PROGRESS_WEEKLY) => {
      const targetProgress_PROGRESS_WEEKLY = bar_PROGRESS_WEEKLY.getAttribute('data-progress') || 0;
      bar_PROGRESS_WEEKLY.style.width = '0%';

      setTimeout(() => {
        bar_PROGRESS_WEEKLY.style.width = `${targetProgress_PROGRESS_WEEKLY}%`;
      }, 800 + (index_PROGRESS_WEEKLY * 200));
    });
  }

  animateCounters_PROGRESS_WEEKLY() {
    const counters_PROGRESS_WEEKLY = [
      { element: document.querySelector('.stats-grid-PROGRESS-WEEKLY .stat-value-PROGRESS-WEEKLY'), target: [6, 7], separator: '/' },
      { element: document.querySelectorAll('.weekly-stat-value-PROGRESS-WEEKLY')[0], target: 6 },
      { element: document.querySelectorAll('.weekly-stat-value-PROGRESS-WEEKLY')[2], target: 5, prefix: '+', suffix: '%' }
    ];

    counters_PROGRESS_WEEKLY.forEach((counter_PROGRESS_WEEKLY, index_PROGRESS_WEEKLY) => {
      if (!counter_PROGRESS_WEEKLY.element) return;

      setTimeout(() => {
        this.animateNumber_PROGRESS_WEEKLY(counter_PROGRESS_WEEKLY);
      }, 1200 + (index_PROGRESS_WEEKLY * 300));
    });
  }

  animateNumber_PROGRESS_WEEKLY(counter_PROGRESS_WEEKLY) {
    const element_PROGRESS_WEEKLY = counter_PROGRESS_WEEKLY.element;
    const target_PROGRESS_WEEKLY = Array.isArray(counter_PROGRESS_WEEKLY.target)
      ? counter_PROGRESS_WEEKLY.target[0]
      : counter_PROGRESS_WEEKLY.target;

    let current_PROGRESS_WEEKLY = 0;
    const increment_PROGRESS_WEEKLY = target_PROGRESS_WEEKLY / 30;

    const timer_PROGRESS_WEEKLY = setInterval(() => {
      current_PROGRESS_WEEKLY += increment_PROGRESS_WEEKLY;

      if (current_PROGRESS_WEEKLY >= target_PROGRESS_WEEKLY) {
        current_PROGRESS_WEEKLY = target_PROGRESS_WEEKLY;
        clearInterval(timer_PROGRESS_WEEKLY);
      }

      let displayText_PROGRESS_WEEKLY = Math.floor(current_PROGRESS_WEEKLY);

      if (Array.isArray(counter_PROGRESS_WEEKLY.target)) {
        displayText_PROGRESS_WEEKLY = `${displayText_PROGRESS_WEEKLY}${counter_PROGRESS_WEEKLY.separator}${counter_PROGRESS_WEEKLY.target[1]}`;
      } else {
        if (counter_PROGRESS_WEEKLY.prefix) displayText_PROGRESS_WEEKLY = counter_PROGRESS_WEEKLY.prefix + displayText_PROGRESS_WEEKLY;
        if (counter_PROGRESS_WEEKLY.suffix) displayText_PROGRESS_WEEKLY += counter_PROGRESS_WEEKLY.suffix;
      }

      element_PROGRESS_WEEKLY.textContent = displayText_PROGRESS_WEEKLY;
    }, 50);
  }

  setupInteractivity_PROGRESS_WEEKLY() {
    const statCards_PROGRESS_WEEKLY = document.querySelectorAll('.stat-card-PROGRESS-WEEKLY');
    const analysisBtn_PROGRESS_WEEKLY = document.querySelector('.analysis-btn-PROGRESS-WEEKLY');

    statCards_PROGRESS_WEEKLY.forEach(card_PROGRESS_WEEKLY => {
      card_PROGRESS_WEEKLY.addEventListener('click', () => {
        this.handleCardClick_PROGRESS_WEEKLY(card_PROGRESS_WEEKLY);
      });
    });

    analysisBtn_PROGRESS_WEEKLY.addEventListener('click', () => {
      this.handleAnalysisClick_PROGRESS_WEEKLY();
    });

    this.setupHoverEffects_PROGRESS_WEEKLY();
  }

  handleCardClick_PROGRESS_WEEKLY(card_PROGRESS_WEEKLY) {
    // Remove previous selections
    document.querySelectorAll('.stat-card-PROGRESS-WEEKLY').forEach(c => {
      c.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      c.style.transform = '';
    });

    // Highlight selected card
    card_PROGRESS_WEEKLY.style.borderColor = 'rgba(59, 130, 246, 0.5)';
    card_PROGRESS_WEEKLY.style.transform = 'translateY(-8px) scale(1.02)';

    // Pulse effect
    const icon_PROGRESS_WEEKLY = card_PROGRESS_WEEKLY.querySelector('.stat-icon-PROGRESS-WEEKLY');
    icon_PROGRESS_WEEKLY.style.transform = 'scale(1.2)';

    setTimeout(() => {
      icon_PROGRESS_WEEKLY.style.transform = 'scale(1)';
      card_PROGRESS_WEEKLY.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      card_PROGRESS_WEEKLY.style.transform = '';
    }, 1500);
  }

  handleAnalysisClick_PROGRESS_WEEKLY() {
    const btn_PROGRESS_WEEKLY = document.querySelector('.analysis-btn-PROGRESS-WEEKLY');
    btn_PROGRESS_WEEKLY.style.background = 'rgba(59, 130, 246, 0.3)';
    btn_PROGRESS_WEEKLY.style.transform = 'scale(0.95)';

    setTimeout(() => {
      btn_PROGRESS_WEEKLY.style.background = '';
      btn_PROGRESS_WEEKLY.style.transform = '';
      this.showAnalysisModal_PROGRESS_WEEKLY();
    }, 150);
  }

  showAnalysisModal_PROGRESS_WEEKLY() {
    const modal_PROGRESS_WEEKLY = document.createElement('div');
    modal_PROGRESS_WEEKLY.className = 'analysis-modal-PROGRESS-WEEKLY';
    modal_PROGRESS_WEEKLY.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                    ">
                        <div style="
                            background: rgba(15, 23, 42, 0.95);
                            border-radius: 20px;
                            padding: 30px;
                            max-width: 500px;
                            text-align: center;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                        ">
                            <h3 style="color: #3b82f6; margin-bottom: 15px;">📈 Detailed Analysis</h3>
                            <p style="color: #94a3b8; margin-bottom: 20px;">
                                Your weekly performance shows consistent improvement with 86% goal completion.
                                Average session intensity has increased by 12% compared to last month.
                            </p>
                            <button onclick="document.body.removeChild(this.closest('.analysis-modal-PROGRESS-WEEKLY'))" style="
                                background: #3b82f6;
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 10px;
                                cursor: pointer;
                                font-size: 14px;
                            ">Close</button>
                        </div>
                    </div>
                `;

    document.body.appendChild(modal_PROGRESS_WEEKLY);
  }

  setupHoverEffects_PROGRESS_WEEKLY() {
    const successBanner_PROGRESS_WEEKLY = document.querySelector('.success-banner-PROGRESS-WEEKLY');

    successBanner_PROGRESS_WEEKLY.addEventListener('mouseenter', () => {
      successBanner_PROGRESS_WEEKLY.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.15))';
    });

    successBanner_PROGRESS_WEEKLY.addEventListener('mouseleave', () => {
      successBanner_PROGRESS_WEEKLY.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))';
    });
  }

  updateWeeklyData_PROGRESS_WEEKLY(newData_PROGRESS_WEEKLY) {
    Object.keys(newData_PROGRESS_WEEKLY).forEach(key_PROGRESS_WEEKLY => {
      const element_PROGRESS_WEEKLY = document.querySelector(`[data-stat="${key_PROGRESS_WEEKLY}"]`);
      if (element_PROGRESS_WEEKLY) {
        element_PROGRESS_WEEKLY.textContent = newData_PROGRESS_WEEKLY[key_PROGRESS_WEEKLY];
      }
    });
  }
}

// Initialize dashboard when page loads
document.addEventListener('DOMContentLoaded', () => {
  const dashboard_PROGRESS_WEEKLY = new WeeklyDashboard_PROGRESS_WEEKLY();

  // Simulate real-time updates
  setTimeout(() => {
    dashboard_PROGRESS_WEEKLY.updateWeeklyData_PROGRESS_WEEKLY({
      'weekly-sessions': '7/7',
      'streak-days': '14'
    });
  }, 5000);
});

// Add particle animation background
function createParticles_PROGRESS_WEEKLY() {
  const particleCount_PROGRESS_WEEKLY = 50;
  const particles_PROGRESS_WEEKLY = document.createElement('div');
  particles_PROGRESS_WEEKLY.className = 'particles-container-PROGRESS-WEEKLY';
  particles_PROGRESS_WEEKLY.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            `;

  for (let i = 0; i < particleCount_PROGRESS_WEEKLY; i++) {
    const particle_PROGRESS_WEEKLY = document.createElement('div');
    particle_PROGRESS_WEEKLY.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    animation: float-${i}-PROGRESS-WEEKLY 6s infinite ease-in-out;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
    particles_PROGRESS_WEEKLY.appendChild(particle_PROGRESS_WEEKLY);

    // Create unique animation for each particle
    const style_PROGRESS_WEEKLY = document.createElement('style');
    style_PROGRESS_WEEKLY.textContent = `
                    @keyframes float-${i}-PROGRESS-WEEKLY {
                        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                        50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
                    }
                `;
    document.head.appendChild(style_PROGRESS_WEEKLY);
  }

  document.body.appendChild(particles_PROGRESS_WEEKLY);
}

// Initialize particles after page load
window.addEventListener('load', createParticles_PROGRESS_WEEKLY);

class FitnessTracker_PROGRESS {
  constructor() {
    this.initializeProgressBars_PROGRESS();
    this.addInteractivity_PROGRESS();
  }

  initializeProgressBars_PROGRESS() {
    const progressBars_PROGRESS = document.querySelectorAll('.progress-fill-PROGRESS');

    progressBars_PROGRESS.forEach((bar_PROGRESS, index_PROGRESS) => {
      const width_PROGRESS = bar_PROGRESS.style.width;
      bar_PROGRESS.style.width = '0%';

      setTimeout(() => {
        bar_PROGRESS.style.width = width_PROGRESS;
      }, 500 + (index_PROGRESS * 200));
    });
  }

  addInteractivity_PROGRESS() {
    const sessionItems_PROGRESS = document.querySelectorAll('.session-item-PROGRESS');
    const reportBtn_PROGRESS = document.querySelector('.report-btn-PROGRESS');

    sessionItems_PROGRESS.forEach(item_PROGRESS => {
      item_PROGRESS.addEventListener('click', () => {
        this.handleSessionClick_PROGRESS(item_PROGRESS);
      });
    });

    reportBtn_PROGRESS.addEventListener('click', () => {
      this.handleReportClick_PROGRESS();
    });

    this.animateStreak_PROGRESS();
  }

  handleSessionClick_PROGRESS(session_PROGRESS) {
    // Remove previous selections
    document.querySelectorAll('.session-item-PROGRESS').forEach(item => {
      item.style.transform = '';
      item.style.background = '';
    });

    // Highlight selected session
    session_PROGRESS.style.background = 'rgba(59, 130, 246, 0.1)';
    session_PROGRESS.style.transform = 'translateX(10px) scale(1.02)';

    // Reset after animation
    setTimeout(() => {
      session_PROGRESS.style.background = '';
      session_PROGRESS.style.transform = '';
    }, 2000);
  }

  handleReportClick_PROGRESS() {
    const reportBtn_PROGRESS = document.querySelector('.report-btn-PROGRESS');
    reportBtn_PROGRESS.style.background = 'rgba(59, 130, 246, 0.3)';
    reportBtn_PROGRESS.style.transform = 'scale(0.95)';

    setTimeout(() => {
      reportBtn_PROGRESS.style.background = '';
      reportBtn_PROGRESS.style.transform = '';
      alert('Opening detailed fitness report...');
    }, 150);
  }

  animateStreak_PROGRESS() {
    const streakDays_PROGRESS = document.querySelector('.streak-days-PROGRESS');
    const streakIcon_PROGRESS = document.querySelector('.streak-icon-PROGRESS');

    let currentDay_PROGRESS = 0;
    const targetDay_PROGRESS = 13;

    const countInterval_PROGRESS = setInterval(() => {
      if (currentDay_PROGRESS <= targetDay_PROGRESS) {
        streakDays_PROGRESS.textContent = `${currentDay_PROGRESS} Days`;
        currentDay_PROGRESS++;
      } else {
        clearInterval(countInterval_PROGRESS);
      }
    }, 100);

    // Pulsing fire animation
    setInterval(() => {
      streakIcon_PROGRESS.style.transform = 'scale(1.1)';
      setTimeout(() => {
        streakIcon_PROGRESS.style.transform = 'scale(1)';
      }, 300);
    }, 2000);
  }

  updateGoalProgress_PROGRESS(goalName_PROGRESS, currentValue_PROGRESS, maxValue_PROGRESS) {
    const goalItems_PROGRESS = document.querySelectorAll('.goal-item-PROGRESS');

    goalItems_PROGRESS.forEach(item_PROGRESS => {
      const nameElement_PROGRESS = item_PROGRESS.querySelector('.goal-name-PROGRESS');
      if (nameElement_PROGRESS.textContent === goalName_PROGRESS) {
        const valueElement_PROGRESS = item_PROGRESS.querySelector('.goal-value-PROGRESS');
        const progressBar_PROGRESS = item_PROGRESS.querySelector('.progress-fill-PROGRESS');

        const percentage_PROGRESS = (currentValue_PROGRESS / maxValue_PROGRESS) * 100;

        valueElement_PROGRESS.textContent = `${currentValue_PROGRESS}/${maxValue_PROGRESS}`;
        progressBar_PROGRESS.style.width = `${Math.min(percentage_PROGRESS, 100)}%`;

        if (percentage_PROGRESS >= 100) {
          item_PROGRESS.querySelector('.progress-bar-PROGRESS').classList.add('completed-bar-PROGRESS');
        }
      }
    });
  }
}

// Initialize the fitness tracker when page loads
document.addEventListener('DOMContentLoaded', () => {
  const tracker_PROGRESS = new FitnessTracker_PROGRESS();

  // Example of updating goals dynamically
  setTimeout(() => {
    tracker_PROGRESS.updateGoalProgress_PROGRESS('Active Minutes', 50, 60);
  }, 3000);
});

// Add some hover effects
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.session-item-PROGRESS')) {
    e.target.closest('.session-item-PROGRESS').style.borderColor = 'rgba(59, 130, 246, 0.3)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.session-item-PROGRESS')) {
    e.target.closest('.session-item-PROGRESS').style.borderColor = 'rgba(255, 255, 255, 0.05)';
  }
});
