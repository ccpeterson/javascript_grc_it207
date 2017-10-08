/*
Author : Clinton Peterson
Date : 7 Oct 2017
Filename : conversions.js
Assignment : conversions
*/
// Declaring global variables since I need multiple functions to have access to the same data
var convertedWeight;
var convertedHeight;
//simple alert message
function greeting()
{
  alert("Hello User!");
}
//prompts for name then displays it in an alert
function personalGreeting()
{
  var name = prompt("Please enter your full name");
  alert("Hello " + name + ", I hope you are having a great day!");
}
//the next two take user prompt input, parse it for a number then perform a simple operation
function convertCF()
{
  var  cTemp = prompt("What is the temperature you wish to convert from C to F?");
  alert(parseFloat((Number.parseInt(cTemp) * (9/5)+32)).toFixed(2) + "F is the converted temp");
}
function convertFC()
{
  var  fTemp = prompt("What is the temperature you wish to convert from F to C?");
  alert(parseFloat(((Number.parseInt(fTemp) - 32) * (5/9))).toFixed(2) + "C is the converted temp");
//the next to are also simple conversions but store the data in the global vars
}
function convertWeight()
{
  var  userWeight = prompt("What is your weight in pounds?");
  convertedWeight = Number.parseInt(userWeight) * 0.45;
  alert("Your weight is " + parseFloat(convertedWeight).toFixed(2) + "kg");
}
function convertHeight()
{
  var  userHeight = prompt("What is your height in inches?");
  convertedHeight = Number.parseInt(userHeight) * 0.025;
  alert("Your height is " + parseFloat(convertedHeight).toFixed(2) + "m");
}
//using Math.*
function square()
{
  var toBeSquared = prompt("What number should I multiply by itself?");
  alert((Math.pow(Number.parseInt(toBeSquared),2)) + " is the answer.");
}
//A function that calls the other two to get input and have it converted and put in a global var before doing a cal itself
function calcBMI()
{
  alert("First we need your weight.");
  convertWeight();
  alert("Ok, now I need your height.");
  convertHeight();
  var BMI = convertedWeight / Math.pow(convertedHeight,2);
  alert("Your BMI is " + parseFloat(BMI).toFixed(2));
}
