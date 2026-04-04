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
(function(){
// ── Database ────────────────────────────────────────────────────
const DB = {
  chest:[
    {name:"Incline Barbell Press",difficulty:"Beginner",muscles:["pectorals","anterior deltoids","triceps"],equipment:["barbell","bench"],steps:["Lie on incline bench at 30-45°","Grip bar wider than shoulders","Lower bar to chest controlled","Press up explosively","Squeeze chest at top"]},
    {name:"Decline Barbell Press",difficulty:"Beginner",muscles:["lower chest","pectorals","triceps"],equipment:["barbell","decline bench"],steps:["Set bench to 15-30° decline","Grip bar, secure feet","Lower bar to lower chest","Press up with control","Use spotter for safety"]},
    {name:"Dumbbell Bench Press",difficulty:"Beginner",muscles:["pectorals","deltoids","triceps"],equipment:["dumbbells","flat bench"],steps:["Lie flat, hold dumbbells at chest","Press up until arms extended","Lower slowly with control","Keep core engaged throughout"]},
    {name:"Push-Up",difficulty:"Beginner",muscles:["chest","triceps","shoulders","core"],equipment:[],steps:["Start in plank position","Lower chest to floor","Keep body straight","Press back up","Engage core throughout"]},
    {name:"Cable Fly",difficulty:"Novice",muscles:["pectorals"],equipment:["cable machine"],steps:["Set cables at shoulder height","Stand in center, step forward","Bring handles together in arc","Squeeze chest at center","Return slowly"]},
    {name:"Dips (Chest Focus)",difficulty:"Novice",muscles:["lower chest","triceps","shoulders"],equipment:["dip bars"],steps:["Grip bars, lean forward 30°","Lower until shoulders below elbows","Push back up explosively","Keep lean forward for chest focus"]},
    {name:"Barbell Bench Press",difficulty:"Advanced",muscles:["pectorals","deltoids","triceps"],equipment:["barbell","flat bench","rack"],steps:["Lie flat, grip slightly wider than shoulders","Unrack bar above chest","Lower to lower chest controlled","Press explosively back up","Lock out but don't hyperextend"]},
    {name:"Dumbbell Fly",difficulty:"Novice",muscles:["pectorals"],equipment:["dumbbells","bench"],steps:["Lie flat holding dumbbells above chest","Lower arms in wide arc","Feel stretch in chest","Bring back together in arc","Keep slight bend in elbows"]}
  ],
  arms:[
    {name:"Dumbbell Curl",difficulty:"Beginner",muscles:["biceps","brachialis"],equipment:["dumbbells"],steps:["Stand with dumbbells at sides, palms forward","Keep elbows pinned to sides","Curl toward shoulders","Squeeze at top","Lower with control"]},
    {name:"Hammer Curl",difficulty:"Beginner",muscles:["brachialis","brachioradialis","biceps"],equipment:["dumbbells"],steps:["Stand with neutral grip","Keep elbows at sides","Curl up maintaining neutral grip","Squeeze at top","Lower controlled"]},
    {name:"Tricep Pushdown",difficulty:"Beginner",muscles:["triceps"],equipment:["cable machine"],steps:["Grip attachment with elbows at 90°","Keep elbows pinned to sides","Push down until arms straight","Squeeze triceps","Return slowly"]},
    {name:"Bench Dip",difficulty:"Beginner",muscles:["triceps","anterior deltoid"],equipment:["bench"],steps:["Hands on bench edge, walk feet forward","Lower by bending elbows to 90°","Keep back close to bench","Press back up","Keep shoulders down"]},
    {name:"Barbell Curl",difficulty:"Novice",muscles:["biceps","brachialis"],equipment:["barbell"],steps:["Stand holding barbell underhand","Elbows pinned to sides","Curl to shoulders","Squeeze hard at top","Lower slowly over 3 seconds"]},
    {name:"Skull Crushers",difficulty:"Novice",muscles:["triceps"],equipment:["ez-bar","bench"],steps:["Lie on bench, arms straight up","Keep elbows pointing up","Lower bar to forehead","Extend back up","Squeeze triceps at top"]},
    {name:"Lateral Raise",difficulty:"Beginner",muscles:["deltoids","medial deltoid"],equipment:["dumbbells"],steps:["Stand with dumbbells at sides","Slight bend in elbows","Raise out to sides to shoulder height","Pause at top","Lower slowly"]},
    {name:"Barbell Overhead Press",difficulty:"Novice",muscles:["deltoids","triceps","trapezius"],equipment:["barbell"],steps:["Hold bar at collarbone, elbows forward","Brace core, squeeze glutes","Press directly overhead","Move head back to clear bar","Lower with control"]},
    {name:"Concentration Curl",difficulty:"Advanced",muscles:["biceps"],equipment:["dumbbell","bench"],steps:["Sit on bench, rest upper arm on inner thigh","Curl dumbbell to shoulder","Squeeze hard at top","Pinky slightly up","Lower fully"]},
    {name:"Close-Grip Bench Press",difficulty:"Advanced",muscles:["triceps","chest"],equipment:["barbell","bench"],steps:["Grip shoulder-width","Tuck elbows close to body","Lower to lower chest","Press explosively","Lock out elbows"]},
  ],
  back:[
    {name:"Resistance Band Row",difficulty:"Beginner",muscles:["rhomboids","trapezius","rear deltoids","biceps"],equipment:["resistance band"],steps:["Anchor band at chest height","Pull toward chest squeezing shoulder blades","Keep elbows close","Pause at peak","Return slowly"]},
    {name:"Seated Cable Row",difficulty:"Beginner",muscles:["rhomboids","trapezius","lats","rear deltoids","biceps"],equipment:["cable machine"],steps:["Sit with back straight, feet braced","Pull handle to lower chest","Squeeze shoulder blades at peak","Pause 1-2 seconds","Return controlled"]},
    {name:"Lat Pulldown",difficulty:"Beginner",muscles:["latissimus dorsi","biceps","rhomboids"],equipment:["cable machine"],steps:["Grip wider than shoulder-width","Lean back 10-15°","Pull bar to upper chest leading with elbows","Squeeze lats at bottom","Return slowly feeling stretch"]},
    {name:"Barbell Bent-Over Row",difficulty:"Novice",muscles:["rhomboids","trapezius","lats","lower back"],equipment:["barbell"],steps:["Stand feet shoulder-width, knees soft","Hinge to 45°, back flat","Pull bar to lower chest","Squeeze shoulder blades","Lower controlled"]},
    {name:"Conventional Deadlift",difficulty:"Advanced",muscles:["lower back","glutes","hamstrings","quads","traps"],equipment:["barbell"],steps:["Feet hip-width, shins close to bar","Grip just outside knees","Back flat, chest up","Drive through heels to stand","Squeeze glutes at top"]},
    {name:"Face Pull",difficulty:"Novice",muscles:["rear deltoids","trapezius","rhomboids","rotator cuff"],equipment:["cable machine"],steps:["Attach rope to high pulley","Pull toward face, elbows high","Externally rotate at peak","Squeeze shoulder blades","Return controlled"]},
    {name:"Superman Hold",difficulty:"Beginner",muscles:["erector spinae","glutes","hamstrings"],equipment:[],steps:["Lie face down, arms extended overhead","Lift arms, chest, and legs off floor","Squeeze glutes and lower back","Hold 2-3 seconds","Lower with control"]},
  ],
  core:[
    {name:"Forearm Plank",difficulty:"Beginner",muscles:["core","shoulders","glutes","lower back"],equipment:[],steps:["Lift onto forearms and toes","Body in straight line head to heels","Squeeze glutes and core","Breathe steadily","Hold 20-30 seconds"]},
    {name:"Mountain Climbers",difficulty:"Beginner",muscles:["core","hip flexors","shoulders"],equipment:[],steps:["Start in high plank position","Drive right knee toward chest","Switch legs alternating","Keep hips level throughout","30-60 seconds continuous"]},
    {name:"Dead Bug",difficulty:"Beginner",muscles:["deep core","transverse abdominis"],equipment:[],steps:["Lie on back, legs in tabletop, arms up","Press lower back into floor","Extend opposite arm and leg slowly","Hover above floor without touching","Return and alternate sides"]},
    {name:"Russian Twist",difficulty:"Beginner",muscles:["obliques","rectus abdominis"],equipment:["dumbbell"],steps:["Sit at 45° knees bent","Lift feet off floor","Rotate torso side to side","Control the movement","10-15 reps per side"]},
    {name:"Ab Wheel Rollout",difficulty:"Intermediate",muscles:["rectus abdominis","transverse abdominis","lats"],equipment:["ab wheel"],steps:["Kneel holding ab wheel under shoulders","Brace core and glutes","Roll forward keeping back flat","Stop before back sags","Pull back using core"]},
  ],
  legs:[
    {name:"Bodyweight Squat",difficulty:"Beginner",muscles:["quadriceps","glutes","hamstrings","core"],equipment:[],steps:["Feet shoulder-width, toes slightly out","Push hips back and bend knees","Lower until thighs parallel","Drive through heels to stand","Squeeze glutes at top"]},
    {name:"Glute Bridge",difficulty:"Beginner",muscles:["glutes","hamstrings","core"],equipment:[],steps:["Lie on back, knees bent, feet flat","Drive through heels to lift hips","Squeeze glutes at top","Hold 1-2 seconds","Lower with control"]},
    {name:"Goblet Squat",difficulty:"Novice",muscles:["quadriceps","glutes","core"],equipment:["dumbbell","kettlebell"],steps:["Hold weight at chest vertically","Feet shoulder-width, toes out","Lower into squat keeping chest up","Use elbows to push knees out","Drive through heels to stand"]},
    {name:"Barbell Back Squat",difficulty:"Advanced",muscles:["quadriceps","glutes","hamstrings","core","lower back"],equipment:["barbell","squat rack"],steps:["Bar on upper back, grip wider than shoulders","Feet shoulder-width, toes out","Lower with control until thighs parallel","Drive through feet explosively","Keep chest up throughout"]},
    {name:"Romanian Deadlift",difficulty:"Novice",muscles:["hamstrings","glutes","lower back"],equipment:["barbell","dumbbells"],steps:["Stand holding weight in front of thighs","Slight bend in knees","Push hips back, lower weight down shins","Feel hamstring stretch","Drive hips forward to stand"]},
    {name:"Bulgarian Split Squat",difficulty:"Advanced",muscles:["quadriceps","glutes","hamstrings","core"],equipment:["dumbbells","bench"],steps:["Rear foot on bench 2 feet behind","Hold dumbbells at sides","Lower back knee toward floor","Keep front heel planted","Drive through front heel to stand"]},
    {name:"Walking Lunge",difficulty:"Advanced",muscles:["glutes","quadriceps","hamstrings"],equipment:[],steps:["Step forward with right leg","Lower back knee toward floor","Front thigh parallel to floor","Drive through front heel to step forward","Keep torso upright"]},
    {name:"Standing Calf Raise",difficulty:"Beginner",muscles:["gastrocnemius","calves"],equipment:[],steps:["Stand on balls of feet on step","Rise as high as possible","Squeeze calves at top 1-2 seconds","Lower heels below step for stretch","No bouncing"]},
  ],
  yoga:[
    {name:"Mountain Pose",aliases:["tadasana"],difficulty:"Beginner",muscles:["full body","spine","core"],equipment:[],steps:["Feet together or hip-width","Distribute weight evenly","Engage thighs, micro-bend knees","Roll shoulders back and down","Breathe deeply 30-60 seconds"]},
    {name:"Warrior I",aliases:["virabhadrasana i","warrior 1"],difficulty:"Beginner",muscles:["quadriceps","glutes","hip flexors","shoulders"],equipment:[],steps:["Step left foot back 3-4 feet","Turn left foot out 45°","Bend right knee to 90°","Sweep arms overhead","Hold 30-45 seconds each side"]},
    {name:"Warrior II",aliases:["virabhadrasana ii","warrior 2"],difficulty:"Beginner",muscles:["quadriceps","glutes","inner thighs","shoulders"],equipment:[],steps:["Feet 3-4 feet apart","Front foot forward, back foot 90°","Bend front knee over ankle","Extend arms to sides at shoulder height","Hold 30-45 seconds each side"]},
    {name:"Child's Pose",aliases:["balasana"],difficulty:"Beginner",muscles:["lower back","hips","quadriceps","shoulders"],equipment:[],steps:["Kneel with knees wide, big toes touching","Sit back on heels","Fold torso forward, belly between thighs","Arms extended or alongside body","Rest 1-2 minutes, breathe into lower back"]},
    {name:"Downward Dog",aliases:["adho mukha svanasana","down dog"],difficulty:"Novice",muscles:["hamstrings","calves","shoulders","spine"],equipment:[],steps:["Start on hands and knees","Tuck toes, lift hips toward ceiling","Press palms down, draw shoulders back","Bend knees if hamstrings are tight","Hold 45-60 seconds"]},
    {name:"Bridge Pose",aliases:["setu bandha"],difficulty:"Novice",muscles:["glutes","hamstrings","lower back","chest"],equipment:[],steps:["Lie on back, knees bent, feet flat hip-width","Press through feet and arms","Lift hips toward ceiling","Roll shoulders under, lift chest","Hold 30-45 seconds"]},
    {name:"Wheel Pose",aliases:["urdhva dhanurasana"],difficulty:"Advanced",muscles:["full spine","shoulders","chest","glutes","wrists"],equipment:[],steps:["Lie on back, hands by ears fingers toward shoulders","Press into hands and feet","Lift hips then head off floor","Straighten arms and legs","Hold 20-30 seconds"]},
    {name:"Boat Pose",aliases:["navasana"],difficulty:"Novice",muscles:["core","hip flexors","spine"],equipment:[],steps:["Sit, lean back slightly on sit bones","Lift feet, shins parallel to floor","Extend arms forward","Keep spine straight, chest lifted","Hold 20-30 seconds"]},
  ]
};
 
const ALL = [];
for(const [cat,exs] of Object.entries(DB)) exs.forEach(ex=>ALL.push({...ex,category:cat}));
 
// ── Page map ─────────────────────────────────────────────────────
const PAGE_MAP = {
  chest:{file:'chest.html',  label:'Chest Workout Guide',       emoji:'🏋️'},
  arms: {file:'arms.html',   label:'Arms & Shoulders Guide',    emoji:'💪'},
  back: {file:'back.html',   label:'Back Training Guide',       emoji:'🔙'},
  core: {file:'core.html',   label:'Core & Abs Guide',          emoji:'🎯'},
  legs: {file:'legs.html',   label:'Legs & Glutes Guide',       emoji:'🦵'},
  yoga: {file:'yoga.html',   label:'Yoga & Flexibility Guide',  emoji:'🧘'},
};
 
// ── Keyword maps ──────────────────────────────────────────────────
const CAT_KW={
  chest:['chest','pec','bench'],
  arms:['arm','bicep','tricep','curl','shoulder','delt','forearm','overhead press'],
  back:['back','lat','trap','deadlift','row','pulldown','rhomboid'],
  core:['core','ab','plank','crunch','oblique','abdominal'],
  legs:['leg','squat','glute','hamstring','quad','calf','lunge','hip thrust'],
  yoga:['yoga','pose','asana','stretch','flexibility','warrior','downward','meditation']
};
const DIFF_KW={
  Beginner:['beginner','basic','easy','simple','start','new'],
  Novice:['novice','intermediate','medium'],
  Advanced:['advanced','hard','difficult','challenging','expert','pro']
};
const EQUIP_KW={
  dumbbell:['dumbbell','dumbbells'],
  barbell:['barbell'],
  'cable machine':['cable'],
  kettlebell:['kettlebell'],
};
 
// ── Renderers ─────────────────────────────────────────────────────
function diffBadge(d){
  const cls={Beginner:'mm-badge-beg',Novice:'mm-badge-nov',Advanced:'mm-badge-adv',Intermediate:'mm-badge-nov'}[d]||'mm-badge-nov';
  return `<span class="mm-badge ${cls}">${d}</span>`;
}
function catBadge(c){return `<span class="mm-badge mm-badge-cat">${c}</span>`;}
function eqBadge(e){return `<span class="mm-badge mm-badge-eq">${e||'Bodyweight'}</span>`;}
 
function renderCard(ex, showSteps=true){
  const eqBadges = ex.equipment.length ? ex.equipment.map(eqBadge).join('') : eqBadge('');
  let h=`<div class="mm-exercise-card">
    <div class="mm-ex-name">${ex.name}</div>
    <div class="mm-badges">${diffBadge(ex.difficulty)}${catBadge(ex.category)}${eqBadges}</div>
    <div class="mm-meta">💪 ${ex.muscles.join(', ')}</div>`;
  if(showSteps){
    h+=`<div class="mm-section-label">Steps</div>
    <ul class="mm-steps">${ex.steps.map((s,i)=>`<li><div class="mm-step-num">${i+1}</div><span>${s}</span></li>`).join('')}</ul>`;
  }
  return h+'</div>';
}
function renderListItem(ex,i){
  return `<div class="mm-list-item">
    <div class="mm-list-num">${i}</div>
    <div class="mm-list-name">${ex.name}</div>
    ${diffBadge(ex.difficulty)}
    <div class="mm-list-meta">${ex.muscles.slice(0,2).join(', ')}</div>
  </div>`;
}
function renderCTA(cats){
  const cat=(cats||[])[0]; if(!cat) return '';
  const pg=PAGE_MAP[cat]; if(!pg) return '';
  return `<div class="mm-cta">
    <p>${pg.emoji} <strong>Full ${pg.label}</strong><br>Programs, videos & tips inside.</p>
    <a class="mm-cta-btn" href="${pg.file}">Explore →</a>
  </div>`;
}
 
// ── Parse ─────────────────────────────────────────────────────────
function parseQ(msg){
  const m=msg.toLowerCase();
  const cats=[],diffs=[],equips=[];
  for(const [c,kws] of Object.entries(CAT_KW))  if(kws.some(k=>m.includes(k))) cats.push(c);
  for(const [d,kws] of Object.entries(DIFF_KW)) if(kws.some(k=>m.includes(k))) diffs.push(d);
  for(const [e,kws] of Object.entries(EQUIP_KW))if(kws.some(k=>m.includes(k))) equips.push(e);
  const noEquip=/no equipment|bodyweight|without equipment|at home/.test(m);
  const wantList=/list|all |show all|what are|give me/.test(m);
  const wantSteps=/how to|steps|guide|technique|form|do |mistakes|common mistake/.test(m);
  return{cats,diffs,equips,noEquip,wantList,wantSteps};
}
 
// ── Claude API ────────────────────────────────────────────────────
async function askClaude(userMsg, intent, ctx){
  const sys=`You are Motion Mentor, an expert AI fitness coach. Give clear, encouraging, science-backed advice.
Style: direct, short paragraphs, no markdown bullets or headers, plain text with line breaks.
For "common mistakes": list 4-5 specific mistakes with fixes.
For "how to": give technique cues beyond step numbers.
Keep under 180 words. End with one motivational line.
Do NOT repeat the steps from context, add VALUE beyond them.
Context: ${JSON.stringify(ctx)}
Query type: ${intent.wantSteps?'technique':'general'}`;
  const r=await fetch("https://api.anthropic.com/v1/messages",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:sys,messages:[{role:"user",content:userMsg}]})
  });
  const d=await r.json();
  return d.content?.[0]?.text||null;
}
 
