//array method


// // 1.push(object)
// var arr=[10,30,25]
// arr.push(100)            //push an object to the array
// console.log(arr);

// // 2.pop()
// arr.pop()               //removes the last object to the array
// console.log(arr);

// // 3.includes(object)
// console.log(arr.includes(30));   // check an object present or not


// // 4.map()                      // 
// var nums=[2,3,4,5,6]
// var cubes=nums.map((n)=>n**3)
// console.log(cubes);

// var a=(num)=>num**2
// var squares=nums.map(a)
// console.log(squares);

// // 5.filter()
// //print even numbers
// num=[2,3,4,6,7,8,11]
// var even=num.filter((n)=>n%2==0)
// console.log(even);

// // print greater than five
// var numgt_five=num.filter((n)=>n>5)
// console.log(numgt_five);

// // print all names in uppercase
// var names=['albin','alvin','bibin','tony','jack']
// var upp_names=names.map((name1)=>name1.toUpperCase())
// console.log(upp_names);

// //print all names starting with 'a'
// var name_a=names.filter((name1)=>name1[0]=='a')
// var name_a=names.filter((name1)=>name1.startsWith('a'))
// console.log(name_a);

// //self question
var numbers=[3,6,15,8,23]
var odd_num=numbers.map(num=>num%2!=0)
console.log(odd_num);

// var res=numbers.map((num)=>num**5)
// console.log(res);

// // sort(obj1,obj2)

// var nums=[3,6,8,1,16,12,2]
// var srt=nums.sort((obj1,obj2)=>obj1<obj2?-1:1)
// console.log(srt);

// //another method
// var sorting=nums.sort((obj1,obj2)=>obj1-obj2)
// console.log(sorting);

// // reduce(obj1,obj2)
// var numbers=[2,5,3,8,1,10,48,32]
// //1.print sum
// var sum=numbers.reduceRight((n1,n2)=>n1+n2)
// console.log(sum);

// //2.print max
// var max=numbers.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max);

// //3.print min
// var min=numbers.reduce((num1,num2)=>num1>num2?num2:num1)
// console.log(min);


// var expense=[12000,8000,24000,23000,45000,10000]
// //total expense
// //highest expense
// //lowest expense
// //avg expense

// // 1.total
// var total=expense.reduce((a,b)=>a+b)
// console.log(total);

// // 2.highest

// var highest_exp=expense.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(highest_exp);

// // 3.lowest
// var lowest_exp=expense.reduce((num1,num2)=>num1>num2?num2:num1)
// console.log(lowest_exp);

// // 4.avg

// var total=expense.reduce((a,b)=>a+b)
// console.log(total/(expense.length));

// // 5.sort
// var srt=expense.sort((n1,n2)=>n1<n2?-1:1)
// console.log(srt);

// // 6.expense>20000
// var expgt=expense.filter(n=>n>20000)
// console.log(expgt);











