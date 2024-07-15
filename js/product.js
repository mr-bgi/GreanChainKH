// Add to Cart
var cartIcons = document.querySelectorAll("#cart-click");
cartIcons.forEach(function (cartIcon) {
  cartIcon.addEventListener("click", function () {
    cartIcon.classList.toggle("fa-cart-shopping");
    cartIcon.classList.toggle("fa-check");
  });
});

// Add to Favorites
var favoriteIcons = document.querySelectorAll("#fav");
favoriteIcons.forEach(function (favoriteIcon) {
  favoriteIcon.addEventListener("click", function () {
    favoriteIcon.classList.toggle("fa-regular");
    favoriteIcon.classList.toggle("fa-solid");
  });
})

//Product tabs
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
