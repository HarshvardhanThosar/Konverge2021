var menuTrigger = document.querySelector("#menu__trigger");

var menu = document.querySelector("#menu");

menuTrigger.addEventListener('click', function(e){
    menu.classList.toggle("active");
})
