let mailImg = document.querySelector("#mail");
let modal = document.querySelector(".modal");
let body = document.querySelector("body");

mailImg.addEventListener("click", () => {
  modal.classList.add("show");
});

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("about-me")) {
    modal.classList.remove("show");
  }
});
