// ==========================================
// COLOR CONFIGURATIONS FOR SIMULATOR
// ==========================================
const colorConfigs = {
    sunset: {
        gradient: 'linear-gradient(135deg, #ff5e3a 0%, #ff2a6d 50%, #9b51e0 100%)',
        glowColor: 'rgba(255, 94, 58, 0.5)',
        title: 'Sunset Gold',
        desc: 'The classic warm, golden glow. Mimics the exact lighting of the last 15 minutes of a summer sunset. Promotes relaxation and deeper sleep.'
    },
    rainbow: {
        gradient: 'linear-gradient(45deg, #ff007f, #7f00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff7f00)',
        glowColor: 'rgba(127, 0, 255, 0.4)',
        title: 'Rainbow Aurora',
        desc: 'A dreamlike kaleidoscope of transitioning colors. Perfect for setting a magical mood, party lighting, or creative videography.'
    },
    cherry: {
        gradient: 'linear-gradient(135deg, #ff007f 0%, #ff80df 100%)',
        glowColor: 'rgba(255, 0, 127, 0.4)',
        title: 'Cherry Blossom',
        desc: 'A soft, romantic pastel pink glow. Ideal for creating a cozy, serene mood or taking aesthetic soft-lit portraits.'
    },
    ocean: {
        gradient: 'linear-gradient(135deg, #0052d4 0%, #4364f7 50%, #6fb1fc 100%)',
        glowColor: 'rgba(67, 100, 247, 0.4)',
        title: 'Ocean Depth',
        desc: 'A deep, calming aquatic blue that washes over your walls. Helps reduce anxiety, lowers heart rate, and creates a tranquil space.'
    },
    aurora: {
        gradient: 'linear-gradient(135deg, #00ff87 0%, #60efff 100%)',
        glowColor: 'rgba(0, 255, 135, 0.4)',
        title: 'Forest Aurora',
        desc: 'A fresh, energetic neon green and cyan glow inspired by the northern lights. Brings clarity, focus, and a modern cyberpunk edge to your desk setup.'
    }
};

// ==========================================
// INTERACTIVE COLOR SIMULATOR
// ==========================================
const colorButtons = document.querySelectorAll('.color-btn');
const simLampGlow = document.getElementById('sim-lamp-glow');
const simGlowBg = document.getElementById('sim-glow-bg');
const heroProjection = document.getElementById('hero-projection');
const simColorTitle = document.getElementById('sim-color-title');
const simColorDesc = document.getElementById('sim-color-desc');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle Active Class
        colorButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get Configuration
        const colorKey = button.getAttribute('data-color');
        const config = colorConfigs[colorKey];

        if (config) {
            // Apply projection gradients
            simLampGlow.style.background = config.gradient;
            simGlowBg.style.background = config.gradient;
            if (heroProjection) {
                heroProjection.style.background = config.gradient;
            }

            // Apply custom CSS Glow Variable for Buttons
            document.documentElement.style.setProperty('--active-glow', config.gradient);
            document.documentElement.style.setProperty('--active-glow-color', config.glowColor);

            // Update Text Details
            simColorTitle.textContent = config.title;
            simColorDesc.textContent = config.desc;

            // Micro-animation bounce on simulated lamp glow
            simLampGlow.style.transform = 'translate(-50%, -50%) scale(1.1)';
            setTimeout(() => {
                simLampGlow.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 300);
        }
    });
});

// ==========================================
// URGENCY COUNTDOWN TIMER
// ==========================================
const minsSpan = document.getElementById('timer-mins');
const secsSpan = document.getElementById('timer-secs');

let totalSeconds = 14 * 60 + 59; // 14 mins 59 secs

function updateTimer() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    minsSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
    secsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;

    if (totalSeconds <= 0) {
        totalSeconds = 14 * 60 + 59; // Reset timer for ongoing urgency
    } else {
        totalSeconds--;
    }
}

// Initial update and interval run
updateTimer();
setInterval(updateTimer, 1000);

// ==========================================
// FAQ ACCORDION COLLAPSE
// ==========================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');

        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ==========================================
// MOCK SECURE CHECKOUT SUBMISSION
// ==========================================
const orderForm = document.getElementById('order-form');
const successModal = document.getElementById('success-modal');
const modalEmail = document.getElementById('modal-email');
const btnCloseModal = document.getElementById('btn-close-modal');

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('customer-email');
        if (emailInput) {
            modalEmail.textContent = emailInput.value;
        }

        // Trigger Success Modal
        successModal.classList.add('active');

        // Reset the shipping form
        orderForm.reset();
    });
}

if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
        successModal.classList.remove('active');
    });
}

// Close Modal when clicking outside the content
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});
