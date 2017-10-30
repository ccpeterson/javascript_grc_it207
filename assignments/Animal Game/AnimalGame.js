/*
Author : Clinton Peterson
Date : 29 Oct 2017
Filename : AnimalGame.js
Assignment : Animal Game
Related files : AnimalGame.html
*/


//listen to the whole window on load
window.addEventListener("load", function(){
	//array of possible answers
	var animalNames	= ["Dog", "Elephant", "Fish", "Frog", "Lion", "Rabbit", "Tiger"];

	//pick a random animal from the list, display it on the page
	var rand = animalNames[Math.floor(Math.random() * animalNames.length)];
	var target = document.getElementById("target");
	target.innerHTML = rand;

	//grabbing the elements for all the pics, im not sure using the coresponding array values does anything better then just typing them though
	var item1 = document.getElementById(animalNames[0]);
	var item2 = document.getElementById(animalNames[1]);
	var item3 = document.getElementById(animalNames[2]);
	var item4 = document.getElementById(animalNames[3]);
	var item5 = document.getElementById(animalNames[4]);
	var item6 = document.getElementById(animalNames[5]);
	var item7 = document.getElementById(animalNames[6]);

	//calls function to check answer for each pic, also removes any border on mouse out
	item1.onclick = checkAnswer;
	item1.onmouseout = removeBorder;

	item2.onclick = checkAnswer;
	item2.onmouseout = removeBorder;

	item3.onclick = checkAnswer;
	item3.onmouseout = removeBorder;

	item4.onclick = checkAnswer;
	item4.onmouseout = removeBorder;

	item5.onclick = checkAnswer;
	item5.onmouseout = removeBorder;

	item6.onclick = checkAnswer;
	item6.onmouseout = removeBorder;

	item7.onclick = checkAnswer;
	item7.onmouseout = removeBorder;
});

function checkAnswer(event){
	//grabs elements for target and results
	var target = document.getElementById("target");
	var results = document.getElementById("results");
	//adds border
	this.style['border'] = "5px solid red";
	this.style['padding'] = "5px";
	this.style['border-radius'] = "5px";

	//if the id of the pic you clicked matches the targets innerHTML, print correct to results, otherwise wrong
	if (this.id === target.innerHTML)
	{
		results.innerHTML = "correct";
		results.style="color:green";
	}
	else
	{
		results.innerHTML = "wrong";
		results.style="color:red";
	}
}

//remove any border
function removeBorder(event){
	this.style['border'] = "";
	this.style['padding'] = "";
}
