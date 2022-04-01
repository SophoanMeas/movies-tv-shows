// mobile menu
var burgerIcon = document.querySelector("#burger");
var navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", function() {
    navbarMenu.classList.toggle("is-active");
    console.log("click");
})

