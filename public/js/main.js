/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const slides = document.querySelectorAll(\".slide\");\r\nconst btnLeft = document.querySelector(\".app-screenshots__arrow-left\");\r\nconst btnRight = document.querySelector(\".app-screenshots__arrow-right\");\r\nconst hamburger = document.querySelector(\".hamburger\");\r\nconst menu = document.querySelector(\".menu__list\");\r\nconst header = document.querySelector(\".header\");\r\nconst menuLinks = document.querySelectorAll(\".menu__link\");\r\n\r\n// -------------Слайдер---------------\r\nlet currSlide = 0;\r\nlet maxSlides = slides.length;\r\n\r\nfunction goToSlide(slide) {\r\n    slides.forEach(function (s, i) {\r\n      s.style.transform = `translateX(${100 * (i - slide)}%)`;\r\n    });\r\n}\r\n\r\ngoToSlide(currSlide);\r\n\r\nfunction nextSlide() {\r\n    if (currSlide === maxSlides - 1) {\r\n      currSlide = 0;\r\n    } else {\r\n      currSlide++;\r\n    }\r\n    goToSlide(currSlide);\r\n  }\r\n\r\nfunction prevSlide() {\r\n    if (currSlide === 0) {\r\n      currSlide = maxSlides - 1;\r\n    } else {\r\n      currSlide--;\r\n    }\r\n\r\n    goToSlide(currSlide);\r\n}\r\n\r\nbtnRight.addEventListener(\"click\", nextSlide);\r\nbtnLeft.addEventListener(\"click\", prevSlide);\r\n\r\ndocument.addEventListener(\"keydown\", function (e) {\r\n    if (e.key === \"ArrowLeft\") {\r\n      prevSlide();\r\n    }\r\n    if (e.key === \"ArrowRight\") {\r\n      nextSlide();\r\n    }\r\n});\r\n\r\n// --------------Всплывающее меню-----------------------\r\n\r\nhamburger.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  const clicked = e.target.closest(\".hamburger\");\r\n  console.log(clicked);\r\n  if(!clicked) return;\r\n  \r\n  hamburger.classList.toggle(\"active\");\r\n  menu.classList.toggle(\"active\");\r\n  document.body.classList.toggle(\"_lock\");\r\n})\r\n\r\n// ------------Скролл меню-------------------\r\n\r\nmenu.addEventListener(\"click\", function(e){\r\n  e.preventDefault();\r\n  const clicked = e.target.closest(\".menu__link\");\r\n  if(!clicked) return;\r\n  const id = clicked.getAttribute(\"href\");\r\n  console.log(id);\r\n  if(e.target.classList.contains(\"menu__link\")){\r\n      if (id === \"#\") return;\r\n      const scrollToSection = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - header.offsetHeight+100;\r\n      window.scrollTo({\r\n          top: scrollToSection,\r\n          behavior: \"smooth\",\r\n      });\r\n  }\r\n  menuLinks.forEach((mL) => mL.classList.remove(\"active--item\"));\r\n\r\n  const link = document.querySelector(`[href=\"${id}\"]`);\r\n  link.classList.add(\"active--item\");\r\n\r\n  document.body.classList.remove(\"_lock\");\r\n  hamburger.classList.remove(\"active\");\r\n  menu.classList.remove(\"active\");\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;