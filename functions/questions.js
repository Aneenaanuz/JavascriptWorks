

function hello(){
    console.log("hellooo");
}
hello()


// 1.sum of 2 number using function
function sum(a,b){
    return a+b
}
sum(5,9)

console.log(sum(5,9));


function sum(a,b){
    return a+b
}
result=sum(6,15)  //difference is that one variable stored the function and that variable printing 
console.log(result);

// factorial program

function fact(){
    let num=5
    let fa=1
    for(i=1;i<=num;i++)
    fa*=i
    console.log('factorial is',fa);
}
fact()

//equilateral triangle area

function equilat(side){
    let area=((Math.sqrt(3))/4)*(side*side)
    console.log("area = ",area);
}

function isocs(b,h){
    let area=(b*h)/2
    console.log("area = ",area);
}

function scalene(a,b,c){
    let s=a+b+c
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log("area = ",area);
}

let side1=4
let side2=8
let side3=6
if(side1===side2 && side2===side3){
    console.log("triangle is equilateral");
    equilat(side1)
}
else if(side1===side2 || side2===side3 || side1===side3){
    console.log("triangle is isocles");
    isocs(side1,side2)
}
else{
    console.log("traingle is scalene");
    scalene(side1,side2,side3)
}

// 3.check leap year or not

function leapyear(year){
    if(year%4===0){
        if(year%400===0 || year%100!=0)
        console.log("leap year");
    }
    else{
        console.log("not leap year");
    }
}
leapyear(2000)
leapyear(2023)

// 4.degree celcius to farenheet

function degreetofaren(degree){
    let f=degree*9/5+32
    console.log(f);
}
degreetofaren(32)

// 5. farenheat to celcious

function farentodegree(faren){
    let c=[(faren-32)*5]/9
    console.log(c);
}
farentodegree(78)

