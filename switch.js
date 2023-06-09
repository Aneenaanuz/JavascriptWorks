/* switch 
----------

switch(expression)
{
    case condition 1:
        statements
    case condition 2:
        statements
    default:
        statements

}
*/

// check whetherthe given value is 10,15 or 20 print value is not 10,15 or 20

let num=200
switch(num)
{
    case 10:
        console.log('value is 10');
        break;
    case 15:
        console.log('value is 15');
        break;
    case 20:
        console.log('value is 20');
        break;
    default:
        console.log('value is not 10,15 or 20');
}

// 2.print the days of a week using switch

let day=6
switch(day)
{
    case 1:
        console.log('sunday');
        break
    case 2:
        console.log('monday');
        break
    case 3:
        console.log('tuesday');
        break
    case 4:
        console.log('wednesday');
        break
    case 5:
        console.log('Thursday');
        break
    case 6:
        console.log('Friday');
        break
    default:
        console.log('invalid');

}

// 3. calculator

let num1=30
let num2=6
choice='-'
switch(choice)
{
    case "+":
        console.log('sum is',num1+num2);
        break    
    case "-":
        console.log('sub is',num1-num2);
        break
    case "*":
        console.log('product is',num1*num2);
        break
    case "/":
        console.log('div is',num1/num2);
        break
    default:
        console.log('invalid');
}



