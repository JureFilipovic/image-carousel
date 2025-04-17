import carousel from "./carousel-module";

export default (function domController() {
  function buttonsEventListeners() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", () => {
      carousel.plusSlides(-1);
    });

    nextButton.addEventListener("click", () => {
      carousel.plusSlides(1);
    });
  }

  function dotsEventListeners() {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        carousel.currentSlide(index + 1);
      });
    });
  }

  function init() {
    carousel.init();
    buttonsEventListeners();
    dotsEventListeners();
  }

  return {
    init,
  };
})();
