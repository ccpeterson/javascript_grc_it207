window.alert("Welcome to the leap year calculator");
var month = prompt("What is your birth month?");
month = parseInt(month);
var day = prompt("What is your birth day?");
day = parseInt(day);
var year = prompt("What is your birth year?");
year = parseInt(year);

var leapYear = false;
if (year % 4  == 0)
{
  if (year % 100 == 0)
  {
    if (year % 400 == 0)
    {
      leapYear = true;
    }
    else
    {
      leapYear = false;
    }
  }
  else
  {
    leapYear = true;
  }
}

document.write(leapYear);
