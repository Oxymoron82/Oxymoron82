document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".works-slider");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentIndex = 0;
  const slideWidth = 920; // 900px + 2*10px margin
  const totalSlides = document.querySelectorAll(".work-item").length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  updateSlider();
});
