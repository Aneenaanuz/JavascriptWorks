// 1. write a program to print number between 1 and 10

// let num=1
// while(num<=10)
// {
//     console.log(num);
//     num++
// }


// 2.write a program to print number between 10 to 1 (reverse order)

// let num1=10
// while(num1>=1)
// {
//     console.log(num1);
//     num1--
// }

// 3.sum of digits using while

// let num=26
// let sum=0
// while(num>0)
// {
//     rem=num%10;
//     sum=sum+rem;
//     num=parseInt(num/10)
// }
// console.log('sum of digits : ',sum);
 
// 4.check prime or not using for loop"

// let num=3
// let flag=0
// for(i=2;i<=num/2;i++)
// {
//     if(num%i===0)
//     flag=1
// }
// if(flag===1)
// {
//     console.log('number is not prime');
// }
// else{
//     console.log('number is prime');
// }

// using while(prime numebr or not)
let num1=56
let i=2
while(i<=num1/2)
{
    if(num1%i===0)
    {
        console.log('num is not prime');
        break
    }
    else{
        console.log('number is prime');
        break
    }
    i++
}








