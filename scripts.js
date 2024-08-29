document.addEventListener('DOMContentLoaded', function() {
    const arrows = document.querySelectorAll('.arrow');
    
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const targetId = this.parentElement.nextElementSibling.id;
            const targetElement = document.getElementById(targetId);
            
            // Toggle the visibility of the target element
            if (targetElement.classList.contains('hidden')) {
                targetElement.classList.remove('hidden');
                this.style.transform = 'rotate(180deg)'; // Rotate the arrow
            } else {
                targetElement.classList.add('hidden');
                this.style.transform = 'rotate(0deg)'; // Reset the arrow
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});

// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});
