const mailImg = document.querySelector("#mail");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const mid = document.querySelector(".technologies");
const span = document.querySelector(".span");
const slide = document.querySelector(".mobile-container .tech-images");
const images = document.querySelectorAll(".mobile-container .tech-images img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = `translateX(${-size * counter}px)`;

// email modal:
mailImg.addEventListener("click", () => {
  modal.classList.add("show");
});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("about-me")) {
    modal.classList.remove("show");
  }
});

// mid section instructions:
mid.addEventListener("mouseenter", (e) => {
  if (e.target.classList.contains("technologies")) {
    span.classList.add("viewing");
  }
});

mid.addEventListener("mouseleave", (e) => {
  if (e.target.classList.contains("technologies")) {
    span.classList.remove("viewing");
  }
});

// mid section for mobile:
nextBtn.addEventListener("click", () => {
  if (counter >= images.length - 1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slide.style.transform = `translateX(${-size * counter}px)`;
});

slide.addEventListener("transitionend", () => {
  if (images[counter].id === "last-clone") {
    slide.style.transition = "none";
    counter = images.length - 2;
    slide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (images[counter].id === "first-clone") {
    slide.style.transition = "none";
    counter = images.length - counter;
    slide.style.transform = `translateX(${-size * counter}px)`;
  }
});
