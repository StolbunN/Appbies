const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".app-screenshots__arrow-left");
const btnRight = document.querySelector(".app-screenshots__arrow-right");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu__list");
const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu__link");

// -------------Слайдер---------------
let currSlide = 0;
let maxSlides = slides.length;

function goToSlide(slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}

goToSlide(currSlide);

function nextSlide() {
    if (currSlide === maxSlides - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
  }

function prevSlide() {
    if (currSlide === 0) {
      currSlide = maxSlides - 1;
    } else {
      currSlide--;
    }

    goToSlide(currSlide);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
    }
});

// --------------Всплывающее меню-----------------------

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  const clicked = e.target.closest(".hamburger");
  console.log(clicked);
  if(!clicked) return;
  
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("_lock");
})

// ------------Скролл меню-------------------

menu.addEventListener("click", function(e){
  e.preventDefault();
  const clicked = e.target.closest(".menu__link");
  if(!clicked) return;
  const id = clicked.getAttribute("href");
  console.log(id);
  if(e.target.classList.contains("menu__link")){
      if (id === "#") return;
      const scrollToSection = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - header.offsetHeight+100;
      window.scrollTo({
          top: scrollToSection,
          behavior: "smooth",
      });
  }
  menuLinks.forEach((mL) => mL.classList.remove("active--item"));

  const link = document.querySelector(`[href="${id}"]`);
  link.classList.add("active--item");

  document.body.classList.remove("_lock");
  hamburger.classList.remove("active");
  menu.classList.remove("active");
});