// ── Build response ────────────────────────────────────────────────
async function buildReply(msg){
  const intent=parseQ(msg);
  const m=msg.toLowerCase();
  const GREETS=['hi','hello','hey','namaste','sup','yo','good morning','good afternoon','good evening'];
  const THANKS=['thank','thanks','appreciate'];
  if(GREETS.some(g=>m===g||m.startsWith(g+' ')||m.endsWith(' '+g))){
    const h=new Date().getHours();
    const tg=h<12?'Good morning':h<17?'Good afternoon':'Good evening';
    return `<div style="font-family:'Syne',sans-serif;font-size:15px;font-weight:700;margin-bottom:6px">${tg}! 💪</div>
<div style="color:#94A3B8;font-size:13.5px">I'm <strong style="color:#F1F5F9">Motion Mentor</strong>, your AI fitness coach. Ask me about exercises, technique, or common mistakes.</div>`;
  }
  if(THANKS.some(t=>m.includes(t))) return `You're welcome! Consistency separates progress from potential. 🔥 Anything else?`;
 
  // Filter pool
  let pool=[...ALL];
  if(intent.cats.length)   pool=pool.filter(ex=>intent.cats.includes(ex.category));
  if(intent.diffs.length)  pool=pool.filter(ex=>intent.diffs.includes(ex.difficulty));
  if(intent.noEquip)       pool=pool.filter(ex=>ex.equipment.length===0);
  else if(intent.equips.length) pool=pool.filter(ex=>intent.equips.some(eq=>ex.equipment.some(e=>e.includes(eq)||eq.includes(e))));
 
  // Specific exercise?
  const specific=ALL.find(ex=>{
    const nm=ex.name.toLowerCase();
    return nm===m||(ex.aliases||[]).some(a=>m.includes(a))||(nm.split(' ').length>1&&m.includes(nm));
  });
 
  const ctx=specific?[specific]:pool.slice(0,5);
  let aiText=null;
  try{ aiText=await askClaude(msg,intent,ctx); }catch(e){}
 
  let html='';
 
  if(specific){
    html+=renderCard(specific,true);
    if(aiText) html+=`<div class="mm-tip-box"><div class="mm-tip-label">💡 Coach's Notes</div>${aiText.replace(/\n/g,'<br>')}</div>`;
    html+=renderCTA(intent.cats.length?intent.cats:[specific.category]);
    return html;
  }
 
  if(intent.wantList||pool.length>3){
    const show=pool.slice(0,12);
    const catLabel=intent.cats.length?intent.cats.map(c=>c[0].toUpperCase()+c.slice(1)).join(' & '):'Matching';
    html+=`<div class="mm-section-label">Found ${pool.length} ${catLabel} Exercises</div>`;
    html+=show.map((ex,i)=>renderListItem(ex,i+1)).join('');
    if(pool.length>12) html+=`<div style="font-size:12px;color:#94A3B8;margin-top:8px">...and ${pool.length-12} more</div>`;
    if(aiText) html+=`<div style="margin-top:12px;font-size:13px;color:#94A3B8;border-top:1px solid #252B3B;padding-top:10px;text-align:left">${aiText.replace(/\n/g,'<br>')}</div>`;
  } else if(pool.length>0){
    const show=pool.slice(0,3);
    const catLabel=intent.cats.length?intent.cats.map(c=>c[0].toUpperCase()+c.slice(1)).join(' & '):'';
    if(catLabel) html+=`<div class="mm-section-label">${catLabel} Exercises</div>`;
    html+=show.map(ex=>renderCard(ex,intent.wantSteps||pool.length<=2)).join('<hr class="mm-divider">');
    if(pool.length>3) html+=`<div style="font-size:12px;color:#94A3B8;margin-top:6px">+${pool.length-3} more — ask "list all ${intent.cats[0]||'matching'} exercises"</div>`;
    if(aiText) html+=`<div class="mm-tip-box"><div class="mm-tip-label">💡 Coach's Notes</div>${aiText.replace(/\n/g,'<br>')}</div>`;
  } else {
    html=aiText?`<div style="text-align:left">${aiText.replace(/\n/g,'<br>')}</div>`
               :`<div>Couldn't find exercises for "<strong>${msg}</strong>". Try a muscle group or exercise name.</div>`;
  }
 
  html+=renderCTA(intent.cats);
  return html;
}
 
