/* methods
-----------
1.length = to find the length of the string
2.slice(start,end) = find the particular item
3.substring(start,end)
4.substr(start,end)
5.replace("word","replacing word")
6.toUpperCase()
7.toLowerCase()

*/

// str="aneena"
// console.log(str);
// len=str.length
// console.log(len);

// //slice()
//Name="jungkook,jimin,suga"
// console.log(Name.slice(9));
// console.log(Name.slice(9,14));
// console.log(Name.slice(15,20));
// console.log(Name.slice(0,8));

// //negative indexing

// console.log(Name.slice(-10));

// //substring()
// console.log(Name.substring(9));
// console.log(Name.substring(9,14));
// console.log(Name.substring(15,20));

// //substr()
// console.log(Name.substr(0,3));
// console.log(Name.substr(4,4));

// replace()  = used to single change 
name1="jungkook,jimin,suga"
console.log(name1.replace('jimin','taehyung'));
console.log(name1.replace('suga','j-hope'));

//replaceAll() = In a sentence a word repeated multiple times,they can change 
about="jungkook is a singer in BTS Boy group.jungkook is extra talented...."
console.log(about.replaceAll('jungkook','taehyung')); 

// toUpperCase = convert to uppercase
let str="Hello"
let newstr=str.toUpperCase()
console.log(newstr);

// toLowerCase()
let str1="Hello"
let newstr1=str1.toLowerCase()
console.log(newstr1);

//concatenation
let string="hello"
let newstring=string.concat(" ","world")
console.log(newstring);

//split()
let students="arya akshaya sneha"
let stud=students.split(" ")
console.log(stud);










