document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".slideshow__wrapper");
  const images = Array.from(wrapper.querySelectorAll("img"));

  let currentIndex = 0;

  function scrollNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateScroll();
  }

  function scrollPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateScroll();
  }

  function updateScroll() {
    const offsetX = -currentIndex * 100; // Assuming 100% width for each image
    wrapper.style.transform = `translateX(${offsetX}%)`;
  }

  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".prev-button");

  nextButton.addEventListener("click", scrollNext);
  prevButton.addEventListener("click", scrollPrevious);
});
