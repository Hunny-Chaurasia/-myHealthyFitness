let userPoints = 342;
let userStreak = 7;

function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    // Show selected screen
    document.getElementById(screenId).classList.add('active');

    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');
}

function showLesson() {
    showScreen('lesson');
    // Update nav to show we're in lesson mode
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
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