// ── UI helpers ────────────────────────────────────────────────────
function mmAddMsg(html,role){
  const d=document.getElementById('mm-msgs');
  const el=document.createElement('div');
  el.className=`mm-msg mm-${role}`;
  el.innerHTML=html;
  d.appendChild(el);
  d.scrollTop=d.scrollHeight;
}
function mmShowTyping(){
  const d=document.getElementById('mm-msgs');
  const el=document.createElement('div');
  el.className='mm-typing';el.id='mm-typ';
  el.innerHTML='<div class="mm-da"></div><div class="mm-da"></div><div class="mm-da"></div>';
  d.appendChild(el);d.scrollTop=d.scrollHeight;
}
function mmRemoveTyping(){const t=document.getElementById('mm-typ');if(t)t.remove();}
 
window.mmSend=function(msg){document.getElementById('mm-ui').value=msg;mmSendMsg();};
window.mmSendMsg=async function(){
  const inp=document.getElementById('mm-ui');
  const msg=inp.value.trim();
  if(!msg)return;
  inp.value='';
  mmAddMsg(msg,'user');
  mmShowTyping();
  try{
    const html=await buildReply(msg);
    mmRemoveTyping();
    mmAddMsg(html,'bot');
  }catch(e){
    mmRemoveTyping();
    mmAddMsg('Something went wrong. Please try again!','bot');
  }
};
document.getElementById('mm-ui').addEventListener('keypress',e=>{if(e.key==='Enter')mmSendMsg();});
})();
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
                pointer-events:non;
                z-index: -1;
                overflow: hidden;
            `;

  for (let i = 0; i < 30; i++) {
    const particle_PROGRESS_MONTHLY = document.createElement('div');
    particle_PROGRESS_MONTHLY.className = `particle-${i}-PROGRESS-MONTHLY`;
    particle_PROGRESS_MONTHLY.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 9 + 2}px;
                    height: ${Math.random() * 11 + 2}px;
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
                            opacity: ${Math.random() * 1.5 + 0.2};
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


// back exercises
function change_text() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back1").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://liftmanual.com/wp-content/uploads/2023/04/band-seated-row.webp" alt="Band Seated Row Form & Visual" style="width: 140px; height: auto;">
        </button>
        <p><strong>Seated Row Form & Visual</strong></p>
          <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Sit on the floor with your legs extended straight in front of you. Loop a resistance band around your feet and hold the ends with both hands.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Starting Position:</strong> Keep your back straight and shoulders relaxed. Engage your core and slightly lean back to create tension in the band.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Pull:</strong> Pull the band towards your torso, squeezing your shoulder blades together. Keep your elbows close to your sides and avoid shrugging your shoulders.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Release:</strong> Slowly extend your arms back to the starting position, maintaining control of the band. Keep your back straight and core engaged throughout.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Perform 3-4 sets of 10-15 reps, focusing on smooth and controlled movements.
      </p>
    </li>
  </ol>

  <button class="start_excercise" onclick="">Start Workout</button>
`;
}

