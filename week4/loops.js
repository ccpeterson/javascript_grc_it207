


function iterate ()
{
  var n = prompt("enter a non negative number");
  while (!isNumeric(n) || n<0)
  {
    n = prompt("try again and enter a non negative number");
  }
  for (var i = 0; i <= n; i++)
  {
    if (i === 0)
    {
      document.write(i + ":zero<br>");
    }
    else if ( i % 2 === 0)
    {
      document.write(i + ": even<br>");
    }
    else if ( i % 2 === 1)
    {
      document.write(i + ": odd<br>");
    }
  }
}

function isNumeric(number)
{
  return !isNaN(number);
}

iterate();
