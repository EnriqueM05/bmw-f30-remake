const slider = document.querySelector(".slider");
const leftArrow = document.createElement("button");
const rightArrow = document.createElement("button");

leftArrow.classList.add("arrow", "left");
rightArrow.classList.add("arrow", "right");

leftArrow.textContent = "<";
rightArrow.textContent = ">";

slider.parentElement.appendChild(leftArrow);
slider.parentElement.appendChild(rightArrow);

let currentIndex = 0;
const slides = slider.children;
const navDots = document.querySelectorAll(".slider-nav div");
const divs = document.querySelectorAll(".slider img");

const descriptions = [
  "Backview.",
  "Sideview.",
  "Front light.",
  "Backlight.",
  "Interior.",
];

const descriptionElement = document.querySelector(".designBottom");

const updateSliderPosition = () => {
  slider.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: "smooth",
  });
  updateActiveDot();
  updateActiveDiv();
  updateDescription();
};

const updateActiveDot = () => {
  navDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

const updateActiveDiv = () => {
  divs.forEach((div, index) => {
    if (index === currentIndex) {
      div.classList.add("active");
    } else {
      div.classList.remove("active");
    }
  });
};

const updateDescription = () => {
  descriptionElement.textContent = descriptions[currentIndex];
};

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

updateActiveDot();
updateActiveDiv();
updateDescription();
