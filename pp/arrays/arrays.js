/*
Author : Clinton Peterson and Conner Ledbetter
Date: 16 Oct 2017

*/

function lastElement(numberArray, last)
{
  if (last === undefined)
  {
    last = 1;
  }
  if (last > numberArray.length)
  {
    last = numberArray.length;
  }
  var cycles = numberArray.length - last;
  for (var i = 0; i < cycles; i++)
  {
    numberArray.shift();
  }
  console.log(numberArray);
}

lastElement([7,9,0,2]);
lastElement([7,9,0,2], 3);
lastElement([7,9,0,2], 6);

function arrayClone(array)
{
  var clone = array.slice();
  console.log(clone);
}

arrayClone([1,2,4,0]);
arrayClone([1,2,[4,0]]);
