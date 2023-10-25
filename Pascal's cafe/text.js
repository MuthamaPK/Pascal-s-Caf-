let navbar = document.querySelector('#navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('.menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('.search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('.cart-btn').onclick = ()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Assuming 'Headers' is a valid selector
document.querySelector('Headers').onscroll = ()=>{
    navbar.classList.remove('hide');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', function() {
  searchForm.classList.toggle('active');
});
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

document.getElementById("icon").addEventListener("click", myFunction);
