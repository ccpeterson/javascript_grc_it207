/*
decisions

*/


//basic

var currentMPH = 60;
var carLane = "hov";
var rainy = true;
var speedLimit = 70;

if (carLane === "standard")
{
  if (currentMPH >= speedLimit)
  {
    document.write("Slow down! <br>");
  }
}
else if ( carLane === "hov")
{
  if (currentMPH < 65)
  {
    document.write("Youre going to slow, move over <br>");
  }
  else if (currentMPH > 70 && rainy = true)
  {
    document.write("Slow down <br>");
  }
}
switch (rainy)
{
  case true:
  document.write("drive careful <br>");
  break;
  case false:
  document.write("have a nice day <br>")
  break;
}