function change_text2() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back2").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/kettlebell-sumo-deadlift.gif" 
                 alt="Double Kettlebell Sumo Deadlift" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Double Kettlebell Sumo Deadlift</strong></p>
       <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Place two kettlebells on the floor slightly wider than shoulder-width apart. Stand in a sumo stance (feet wider than hip-width, toes pointed outward at ~45°). Position yourself between the kettlebells.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Grip & Stance:</strong> Hinge at your hips and bend your knees to lower into position. Grasp each kettlebell with an overhand grip (palms facing you). Keep your back flat, chest up, and shoulders back.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Lift:</strong> Drive through your heels to stand up, keeping the kettlebells close to your body. Fully extend your hips and knees at the top, squeezing your glutes.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Descent:</strong> Hinge at your hips and bend your knees to lower the kettlebells back down. Maintain a flat back and control the movement throughout.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Perform 3-4 sets of 6-10 reps, focusing on maintaining perfect form.
      </p>
    </li>
  </ol>
  <button class="start_excercise" onclick="">Start Workout</button>`;
}

function change_text3() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back3").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/how-to-do-a-kettlebell-sumo-squat.gif"
                 alt="Kettlebell Sumo Squat" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Kettlebell Sumo Squat</strong></p>
          <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Stand in a **sumo stance** (feet wider than shoulder-width, toes pointed outward at ~45°). Place a kettlebell on the floor in front of you.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Grip the Kettlebell:</strong> Hinge at your hips and bend your knees to lower into a squat. Grasp the kettlebell handle with both hands using an **overhand grip**.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Squat:</strong> Push through your heels to stand up, lifting the kettlebell off the floor. Keep your chest up, back straight, and core engaged.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Lower the Kettlebell:</strong> Hinge at your hips and bend your knees to lower the kettlebell back to the floor. Keep your back flat and control the movement.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Perform 3-4 sets of 8-12 reps, maintaining proper form throughout.
      </p>
    </li>
  </ol>
  <button class="start_excercise" onclick="">Start Workout</button>`;
}

