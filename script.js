// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the animation
function handleIconAnimation() {
    const iconContainer = document.querySelector('.icon-container');
    if (isInViewport(iconContainer)) {
        iconContainer.style.animationPlayState = 'running';
        window.removeEventListener('scroll', handleIconAnimation);
    }
}

// Add a scroll event listener to trigger the animation when scrolled
window.addEventListener('scroll', handleIconAnimation);
