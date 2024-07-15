window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headbar").style.background = "white";
    document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px rgba(0, 0, 0, 0.1)";
    document.getElementById("headbar").style.height = "80px";
    document.getElementById("scroll-up").style.opacity = "1";
  } else {
    document.getElementById("headbar").style.height = "100px";
    document.getElementById("headbar").style.background = "transparent";
    document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px transparent";
    document.getElementById("scroll-up").style.opacity = "0";
  }
}
var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("auto-write").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true, // Add loop for continuous sliding
  effect: "slide", // Add effect for smooth sliding
  speed: 800,
});

var swiper = new Swiper(".yourSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Add loop for continuous sliding
  effect: "fade", // Add effect for smooth sliding
  speed: 800,
});

var swiper = new Swiper(".coverFlow", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

});

var swiper = new Swiper('.cate-swiper', {
  slidesPerView: 4,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}

var swiper = new Swiper(".newSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "slide",
  speed: 800,
  on: {
    slideChange: function () {
      var elements = document.querySelectorAll('.slide-from-bottom');
      elements.forEach(function (el) {
        el.classList.remove('show');
      });
      var currentSlide = this.slides[this.activeIndex];
      var elementsInCurrentSlide = currentSlide.querySelectorAll('.slide-from-bottom');
      elementsInCurrentSlide.forEach(function (el) {
        el.classList.add('show');
      });
    }
  }
});

var swiper = new Swiper(".swiper-feature-pro", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 800,
});