function change_text4() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back4").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/Kettlebell%20Sumo%20Deadlift.gif"  
                 alt="Kettlebell Sumo Deadlift" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Kettlebell Sumo Deadlift</strong></p>
          <ol style="text-align: left; padding-left: 25px;">
    <li>
      <p class="text_left">
        <strong>Setup:</strong> Place two kettlebells on the floor, slightly wider than shoulder-width. Stand in a sumo stance (feet wider than hip-width, toes pointed outward at ~45°). Position yourself so the kettlebells are centered between your feet.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Grip & Body Positioning:</strong> Hinge at your hips and bend your knees to lower into a deep squat. Grip each kettlebell with an overhand grip (palms facing you). Keep your back straight, chest up, and shoulders pulled back. Engage your core to protect your lower back.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Lift (Upward Movement):</strong> Push through your heels (not toes) to stand up. Drive your hips forward while keeping the kettlebells close to your body. Fully extend your hips and knees at the top (but don’t hyperextend). Squeeze your glutes at the top for maximum engagement.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>The Descent (Downward Movement):</strong> Hinge at your hips and bend your knees to lower the kettlebells. Keep your back flat (no rounding!) as you lower them. Control the descent—don’t let gravity do the work.
      </p>
    </li><br>
    <li>
      <p class="text_left">
        <strong>Repeat:</strong> Reset your stance if needed and perform 3-4 sets of 8-12 reps.
      </p>
    </li>
  </ol>
  <button class="start_excercise" onclick="">Start Workout</button>`;
}

function change_text5() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back5").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://liftmanual.com/wp-content/uploads/2023/04/band-seated-row.webp" 
                 alt="Band Seated Row Form & Visual" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Seated Row Form & Visual</strong></p>
        <ol style="text-align: left; padding-left: 25px;">
            <li><p class="text_left">Sit on the floor with your legs extended in front of you. Loop a resistance band around your feet and hold the ends with your hands.</p></li><br>
            <li><p class="text_left">Keep your back straight and engage your core. Pull the band towards your torso, squeezing your shoulder blades together.</p></li><br>
            <li><p class="text_left">Slowly return to the starting position and repeat for the desired number of reps.</p></li>
        </ol>`;
}

