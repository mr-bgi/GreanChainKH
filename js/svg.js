const show = document.getElementById("detailM");
const back_map = document.getElementById("cancel");
const bmc = document.querySelectorAll(".allpro");
for (let i = 0; i < bmc.length; i++) {
    bmc[i].addEventListener("click", function () {
        if (show) {
            show.style.transform = "translateX(0px)";
            show.style.opacity = "1";
        }
    });
}
back_map.addEventListener("click", function () {
    show.style.transform = "translateX(-1200px)";
    show.style.opacity = "0";
});

var swiper = new Swiper(".map-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed: 500,
  });
//   --- Real-Time Swiper ---
  var swiper = new Swiper(".RT-swiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    mousewheel: true,
    keyboard: true,
  });