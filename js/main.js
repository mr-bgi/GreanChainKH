window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headbar").style.background = "white";
    document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px rgba(0, 0, 0, 0.1)";
    document.getElementById("headbar").style.height = "80px";
    document.getElementById("scroll-up").style.display = "block";
  } else {
    document.getElementById("headbar").style.height = "100px";
    document.getElementById("headbar").style.background = "transparent";
    document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px transparent";
    document.getElementById("scroll-up").style.display = "none";
  }
}
