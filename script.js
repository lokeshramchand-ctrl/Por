// Select the scroll container
const scrollContainer = document.querySelector('.scroll-container');

// Add hover event to pause animation
scrollContainer.addEventListener('mouseover', () => {
  scrollContainer.style.animationPlayState = 'paused';
});

// Resume animation on mouseout
scrollContainer.addEventListener('mouseout', () => {
  scrollContainer.style.animationPlayState = 'running';
});
document.addEventListener("DOMContentLoaded", function () {
  const heroText = document.querySelector(".hero-text");
  const text = "Welcome to My Portfolio"; // Change this to whatever text you want
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      heroText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Adjust speed (100ms per letter)
    } else {
      heroText.style.borderRight = "none"; // Remove blinking cursor after typing
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroText.textContent = ""; // Reset text
          index = 0; // Reset index
          typeEffect(); // Start typing effect
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(heroText);
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".case-studies");
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse Drag Scrolling
  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => isDown = false);
  scrollContainer.addEventListener("mouseup", () => isDown = false);

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed factor
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  // Scroll Wheel -> Convert Vertical Scroll to Horizontal
  scrollContainer.addEventListener("wheel", (e) => {
    scrollContainer.scrollLeft += e.deltaY * 3; // Smooth scroll effect
    e.preventDefault(); // Prevent default vertical scroll
  });
});
