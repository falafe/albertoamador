var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 60,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1.5,
        spaceBetween: 32,
        centeredSlides: true,
        initialSlide: 1,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 60,
        centeredSlides: true,
        initialSlide: 1,
      },
    }
  });

  //MODAL BRANDING
  // Get the modal
var modal = document.getElementById("myModal");
var bModal = document.getElementById("bModal");
bModal.onclick = function(){
  modal.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

modal.addEventListener("keyup", function(event){
    if(event.keyCode === 27){
        modal.style.display = "none";
    };
});

//MODAL WEB
var modal2 = document.getElementById("myModal2");
var wModal = document.getElementById("wModal");
wModal.onclick = function(){
  modal2.style.display = "block";
}

var span = document.getElementsByClassName("close2")[0];
span.onclick = function() {
  modal2.style.display = "none";
}

modal.addEventListener("keyup", function(event){
    if(event.keyCode === 27){
        modal.style.display = "none";
    };
});

//SWIPER ANIMATION APPEAR


//MODAL GRAPHIC
var modal3 = document.getElementById("myModal3");
var gModal = document.getElementById("gModal");
gModal.onclick = function(){
  modal3.style.display = "block";
}

var span = document.getElementsByClassName("close3")[0];
span.onclick = function() {
  modal3.style.display = "none";
}

modal.addEventListener("keyup", function(event){
    if(event.keyCode === 27){
        modal.style.display = "none";
    };
});

//ASCO Migration
var asco = document.getElementById("asco");
var b1 = document.getElementById("b1");
b1.onclick = function(){
    asco.style.display = "block";
}

var back = document.getElementsByClassName("back")[0];
back.onclick = function() {
    asco.style.display = "none";
}
//1
//Tesys T
var tesys = document.getElementById("tesys");
var b2 = document.getElementById("b2");
b2.onclick = function(){
    tesys.style.display = "block";
}

var back = document.getElementsByClassName("back2")[0];
back.onclick = function() {
    tesys.style.display = "none";
}
//2
//SML
var sml = document.getElementById("sml");
var b3 = document.getElementById("b3");
b3.onclick = function(){
    sml.style.display = "block";
}

var back = document.getElementsByClassName("back3")[0];
back.onclick = function() {
    sml.style.display = "none";
}
//3
//HEPD
var hepd = document.getElementById("hepd");
var b4 = document.getElementById("b4");
b4.onclick = function(){
    hepd.style.display = "block";
}

var back = document.getElementsByClassName("back4")[0];
back.onclick = function() {
    hepd.style.display = "none";
}
//4

//SimQ
var simQ = document.getElementById("simQ");
var w2 = document.getElementById("w2");
w2.onclick = function(){
    simQ.style.display = "block";
}

var back = document.getElementsByClassName("back2_2")[0];
back.onclick = function() {
    simQ.style.display = "none";
}
//2

//Monitors
var monitors = document.getElementById("monitors");
var w3 = document.getElementById("w3");
w3.onclick = function(){
    monitors.style.display = "block";
}

var back = document.getElementsByClassName("back2_3")[0];
back.onclick = function() {
    monitors.style.display = "none";
}
//3

//Solar Field
var solar = document.getElementById("solar");
var w4 = document.getElementById("w4");
w4.onclick = function(){
    solar.style.display = "block";
}

var back = document.getElementsByClassName("back2_4")[0];
back.onclick = function() {
    solar.style.display = "none";
}
//4

//Innov Week
var innov = document.getElementById("innov");
var g1 = document.getElementById("g1");
g1.onclick = function(){
    innov.style.display = "block";
}

var back = document.getElementsByClassName("back3_1")[0];
back.onclick = function() {
    innov.style.display = "none";
}
//1

//Customer Week
var customer = document.getElementById("customer");
var g2 = document.getElementById("g2");
g2.onclick = function(){
    customer.style.display = "block";
}

var back = document.getElementsByClassName("back3_2")[0];
back.onclick = function() {
    customer.style.display = "none";
}
//2

//Inn Week
var fic = document.getElementById("fic");
var g3 = document.getElementById("g3");
g3.onclick = function(){
    fic.style.display = "block";
}

var back = document.getElementsByClassName("back3_3")[0];
back.onclick = function() {
    fic.style.display = "none";
}
//1

