/* ========================================
   THEME TOGGLE (LIGHT/DARK MODE)
   ======================================== */
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update icon based on theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

/* ========================================
   MOBILE NAVIGATION
   ======================================== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

/* ========================================
   PROJECT MODAL (POPUP)
   ======================================== */
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-modal');
const projectCards = document.querySelectorAll('.project-card');

// Modal elements
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalMetric1 = document.getElementById('modal-metric1');
const modalMetric2 = document.getElementById('modal-metric2');
const modalTools = document.getElementById('modal-tools');
const modalGithubBtn = document.getElementById('modal-github-btn');
const modalLiveBtn = document.getElementById('modal-live-btn');

// Open modal on project card click
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get data from data attributes
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        const m1 = card.getAttribute('data-metric1');
        const m2 = card.getAttribute('data-metric2');
        const tools = card.getAttribute('data-tools');
        const github = card.getAttribute('data-github');
        const live = card.getAttribute('data-live');
        
        // Populate modal
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalMetric1.textContent = m1;
        modalMetric2.textContent = m2;
        modalGithubBtn.href = github;
        modalLiveBtn.href = live;
        
        // Create tool pills
        modalTools.innerHTML = '';
        tools.split(',').forEach(tool => {
            const span = document.createElement('span');
            span.className = 'tool-pill';
            span.textContent = tool.trim();
            modalTools.appendChild(span);
        });
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal functions
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);

// Close when clicking outside modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.skill-category, .project-card, .hero-content, .hero-image').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

/* ========================================
   DYNAMIC YEAR IN FOOTER
   ======================================== */
document.getElementById('current-year').textContent = new Date().getFullYear();

/* ========================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
