
const Zearch = document.getElementById("minify");
const ZearchBar = document.querySelector("#s-bar");
const Bhack = document.getElementById("cross");
Zearch.addEventListener("click", function () {
    ZearchBar.style.transform = "translateY(100px)";
    ZearchBar.style.opacity = "1";
});
Bhack.addEventListener("click", function () {
    ZearchBar.style.transform = "translateY(-250px)";
    ZearchBar.style.opacity = "0";
});

//Notification
const Notification = document.getElementById("notification");
const NotiBack = document.getElementById("noti-back");
const NotiBar = document.getElementById("noti-bar");
Notification.addEventListener("click", function () {
    NotiBar.style.transform = "translateX(0)";
    NotiBar.style.opacity = "1";
});
NotiBack.addEventListener("click", function () {
    NotiBar.style.transform = "translateX(300px)";
    NotiBar.style.opacity = "0";
});

//Profile
const user = document.getElementById("profile");
const proBar = document.getElementById("profile-bar");
const proBack = document.getElementById("exit-user");
user.addEventListener("click", function () {
    proBar.style.transform = "translateX(0)";
    proBar.style.opacity = "1";
});
proBack.addEventListener("click", function () {
    proBar.style.transform = "translateX(300px)";
    proBar.style.opacity = "0";
});

//Newsletter Popup
const newsLetter = document.getElementById("newsletter");
const noNewsLetter = document.getElementById("no-newletter")
const newsLetterPop = document.getElementById("newsletter-pop");
newsLetter.addEventListener("click",function(){
    newsLetterPop.style.transform = " scale(1)";
    newsLetterPop.style.opacity = "1";
});
noNewsLetter.addEventListener("click",function(){
    newsLetterPop.style.transform = " scale(0)";
    newsLetterPop.style.opacity = "0";
});

//Window Scroll
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
