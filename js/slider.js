document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".slide-container");
  const firstImg = carousel.querySelectorAll("img")[0];
  const arrowIcons = document.querySelectorAll(".gallery-slider span");

  let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft;
  const firstImgWidth = firstImg.clientWidth + 24;

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });

  const dragStart = (e) => {
    isDragStart = true;
    isDragging = false;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    isDragging = true;
    e.preventDefault();
    carousel.classList.add("dragging");
    const positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);
  carousel.addEventListener("touchend", dragStop);

  carousel.addEventListener("dragstart", (e) => e.preventDefault());
});
