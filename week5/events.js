

window.onload = function() {
  print("All things are loaded");
}

window.addEventListener("load", function () {
  print("a");
})
window.addEventListener("load", function () {
  print("a");
})

if (window.addEventListener) {
  window.addEventListener("load", function () {
    print("a");
  })
}
else {
  window.attchEvent("load", function(){
    //do a thing here
  })
}

function print(message)
{
  var console = document.getElementById("console");
  console.innerHTML = (message + "\n" + console.innerHTML);
}
//mouse stuff

window.addEventListener("load", function () {
  var button = document.getElementById("button");
  button.onclick = click;
  button.onmouseenter = mouseEnter;
  button.onmouseleave = mouseLeave;
  button.onmousemove = mouseMove;
  button.onmouseup = mouseUp;
  button.onmousedown = mouseDown;
});

function click() {
  this.innerHTML = "you clicked me";
}

function mouseEnter() {
  print("mouseEnter");
}

function mouseLeave() {
  print("mouseLeave");
}

function mouseMove() {
  print(event.clientX + " "  + event.clientY);
}
function mouseUp() {
  print("mouse up");
}
function mouseDown() {
  print(" mouse down" );
}


// focus blur stuff

window.addEventListener("load", function () {
  var name = document.querySelector('input[name="userName"]');
  name.onfocus = textGainFocus;
  name.onblur = textLoseFocus;

  var phone = document.querySelector('input[name="phone"]');

  phone.onkeypress = updatePhone;

});

function updatePhone() {
  event.preventDefault();
  var phone = document.querySelector('input[name="phone"]');
  var text = phone.value;

if(event.charCode<48) || event.charCode>57) {
  return;
}
if (text.length <= 13 ) {
  text += event.key;
}

}













function textLoseFocus() {
  if (this.value.length < 5) {
    alert("do better, at least 5");
  }
}

function textGainFocus() {
  this.value = "";

}
