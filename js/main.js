var loader = document.getElementById("preloader");
var main = document.querySelector(".main");
var bodyLoad = document.body;
window.addEventListener("load", function () {
  loader.style.display = "none";
  loader.style.backgroundColor = "black";
  bodyLoad.style.overflowY = "visible";
  bodyLoad.style.overflowX = "hidden";
  setTimeout(() => (main.style.opacity = 1), 50);
  main.style.overflowX = "hidden";
});

gsap.from(".let p", {
  opacity: 0,
  duration: 1,
  x: -50,
  stagger: 0.4,
  delay: 2.5,
  ease: "Power2.easeInOut",
  scale: 1,
});
gsap.from(".circle", {
  opacity: 0,
  duration: 1,
  y: 50,
  stagger: 0.4,
  delay: 3.2,
  ease: "Power2.easeInOut",
  scale: 1,
});
gsap.from(".rectangle", {
  opacity: 0,
  duration: 1,
  x: -50,
  stagger: 0.4,
  delay: 2,
  ease: "Power2.easeInOut",
  scale: 1,
});
function toggleForm() {
  box1 = document.querySelector(".box1");
  box1.classList.toggle("active");
  box2 = document.querySelector(".box2");
  box2.classList.toggle("active");
  Rbtn = document.querySelector(".Rbtn");
  Rbtn.classList.toggle("active");
  Rbtn = document.querySelector(".Lbtn");
  Rbtn.classList.toggle("active");
}

const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");

mobileBtnExit = document.getElementById("mobile-exit");
mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  const head = document.querySelector(".header");

  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  head.classList.toggle("active");
}

var loader = document.getElementById("preloader");
var main = document.querySelector(".main");
var bodyLoad = document.body;
window.addEventListener("load", function () {
  loader.style.display = "none";
  loader.style.backgroundColor = "black";
  bodyLoad.style.overflowY = "visible";
  bodyLoad.style.overflowX = "hidden";
  setTimeout(() => (main.style.opacity = 1), 50);
});