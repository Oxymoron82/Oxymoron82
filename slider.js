document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".works-slider");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  
  let currentIndex = 0;
  const slideWidth = 320; // ширина одного слайда (с учетом margin)
  const totalSlides = document.querySelectorAll(".work-item").length;
  const visibleSlides = Math.floor(document.querySelector(".slider-container").offsetWidth / slideWidth);

  // Обновление позиции слайдера
  function updateSlider() {
    const maxIndex = totalSlides - visibleSlides;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Назад
  prevButton.addEventListener("click", () => {
    currentIndex--;
    updateSlider();
  });

  // Вперед
  nextButton.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);
  updateSlider();
});
