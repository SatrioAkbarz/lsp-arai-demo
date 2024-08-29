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
