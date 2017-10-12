/*
Clinton Peterson and Conner Ledbetter
10/11/17
paycalc2.js
Calculates someone's pay...with functions
*/

//function that is started on button push
function calcPay ()
{
  //declaring variables and getting the values set by calling the functions
  var name = getName();
  var hours = getHours();
  var rate = getRate();
  var bonus = getBonus();
  //calculate the total with this function
  var total = calcTotal(hours, rate, bonus);
  //use the display function to write to the page
  displayResults(name, total);
}

//functions that prompt the user for info
function getName()
{
	var name = prompt("What is your name?");
	return name;
}

function getHours()
{
	var hoursWorked = parseFloat(prompt("How many hours did you work last week?"));
	return hoursWorked;
}

function getRate()
{
	var payRate = parseFloat(prompt("What is your pay rate?"));
	return payRate;
}

function getBonus()
{
	var holiday = confirm("Press OK if you worked a holiday if not cancel");
	if (holiday == true)
	{
    return 100;
	}
	else
	{
    return 0;
	}
}

//calculate the totalPay
function calcTotal(hours, rate, bonus)
{
	var total = hours * rate + bonus;
  return total;
}

//tells the user their pay, rounded to the nearest cent
function displayResults(name, total)
{
  var element = document.getElementById("pay");
	element.innerHTML = (name + ", you earned $" + total.toFixed(2));
}
