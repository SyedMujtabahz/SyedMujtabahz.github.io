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

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll
window.onscroll = function() {
    if (document.documentElement.scrollTop > 350) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll back to the top smoothly when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});