

//on load, sets the functions to all the items we want to have on click stuff
window.onload = function () {
    var li = document.getElementById('fruitList').children;
    for (var i = 0; i < li.length; i++){
      li[i].onclick = highlight;
    }
    var addButton = document.getElementById("addButton");
    addButton.onclick = add;
    var clearButton = document.getElementById("clearFavs");
    clearButton.onclick = clear;
}

//highlight function
function highlight() {
  this.className = "yummy";
}

// clear class function
function clear() {
  var li = document.getElementById('fruitList').children;
  for (var i = 0; i < li.length; i++){
    li[i].className = "";
  }
}

//add function

function add() {
  var newFruit = document.getElementById("newItem"); // gets the item that is the text box
  var newElement = document.createElement("li"); // creates a li item
  newElement.onclick = highlight;// gives that item the same onclick response as the existing ones
  var newText = document.createTextNode(newFruit.value); //creates a text node from the value of text box item we grabbed
  newElement.appendChild(newText); //appends the text node to the li item
  var list = document.getElementById("fruitList"); //grabs the overall list
  list.appendChild(newElement); //appends the li to the list
}
