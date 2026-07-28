// Define the Light and Dark themes inside JavaScript
const themes = {
    light: {
        bodyBg: '#f8fafc',
        bodyText: '#334155',
        headerBg: 'rgba(248, 250, 252, 0.8)',
        headerBorder: '#e2e8f0',
        headerText: '#0f172a',
        heroTitle: '#0f172a',
        heroSub: '#475569',
        badgeBg: '#f1f5f9',
        badgeBorder: '#e2e8f0',
        badgeText: '#475569',
        secondaryBtnBorder: '#cbd5e1',
        secondaryBtnText: '#334155',
        secondaryBtnBg: '#ffffff',
        secondaryBtnHoverBg: '#f1f5f9',
        skillCardBg: '#ffffff',
        skillCardBorder: '#e2e8f0',
        skillCardTitle: '#0f172a',
        skillCardText: '#475569',
        projectCardBg: '#ffffff',
        projectCardBorder: '#e2e8f0',
        projectCardTitle: '#0f172a',
        projectCardText: '#475569',
        footerBg: '#f1f5f9',
        footerBorder: '#e2e8f0',
        footerText: '#475569',
        btnBg: '#0f172a',
        btnText: '#ffffff',
        btnBorder: '#0f172a',
        socialIcon: '#475569'
    },
    dark: {
        bodyBg: '#0b0f19',
        bodyText: '#94a3b8',
        headerBg: 'rgba(11, 15, 25, 0.8)',
        headerBorder: '#1e293b',
        headerText: '#f8fafc',
        heroTitle: '#ffffff',
        heroSub: '#94a3b8',
        badgeBg: '#1e293b',
        badgeBorder: '#334155',
        badgeText: '#cbd5e1',
        secondaryBtnBorder: '#334155',
        secondaryBtnText: '#cbd5e1',
        secondaryBtnBg: 'transparent',
        secondaryBtnHoverBg: '#1e293b',
        skillCardBg: '#111827',
        skillCardBorder: '#1f2937',
        skillCardTitle: '#ffffff',
        skillCardText: '#94a3b8',
        projectCardBg: '#111827',
        projectCardBorder: '#1f2937',
        projectCardTitle: '#ffffff',
        projectCardText: '#94a3b8',
        footerBg: '#090d16',
        footerBorder: '#111827',
        footerText: '#64748b',
        btnBg: '#ffffff',
        btnText: '#0f172a',
        btnBorder: '#ffffff',
        socialIcon: '#94a3b8'
    }
};

// Variable to store the current theme mode
let currentMode = 'light';

// Function to apply the CSS theme styles using DOM manipulation
function applyTheme(mode) {
    const theme = themes[mode];
    
    // Apply body style
    document.body.style.backgroundColor = theme.bodyBg;
    document.body.style.color = theme.bodyText;
    
    // Apply header style (Major Section 1)
    const header = document.getElementById('header');
    if (header) {
        header.style.backgroundColor = theme.headerBg;
        header.style.borderColor = theme.headerBorder;
        header.style.color = theme.headerText;
    }
    
    // Apply layout header link styles
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.style.color = theme.headerText;
    });
    
    // Apply logo styles
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.color = theme.headerText;
    }
    
    // Apply content container style (Major Section 2)
    const content = document.getElementById('content');
    if (content) {
        content.style.backgroundColor = theme.bodyBg;
    }
    
    // Hero details
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.color = theme.heroTitle;
    }
    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub) {
        heroSub.style.color = theme.heroSub;
    }
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.style.backgroundColor = theme.badgeBg;
        heroBadge.style.borderColor = theme.badgeBorder;
        heroBadge.style.color = theme.badgeText;
    }
    
    // Secondary Buttons
    const secondaryBtns = document.querySelectorAll('.secondary-btn');
    secondaryBtns.forEach(btn => {
        btn.style.borderColor = theme.secondaryBtnBorder;
        btn.style.color = theme.secondaryBtnText;
        btn.style.backgroundColor = theme.secondaryBtnBg;
        
        btn.onmouseenter = () => {
            btn.style.backgroundColor = theme.secondaryBtnHoverBg;
        };
        btn.onmouseleave = () => {
            btn.style.backgroundColor = theme.secondaryBtnBg;
        };
    });
    
    // Skill Cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.style.backgroundColor = theme.skillCardBg;
        card.style.borderColor = theme.skillCardBorder;
        
        const cardTitle = card.querySelector('h3');
        if (cardTitle) {
            cardTitle.style.color = theme.skillCardTitle;
        }
        
        const cardText = card.querySelector('p');
        if (cardText) {
            cardText.style.color = theme.skillCardText;
        }
    });
    
    // Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.backgroundColor = theme.projectCardBg;
        card.style.borderColor = theme.projectCardBorder;
        
        const cardTitle = card.querySelector('h3');
        if (cardTitle) {
            cardTitle.style.color = theme.projectCardTitle;
        }
        
        const cardText = card.querySelector('p');
        if (cardText) {
            cardText.style.color = theme.projectCardText;
        }
    });
    
    // Apply footer style (Major Section 3)
    const footer = document.getElementById('footer');
    if (footer) {
        footer.style.backgroundColor = theme.footerBg;
        footer.style.borderColor = theme.footerBorder;
        footer.style.color = theme.footerText;
        
        const footerLeftText = footer.querySelector('.footer-left p');
        if (footerLeftText) {
            footerLeftText.style.color = theme.footerText;
        }
        
        const footerLogo = footer.querySelector('.footer-left .logo');
        if (footerLogo) {
            footerLogo.style.color = theme.headerText;
        }
        
        const socialLinks = footer.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            link.style.color = theme.socialIcon;
        });
    }
    
    // Theme Toggle Button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.style.backgroundColor = theme.btnBg;
        toggleBtn.style.color = theme.btnText;
        toggleBtn.style.borderColor = theme.btnBorder;
    }
    
    // Update Toggle Button Text and Icon
    const toggleText = document.getElementById('theme-toggle-text');
    const toggleIcon = document.querySelector('#theme-toggle i');
    if (mode === 'light') {
        if (toggleText) toggleText.textContent = 'Switch to Dark Mode';
        if (toggleIcon) {
            toggleIcon.className = 'fa-solid fa-moon';
        }
    } else {
        if (toggleText) toggleText.textContent = 'Switch to Light Mode';
        if (toggleIcon) {
            toggleIcon.className = 'fa-solid fa-sun';
        }
    }
}

// Set up the event listener for the button click
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the default theme
    applyTheme(currentMode);
    
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            // Toggle the current mode
            currentMode = currentMode === 'light' ? 'dark' : 'light';
            // Apply the updated theme
            applyTheme(currentMode);
        });
    }
});
