/*
working with functions

*/

console.log("this is working!");

// //declaring and invoking
// function calculateDogYears ()
// {
//   var dogYears = parseInt(prompt("enter your dogs age"));
//   var humanYears = 0;
//   if (dogYears <= 3)
//   {
//     humanYears = 10 * dogYears;
//   }
//   else if (dogYears > 3)
//   {
//     humanYears = 7 * (dogYears - 3) + 30;
//   }
//   document.write("The dog is: " + humanYears + " years old.");
// }
// calculateDogYears();
//
// //stuff
// function tripCalculator(minMph, maxMph, distance)
// {
//   var average = (minMph + maxMph)/2;
//   return distance/average;
// }
//
// var hours = tripCalculator(30,60,100);
// document.write("trip will take" + hours.toFixed(2));

//paramenters

// function convertCurrency (dollars, currencyType)
// {
//   if (currencyType == "euro")
//   {
//     return dollars * 0.94;
//   }
//   if (currencyType == "pounds")
//   {
//     return dollars * 0.80;
//   }
//   else if (currencyType == "pesos")
//   {
//     return dollars * 18.52;
//   }
//   else
//   {
//     return -1;
//   }
// }
//
// var dollars = 3.5;
// document.write(convertCurrency(dollars,"euro"))
// document.write(convertCurrency(dollars,"pounds"))
// document.write(convertCurrency(dollars,"pesos"))
// document.write(convertCurrency(dollars,"stuff"))
//
// var less = function (first, second)
// {
//   return first < second;
// }
//
// var greater = function (first, second)
// {
//   return first > second;
// }
//
// function sort (elements, compare)
// {
//   var first = elements[0];
//   var second = elements[1];
//   var third = elements[2];
//
//   if (compare(first, second))
//   {
//     var temp = first;
//     first = second;
//     second = temp;
//   }
//   if (compare(second, third))
//   {
//     var temp = second;
//     var second = third;
//     var third = temp;
//   }
//   if (compare(first, second))
//   {
//     var temp = first;
//     first = second;
//     second = temp;
//   }
//   return [first, second, third];
// }
//
// var results = sort([30,20,10], greater);
// document.write(results);


//func decomp

birthDate();

function birthDate()
{
    var bday = getParts();
    if (validateMonth(bday[0]), validateDay(bday[1]), validateYear(bday[2]))
    {
      printSuccess(bday[0], bday[1], bday[2]);
    }
}

function getParts()
{
  var month = parseInt(prompt("month?"));
  var day = parseInt(prompt("day?"));
  var year = parseInt(prompt("year?"));

  return [month, day, year];
}

function validateMonth(month)
{
  return month >=1 && month <=12;
}

function validateDay(day)
{
  return day >=1 && day <=31;
}

function validateYear(year)
{
  return year >= 1900 && year <= 2018;
}

function printSuccess(day, month, year)
{
  document.write("Your bday is " + day + month + year);
}

function printFailure()
{
  document.write("your format sucks");
}
