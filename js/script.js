window.onload=function(){
var hamburger = document.getElementById("hamburger");

// get the menu element
var menu = document.getElementById("menu");

// get the overlay element
var overlay = document.getElementById("overlay");

function toggleMenu() {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}
hamburger.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu)
overlay.addEventListener("click", toggleMenu);


var q1 = document.getElementById("q1");
var a1 = document.getElementById("a1");

function toggledrop1 () {
  a1.classList.toggle("active");
}
q1.addEventListener("click", toggledrop1);
a1.addEventListener("click", toggledrop1);

  var q2 = document.getElementById("q2");
  var a2 = document.getElementById("a2");
  
  function toggledrop2 () {
    a2.classList.toggle("active");
  }
  q2.addEventListener("click", toggledrop2);
  a2.addEventListener("click", toggledrop2);

  var q3 = document.getElementById("q3");
  var a3 = document.getElementById("a3");
  
  function toggledrop3 () {
    a3.classList.toggle("active");
  }
  q3.addEventListener("click", toggledrop3);
  a3.addEventListener("click", toggledrop3);

  function toggledrop4 () {
    a4.classList.toggle("active");
  }
  q4.addEventListener("click", toggledrop4);
  a4.addEventListener("click", toggledrop4);

  function toggledrop5 () {
    a5.classList.toggle("active");
  }
  q5.addEventListener("click", toggledrop5);
  a5.addEventListener("click", toggledrop5);
}

  