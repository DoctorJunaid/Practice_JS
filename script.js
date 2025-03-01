// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-links a');
const letsTalkBtn = document.querySelector('.lets-talk-btn');
const workBtn = document.querySelector('.work-btn');
const projectsBtn = document.querySelector('.projects-btn');
const serviceCards = document.querySelectorAll('.service-card');

// Theme Toggle Functionality
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        updateThemeColors('light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        updateThemeColors('dark');
    }
});

// Update theme-specific colors
function updateThemeColors(theme) {
    const header = document.querySelector('header');
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (theme === 'light') {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        serviceCards.forEach(card => {
            card.style.backgroundColor = 'var(--card-bg-light)';
        });
        navLinks.forEach(link => {
            link.style.color = 'var(--light-text)';
        });
        projectsBtn.style.color = 'var(--light-text)';
        projectsBtn.style.borderColor = 'var(--light-text)';
    } else {
        header.style.backgroundColor = 'rgba(17, 17, 17, 0.9)';
        serviceCards.forEach(card => {
            card.style.backgroundColor = 'var(--card-bg-dark)';
        });
        navLinks.forEach(link => {
            link.style.color = 'var(--dark-text)';
        });
        projectsBtn.style.color = 'var(--dark-text)';
        projectsBtn.style.borderColor = 'var(--dark-text)';
    }
}

// Smooth Scrolling for Navigation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Button Hover Effects
const buttons = [letsTalkBtn, workBtn, projectsBtn];
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Service Card Animation
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Let's Talk Button Click Event
letsTalkBtn.addEventListener('click', () => {
    // Scroll to contact section or open contact modal
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        window.scrollTo({
            top: contactSection.offsetTop - 80,
            behavior: 'smooth'
        });
    } else {
        alert('Contact form will be implemented soon!');
    }
});

// Work Button Click Event
workBtn.addEventListener('click', () => {
    const worksSection = document.querySelector('#works');
    if (worksSection) {
        window.scrollTo({
            top: worksSection.offsetTop - 80,
            behavior: 'smooth'
        });
    } else {
        alert('Portfolio works will be displayed soon!');
    }
});

// Projects Button Click Event
projectsBtn.addEventListener('click', () => {
    const worksSection = document.querySelector('#works');
    if (worksSection) {
        window.scrollTo({
            top: worksSection.offsetTop - 80,
            behavior: 'smooth'
        });
    } else {
        alert('Projects will be displayed soon!');
    }
});

// Scroll Event for Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
    }
});

// Initialize the page
function init() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        updateThemeColors('light');
    }
    
    // Add active class to current section in navigation
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Initial call to highlight the correct nav item
    highlightNavOnScroll();
}

// Highlight navigation based on scroll position
function highlightNavOnScroll() {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Save theme preference
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Call init function when DOM is loaded
document.addEventListener('DOMContentLoaded', init);