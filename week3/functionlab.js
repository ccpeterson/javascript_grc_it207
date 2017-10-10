


function isNumeric(num)
{
  if (typeOf(num)== "number")
  {
    return true;
  }
  else
  {
    return false;
  }
}
function isString(string)
{
  if (typeOf(string)== "string")
  {
    return true;
  }
  else
  {
    return false;
  }
}
function isObject(obj)
{
  if (typeOf(obj)== "object")
  {
    return true;
  }
  else
  {
    return false;
  }
}
function isArray(thing)
{
  if (Array.isArray(thing))
  {
    return true;
  }
  else
  {
    return false;
  }
}


var array1 = [1,2,3];
var notArray = 4;

document.write(isArray(array1));
document.write(isArray(notArray));
