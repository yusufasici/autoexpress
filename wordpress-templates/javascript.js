// WordPress-Compatible JavaScript for AutoKey Express

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileNav = document.getElementById('mobileNav');
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-fixed');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'hsl(var(--background))';
    } else {
        header.style.backgroundColor = 'hsl(var(--background) / 0.9)';
    }
});

// Phone Number Click Tracking (for analytics)
document.addEventListener('DOMContentLoaded', function() {
    const phoneButtons = document.querySelectorAll('.btn-emergency, .btn-emergency-large, .btn-emergency-mobile');
    
    phoneButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your analytics tracking here
            console.log('Phone button clicked');
            
            // For WordPress, you can use:
            // gtag('event', 'phone_click', { 'event_category': 'contact' });
            // or your preferred analytics method
        });
    });
});

// Contact Form Validation (if you add a contact form)
function validateContactForm(form) {
    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');
    
    let isValid = true;
    
    // Clear previous error messages
    clearErrorMessages(form);
    
    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }
    
    // Validate phone
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone.value.trim()) {
        showError(phone, 'Phone number is required');
        isValid = false;
    } else if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
        showError(phone, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }
    
    return isValid;
}

function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'hsl(var(--destructive))';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = 'hsl(var(--destructive))';
}

function clearErrorMessages(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

// WordPress Integration Helper Functions
const AutoKeyExpress = {
    // Initialize all components
    init: function() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupAnalytics();
    },
    
    // Setup mobile menu functionality
    setupMobileMenu: function() {
        const mobileToggle = document.querySelector('.mobile-toggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', toggleMobileMenu);
        }
    },
    
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling: function() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },
    
    // Setup scroll effects for header
    setupScrollEffects: function() {
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header-fixed');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
    },
    
    // Setup analytics tracking
    setupAnalytics: function() {
        const phoneButtons = document.querySelectorAll('[class*="btn-emergency"]');
        phoneButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Track phone clicks for WordPress analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'phone_click', {
                        'event_category': 'contact',
                        'event_label': 'header_phone'
                    });
                }
            });
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', AutoKeyExpress.init.bind(AutoKeyExpress));