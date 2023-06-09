function add(num1,num2){
    return num1+num2
}

//arrowfunction
var addition=(num1,num2)=>num1+num2
console.log(addition(10,20));

var mul=(n1,n2)=>n1*n2
console.log(mul(2,8));

var cube=(n)=>n**3
console.log(cube(2));

//maximum of two numbers
var maxTwo=(a,b)=>a>b?a:b
console.log(maxTwo(32,14));

//smart subtraction 
var smartsub=(num1,num2)=>num1>num2?num1-num2:num2-num1
console.log(smartsub(10,6));

//positive or negative
num=10
console.log(num>0?"positive":"negative");

//even or odd
num1=24
console.log(num1%2==0?"even":"odd");

//+ve ,-ve or zero
number=0
console.log(number>0?"+ve":number<0?"-ve":"zero");

//largest among 3 numbers
var n1=2000
var n2=300
var n3=40
console.log((n1>n2)&&(n1>n3)?n1:(n2>n3)?n2:n3);




