/* 
arrays
-------
same type of data store

let arr=["dhoni","kohli","sachin"]
*/

// let arr=["dhoni","kohli","sachin"]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);

// // print array values using for loop
// for(i=0;i<arr.length;i++)
// console.log(arr[i]);

// // using while loop
// let i=0
// while(i<(arr.length)){
//     console.log(arr[i]);
//     i++;
// }

// //3.sum of elemets in a array

// let sum=0
// let integers=[4,7,9,23,35,47,58,61]
// for(i=0;i<integers.length;i++)
// sum=sum+integers[i]
// console.log("sum is",sum);

// //4.print all odd numbers in the array

// let numbers=[4,7,16,23,35,47,58,61]
// for(i=0;i<numbers.length;i++)
// if(numbers[i]%2!=0)

// console.log(numbers[i]);

// // 5.greatest numberv in the array

// let max=numbers[0]
// for(i=0;i<numbers.length;i++){
//     if(numbers[i]>max){
//         max=numbers[i]
//     }
// }
// console.log("greatest number in the array is",max);

// // 6.replace the particular element in the array

// let array=[23,45,67,45]
// console.log("array is ",array);
// for(i=0;i<array.length;i++){
//     if(array[i]===45){
//         array[i]=95
//     }
// }
// console.log("replaced array is ",array);

// 7.find out a pair of elements which form a particular value as sum from a given

let arrays=[6,4,3,5,9,0]
for(i=0;i<arrays.length;i++){
    for(j=i+1;j<arrays.length;j++){
        if(arrays[i]+arrays[j]===9){
        console.log(arrays[i],arrays[j]);
        }
    }   
}

// 8.peak and valley pairs
let arr2=[2,4,3,5,1,8,7,10,0,11]
let peak=0
let valley=0
// for(i=0;i<arr2.length;i++){
//     for(j=i+1;j<arr2.length;j++){
//         for(k=j+1;k<arr2.length;k++){
//             if(arr2[i]>arr2[j]<arr2[k]){
//                 valley=valley+1
//             }
//             else if(arr2[i]<arr2[j]>arr2[k]){
//                 peak=peak+1
//             }
//         }
//     }
// }
// console.log("peak = ",peak);
// console.log("valley = ",valley);

for(i=1;i<arr2.length;i++){
    if(arr2[i-1]<arr2[i] && arr2[i]>arr2[i+1]){
        peak=peak+1
    }
    else if(arr2[i-1]>arr2[i] && arr2[i]<arr2[i+1]){
        valley=valley+1
    }
}
console.log("peak = ",peak);
console.log("valley = ",valley)
