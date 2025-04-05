// Intersection Observer API
const animatedElements = document.querySelectorAll('.rect-slim2, .circle2, .letterU, .letterS, .rect-thick3, .rect-slim3, .rect-thick4, .innerH, .innerCircle2, .innerRect2');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Restart the animation to force it to play
            entry.target.style.animation = 'none';
            void entry.target.offsetWidth; // Trigger reflow
            entry.target.style.animation = ''; // Reapply the original animation
            entry.target.style.animationPlayState = 'running';

            // Stop observing the element after the animation plays once
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Pause animations at start
animatedElements.forEach(element => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
});


// Background color
function getBackgroundColor() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        return 'rgba(255, 223, 186, 1)'; // Morning: Soft golden
    } else if (hour >= 12 && hour < 18) {
        return 'rgba(135, 206, 235, 1)'; // Afternoon: Sky blue
    } else if (hour >= 18 && hour < 21) {
        return 'rgba(255, 140, 0, 1)'; // Evening: Orange glow
    } else {
        return 'rgba(10, 25, 47, 1)'; // Night: Dark blue
    }
}

// Apply the dynamic background color
document.documentElement.style.setProperty('--bg-color', getBackgroundColor());


// Open and close Overlay

const trigger = document.getElementById("trigger");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeOverlay");

trigger.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});


