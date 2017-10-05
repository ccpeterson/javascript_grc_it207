/*
Clinton Peterson and Conner Ledbetter
10/4/17
paycalc.js
Calculates someone's pay
*/

//Welcome screen
window.alert("Welcome to the pay calculator");

//Prompting for info about the employee and declaring variables
var name = prompt("What is your full name?");
var hours = prompt("How many hours did you work this week?");
hours = parseInt(hours);
var payRate = prompt("What is your hourly pay rate?");
payRate = parseInt(payRate);

//calculates total pay
var totalPay = payRate * hours;

// Checks if the employee needs a bonus added to a paycheck
var bonus = confirm("Press OK if you worked a Holiday, otherwise press cancel.");

if (bonus == true)
{
  totalPay = totalPay + 100
}

//writes the employee's name and paycheck to the browswer
document.write(name + " your paycheck is $" + totalPay);
