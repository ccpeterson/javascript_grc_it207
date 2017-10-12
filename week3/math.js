/*
math functions
*/

//verify numbers

var number = "50.01";
document.write(typeof number);
document.write("<br>")
//get number from string

var integer = parseInt(number);

document.write(typeof integer);
document.write(integer);
document.write("<br>");

var floater = parseFloat(number);

document.write(typeof floater);
document.write(floater);
document.write("<br>");

number = Math.pow(number,number);


document.write(number);
document.write("<br>");


number = Math.log(1024);
document.write(number);
