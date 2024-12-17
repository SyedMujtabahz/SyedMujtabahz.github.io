// GSAP Animations
gsap.from("#header h1", { opacity: 0, y: -50, duration: 0.5 });
gsap.from(".subtitle", { opacity: 0, y: 50, duration: 0.5, delay: 0.5 });
gsap.from(".content", { opacity: 0, scale: 0.9, duration: 0.5, delay: 0.5 });

function scrollCarousel(direction) {
    const container = document.querySelector('.carousel-container');
    const scrollAmount = 320;  // Scroll amount per click (can be adjusted)
    
    // Scroll the container left or right based on the direction (-1 for left, 1 for right)
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}