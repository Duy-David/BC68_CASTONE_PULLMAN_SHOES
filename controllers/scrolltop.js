// GOI DEN SCROLL TOP BUTTON
let scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 1000) {
    scrollTopBtn.style.opacity = 1;
  } else if (window.scrollY > 150) {
    scrollTopBtn.style.opacity = 0.8;
  } else {
    scrollTopBtn.style.opacity = 0;
  }
}
