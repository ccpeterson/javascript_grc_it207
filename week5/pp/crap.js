window.addEventListener('load', function () {
    var left = document.getElementById("leftsection");


    left.onmouseenter = bright;
    left.onmouseleave = white;

});

function bright() {
  event.stopPropagation();
  var left = document.getElementById("leftsection");
  left.style.backgroundColor = "black"
}

function white() {
  event.stopPropagation();
  var left = document.getElementById("leftsection");
  left.style.backgroundColor = "white"
}
