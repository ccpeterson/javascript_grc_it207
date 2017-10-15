/*
Author : Clinton Peterson
Date : 15 Oct 2017
Filename : pickapet.js
Assignment : pick a pet
Related files : pickapet.html
*/

//function that is started on button push
function getPet()
{
  //declaring variables and getting the values set by calling the functions
  var age = getAge();
  var gender = getGender();
  var petChoice = pickPet(age, gender);
  //use the display function to write to the page
  displayResults(petChoice);
}

//functions that prompt the user for info
function getAge()
{
  var ageCorrect = false;
  //loops until it gets good data
  while (ageCorrect == false)
  {
      var age = parseInt(prompt("What is your age?"));
      if (age > 0)
      {
        ageCorrect = true;
      }
      else
      {
        alert("Please input a valid age (A number greater than zero).")
      }
  }
	return age;
}

function getGender()
{
  var genderCorrect = false;
  //loops until it gets good data
  while (genderCorrect == false)
  {
      var gender = prompt("M or F?");
      if (gender == "M" || gender == "F")
      {
        genderCorrect = true;
      }
      else
      {
        alert("Please pick M or F (uppercase please).")
      }
  }
	return gender;
}

function pickPet(age, gender)
{
	var petChoice;
  if (age < 10)
  {
    if (gender == "M")
    {
      petChoice = "rock";
    }
    else
    {
        petChoice = "cat";
    }
  }
  else if (age >= 10 && age < 20)
  {
    if (gender == "M")
    {
      petChoice = "lizard";
    }
    else
    {
        petChoice = "pig";
    }
  }
  else
  {
    if (gender == "M")
    {
      petChoice = "corgi";
    }
    else
    {
        petChoice = "fish";
    }
  }
	return petChoice;
}

function displayResults(petChoice)
{
  var text = document.getElementById("resultText");
	text.innerHTML = ("You should get a " + petChoice);
  var pic = document.getElementById("resultPic");
  pic.src = (petChoice + ".jpg");
}
