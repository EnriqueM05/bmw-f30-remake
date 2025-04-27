const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const animationElements = document.querySelectorAll(".animation");
animationElements.forEach((el) => observer.observe(el));

// JavaScript for 360-degree viewer functionality
const viewer360 = document.getElementById("viewer360");
let isDragging = false;
let startX;
let scrollLeft;

viewer360.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - viewer360.offsetLeft;
  scrollLeft = viewer360.scrollLeft;
});

viewer360.addEventListener("mouseleave", () => {
  isDragging = false;
});

viewer360.addEventListener("mouseup", () => {
  isDragging = false;
});

viewer360.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - viewer360.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  viewer360.scrollLeft = scrollLeft - walk;
});

// Add touch event support for the 360-degree viewer
viewer360.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - viewer360.offsetLeft;
  scrollLeft = viewer360.scrollLeft;
});

viewer360.addEventListener("touchend", () => {
  isDragging = false;
});

viewer360.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - viewer360.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  viewer360.scrollLeft = scrollLeft - walk;
});

// Prevent default drag behavior for images in the 360-degree viewer
const viewerImages = viewer360.querySelectorAll("img");
viewerImages.forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault());
});
