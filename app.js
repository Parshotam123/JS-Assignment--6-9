// Question #1

document.write("<b>Question #1 Answer</b>"+"<br>"+"<br>");

var a = 10;

document.write("The Result"+"<br>");
document.write("The value of a is: "+ a + "<br>"+"<br>");

// ++a = 11 then a = 11 (Pre-Incremnt)
document.write("The value of ++a is: "+ ++a + "<br>");
document.write("Now the value of a is: "+ a + "<br>"+"<br>");

// a++ = 11 then a = 12 (Post-Incrmnt)
document.write("The value of a++ is: "+ a++ + "<br>");
document.write("Now the value of a is: "+ a + "<br>"+"<br>");

// --a = 11 then a = 11 (Pre-Decremnt)
document.write("The value of --a is: "+ --a + "<br>");
document.write("Now the value of a is: "+ a + "<br>"+"<br>");

// a-- = 11 then a = 10 (Post-Decremnt)
document.write("The value of a-- is: "+ a-- + "<br>");
document.write("Now the value of a is: "+ a + "<br>"+"<br>");

// Question #2

 document.write("<b>Question #2 Answer</b>"+"<br>"+"<br>");

var a = 2;
var b = 1;

// {--a} = {2-1} = 1
// {--b} = {1-1} = 0
// {--a} - {--b} = {1-0} = 1
// {--a} - {--b} + {++b} = {1-0+1} = 2
// {--a} - {--b} + {++b} + {b--} = {1-0+1+1} = 3

var result = --a - --b + ++b + b--;
document.write("a is =  " + a +"<br>");
document.write("b is =  "+ b + "<br>");
document.write("result is =  "+ result+"<br>"+"<br>");

// Question Number 3
document.write("<b>Question #3 Answer</b>"+"<br>"+"<br>");

var userName = prompt("Please Enter Your Name");
// alert(userName);
alert("Welcome "+userName);
// console.log(userName);
document.write("Welcome "+userName+"<br>"+"<br>");


// Question Number 4
document.write("<b>Question #4 Answer</b>"+"<br>");

var input = prompt("Enter a number to display its multiplication table:");
var num = Number(input);

// If input is empty, cancelled, or not a number, default to 5

if (!input || isNaN(num)) {
        num = 5;
    }

document.write("<h2>Multiplication Table of " + num + ":</h2>");

document.write(num + " x " + "1" + " = " + (num * 1) + "<br>");
document.write(num + " x " + "2" + " = " + (num * 2) + "<br>");
document.write(num + " x " + "3" + " = " + (num * 3) + "<br>");
document.write(num + " x " + "4" + " = " + (num * 4) + "<br>");
document.write(num + " x " + "5" + " = " + (num * 5) + "<br>");
document.write(num + " x " + "6" + " = " + (num * 6) + "<br>");
document.write(num + " x " + "7" + " = " + (num * 7) + "<br>");
document.write(num + " x " + "8" + " = " + (num * 8) + "<br>");
document.write(num + " x " + "9" + " = " + (num * 9) + "<br>");
document.write(num + " x " + "10" + " = " + (num * 10) + "<br>"+"<br>");


// Question Number 5
document.write("<b>Question #5 Answer<b>"+"<br>"+"<br>");

var english= 100;
var math = 100;
var urdu = 100;
var totalMarks = english+math+urdu;

var englishMarks= 54;
var mathMarks = 54;
var urduMarks = 48;

var obtainedMarks = englishMarks+urduMarks+mathMarks;

var percentage = (obtainedMarks/totalMarks)*100;
document.write("Total Marks = "+totalMarks+"<br>");
document.write("Obtained Marks = "+obtainedMarks+"<br>");
document.write("Percentage = "+percentage+"%"+"<br>");
// document.write(totalMarks, obtainedMarks, percentage);
