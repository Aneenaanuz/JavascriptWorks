// /* if condition
// ============== */

// // 1. num1 > num2 print "hai" , num1<num2 print "hello" using if condition

// var num1=10
// var num2=20
// if(num1>num2)
// {
//     console.log('hai');
// }
// if(num1<num2)
// {
//     console.log('hello');
// }

// // 2. write a program to print whether the given number is +ve,-ve or zero using if only

// var num1=-67
// if(num1>0)
// {
//     console.log('positive');
// }
// if(num1<0)
// {
//     console.log('negative');
// }
// if(num1==0)
// {
//     console.log('zero');
// }

// // 3. write a program to check whether a student passed or failed in a exam.passed if marks 45 and above,if below 45 failed

// mark1=95
// if(mark1>=45)
// {
//     console.log('passed');
// }
// if(mark1<45)
// {
//     console.log('failed');
// }

// // 4. write a program to check a person is eligible for voting or not

// age=20
// if(age>=18)
// {
//     console.log('aligible to vote');
// }
// if(age<18)
// {
//     console.log('not aligible to voting');
// }

// // 5. check the given number is odd or even

// var num1=67
// if(num1%2===0)
// {
//     console.log('even');
// }
// if(num1%2!=0)
// {
//     console.log('odd');
// }
// if(num1===0)
// {
//     console.log('zero');
// }

// // 6. check the given number is divisible by 7 or not

// num2=49
// if(num2%7==0)
// {
//     console.log('divisible by 7')

// }
// if(num2%7!=0)
// {
//     console.log('not divisible by 7');
// }


/* if-else condition
==================== */
var num3=10
var num4=20
if(num3>num4)
    console.log('hai');
else
    console.log('hello');

// 2.write a program the given number is odd or even using if-else

var n=5
if(n%2===0)
    console.log('even number');
else
    console.log('odd number');

// 3.write a program to find out maximum of three numbers

// var a=5
// var b=80
// var c=600
// if(a>b && a>c){
//      if(a>c)
//      console.log();
//      else
//       console.log('c is greater');
// }
// else{
//     console.log("b is greater");
// }

// Declare three variables and assign values
var num1 = 5;
var num2 = 80;
var num3 = 150;
var biggest;

if (num1 > num2) {
  if (num1 > num3) {
    biggest = num1;
  } else {
    biggest = num3;
  }
} else {
  if (num2 > num3) {
    biggest = num2;
  } else {
    biggest = num3;
  }
}

console.log("The biggest number is " + biggest)


/* if else-if else condition
============================ */

var a=5
var b=80
var c=600
if (a>b && a>c)
  console.log('a is greater');
else if(b>c)
  console.log('b is greater');
else
  console.log('c is greater');

// 2. a=10,a=15,a=30 , a is not 10,15,30
var a=56
if(a===10)
  console.log('a is 10');
else if(a===15)
  console.log('a is 15');
else if(a===30)
  console.log('a is 30');
else 
  console.log('a is not 10,15 or 30');

// 3. write a program to print  whether the angles of triangle is valid or not
a=7
b=10
c=5
if(a+b>c && b+c>a && a+c>b){
    console.log("valid");
}
else{
    console.log("not valid");
}

// 4. for a valid triangle check whether it is isocsles
// isocsles triangle
// =================

a=23
b=45
c=45
if (a===b || b===c || a===c){
    console.log("it is an isocsles triangle");
}
else
    console.log("not isocsles triangle");




