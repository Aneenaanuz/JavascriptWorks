/* 1....WAP to display the grade according to the following
below 25 --D
25-45 --C
45-50 --B
50-60 --B+
60-80 --A
80-100 --A+

2..WAP to display 
sal=10000
year of expeerience >10 sal increment by 10%
                    >=6 <=10  increment by 8%
                    <6       by 5% */

// 3.write a program to print all the odd numbers within a given range

// for(i=0;i<=10;i++)
// {
//     if(i%2===1)
//     {
//         console.log(i);
//     }
// }

// for(let i=1;i<=10;i+=2)
// {
//     console.log(i);
// }

// 4.write a program to print the sum of digits of a given number

//given range
// let sum=0
// for(let i=0;i<=3;i++)
// {
//     sum=sum+i
//     console.log(sum);
// }

//given number
num=123
sum=0
for(i=0;num>0;i++)
{
    rem=num%10
    sum=sum+rem
    num=Math.floor(num/10)
    //num=parseInt(num/10)
}
console.log(sum);




//nested for loop questions
let string
for(let i=0;i<=3;i++)
{   
    string=''
    for(let j=0;j<i;j++)
        string+='* '
    console.log(string);
}

