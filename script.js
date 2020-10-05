let mailImg = document.querySelector("#mail");
let modal = document.querySelector(".modal");
let body = document.querySelector("body");
let mid = document.querySelector(".technologies");
let span = document.querySelector(".span");

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
