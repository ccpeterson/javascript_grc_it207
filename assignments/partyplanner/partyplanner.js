/*
Author : Clinton Peterson
Date : 21 Oct 2017
Filename : partyplanner.js
Assignment : party planner
Related files : partyplanner.html
*/

function addItem()
{
	var ul = document.getElementById("todoList"); //creates a variable of the ul
  var li = document.createElement("li"); //creates an li item
  var listItem = document.getElementById("listItem");//grabs the text from the input box
  li.appendChild(document.createTextNode(listItem.value)); //adds the text we grabbed into the li item
  li.setAttribute("id",listItem.value); //sets the id of the li item to the same as the text
  li.setAttribute("onclick","strike(this)"); //sets the on click behavior of the li item
  ul.appendChild(li); //adds the li item into the ul on the page
}

function strike(thing)
{
    var style = (thing.style.textDecoration!="line-through")?"line-through":"none";
    thing.style.textDecoration = style; //sets the style of the item clicked to either normal or strikthrough
}

function partyMode()
{
  var sheet = document.createElement('style')
  sheet.innerHTML = "li:nth-child(odd) { color: orange; }";
  document.body.appendChild(sheet); //appends a style to the style sheet

  var pic = document.getElementById("partyPic");
  pic.src = ("highlight.jpg");//adds a pic
}