function change_text6() {
  // Note: Ensure your HTML ID is actually spelled "Begginer" to match this
  document.getElementById("Beginner_back6").innerHTML = `
        <button style="background-color: transparent; border: none; cursor: pointer;" onclick="change_text()">
            <img src="https://raw.githubusercontent.com/Hunny-Chaurasia/GIF-ONLY/main/Kettlebell%20Sumo%20Deadlift.gif" 
                 alt="Band Seated Row Form & Visual" 
                 style="width: 140px; height: auto;">
        </button>
        <p><strong>Seated Row Form & Visual</strong></p>
        <ol style="text-align: left; padding-left: 25px;">
            <li><p class="text_left">Sit on the floor with your legs extended in front of you. Loop a resistance band around your feet and hold the ends with your hands.</p></li><br>
            <li><p class="text_left">Keep your back straight and engage your core. Pull the band towards your torso, squeezing your shoulder blades together.</p></li><br>
            <li><p class="text_left">Slowly return to the starting position and repeat for the desired number of reps.</p></li>
        </ol>`;
}
// news-shelter
const API_KEY = 'pub_f5d56eeaa27e40b78e43569ccf60c896';
        const TAG_CYCLE = ['training', 'sports', 'nutrition', 'fitness', 'training'];

        function readTime(text) {
            if (!text) return '3 min read';
            const words = text.trim().split(/\s+/).length;
            return Math.max(1, Math.round(words / 200)) + ' min read';
        }

        function timeAgo(pubDate) {
            if (!pubDate) return '';
            const diff = Date.now() - new Date(pubDate).getTime();
            const h = Math.floor(diff / 3600000);
            if (h < 1) return 'Just now';
            if (h < 24) return h + ' hour' + (h > 1 ? 's' : '') + ' ago';
            const d = Math.floor(h / 24);
            return d + ' day' + (d > 1 ? 's' : '') + ' ago';
        }

        function buildTrending(articles) {
            const seeds = [
                { tag: 'HIITWorkouts',       category: 'Training',   growth: '+23%' },
                { tag: 'PlantBasedAthletes', category: 'Nutrition',  growth: '+18%' },
                { tag: 'RecoveryTips',       category: 'Wellness',   growth: '+15%' },
                { tag: 'MentalTraining',     category: 'Psychology', growth: '+31%' },
                { tag: 'OlympicPrep',        category: 'Sports',     growth: '+42%' }
            ];
            return seeds.map(seed => {
                const kw = seed.tag.replace(/([A-Z])/g, ' $1').toLowerCase().trim();
                const hits = articles.filter(a =>
                    ((a.title || '') + ' ' + (a.description || '')).toLowerCase().includes(kw)
                ).length;
                const posts = (900 + hits * 50 + Math.floor(Math.random() * 300)).toLocaleString();
                return { ...seed, posts };
            });
        }

        function renderBreaking(article) {
            const el = document.getElementById('breaking-article');
            el.innerHTML = `
                <h2>${article.title || 'Top Sports Story'}</h2>
                <p>${article.description || ''}</p>
                <div class="article-meta">
                    <span>${readTime(article.description)}</span>
                    <span><i class="fa-solid fa-eye"></i> ${(Math.floor(Math.random()*25000)+8000).toLocaleString()}</span>
                    <span><i class="fa-regular fa-heart"></i> ${(Math.floor(Math.random()*5000)+800).toLocaleString()}</span>
                    <div class="article-actions">
                        <a href="${article.link || '#'}" target="_blank" rel="noopener" class="btn-read">
                            <i class="fa-solid fa-book-open-reader"></i> Read
                        </a>
                    </div>
                </div>`;
        }

        function renderGrid(articles) {
            const grid = document.getElementById('articles-grid');
            if (!articles.length) { grid.innerHTML = '<p style="padding:1rem;color:#888;">No articles found.</p>'; return; }
            const fallbackAuthors = ['Dr. Sarah Johnson','Mike Chen','Emma Rodriguez','Lisa Thompson','Jake Morrison'];
            grid.innerHTML = articles.map((a, i) => {
                const tagClass = TAG_CYCLE[i % TAG_CYCLE.length];
                const desc = a.description ? a.description.slice(0, 160) + (a.description.length > 160 ? '…' : '') : '';
                return `
                <div class="article-card">
                    <span class="article-tag ${tagClass}">${tagClass.charAt(0).toUpperCase()+tagClass.slice(1)}</span>
                    <h3><a href="${a.link||'#'}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;">${a.title||'Untitled'}</a></h3>
                    <p>${desc}</p>
                    <div class="article-footer">
                        <div class="author-info">
                            <span>${a.source_id || fallbackAuthors[i % fallbackAuthors.length]}</span>
                            <span>${timeAgo(a.pubDate)}</span>
                        </div>
                        <span class="read-time">${readTime(a.description)}</span>
                    </div>
                </div>`;
            }).join('');
        }

        function renderTrending(articles) {
            document.getElementById('trending-list').innerHTML = buildTrending(articles).map(t => `
                <div class="trending-item">
                    <div class="trending-info">
                        <h4>#${t.tag}</h4>
                        <div class="trending-stats">${t.posts} posts • ${t.category} <span class="growth">${t.growth}</span></div>
                    </div>
                </div>`).join('');
        }

        function showError(msg, detail) {
            document.getElementById('breaking-article').innerHTML = `
                <h2 style="color:#f87171;">⚠ ${msg}</h2>
                <p style="font-size:.85rem;opacity:.7;">${detail}</p>
                <div class="article-meta"><div class="article-actions">
                    <button class="btn-read" onclick="fetchNews()"><i class="fa-solid fa-rotate-right"></i> Retry</button>
                </div></div>`;
            document.getElementById('articles-grid').innerHTML = `<p style="padding:1rem;color:#f87171;">${detail}</p>`;
            document.getElementById('trending-list').innerHTML = `<p style="padding:.5rem;color:#f87171;">Could not load.</p>`;
        }

        async function fetchOneBatch(category) {
            const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=in,us,wo,np,mm&language=hi,en&category=${category}&size=10`;
            const res = await fetch(url, { mode: 'cors' });
            if (!res.ok) throw new Error(`HTTP ${res.status} for category: ${category}`);
            const data = await res.json();
            if (data.status === 'error') throw new Error(data.results?.message || JSON.stringify(data));
            return data.results || [];
        }

        async function fetchNews() {
            document.getElementById('breaking-article').querySelector('h2').textContent = 'Fetching live news…';
            try {
                const batch1 = await fetchOneBatch('sports,health');
                const batch2 = await fetchOneBatch('food,lifestyle');
                const valid = [...batch1, ...batch2].filter(a => a.title && a.description);
                if (!valid.length) { showError('No articles returned', 'Check your plan limits at newsdata.io.'); return; }
                valid.sort((a, b) => new Date(b.pubDate||0) - new Date(a.pubDate||0));
                document.getElementById('articles-today').textContent = valid.length;
                document.getElementById('topics').textContent = 5;
                renderBreaking(valid[0]);
                renderGrid(valid.slice(1, 6));
                renderTrending(valid);
            } catch (err) {
                console.error('[NewsHub]', err);
                showError('Could not load live news.', err.message + '. Check DevTools Console.');
            }
        }

        fetchNews();

