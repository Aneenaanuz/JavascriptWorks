//comparison between var , let , const


//var - re-declaraction possible means last entered value considered

var a=10
//console.log("a =",a);
var a='anu'
var b=20
console.log("a =",a);
console.log("b =",b);

//let -  re-declaration not possible(same variable name not possible)

// let name1='jinnu'
// console.log("name is",name1);
// name1='jimmu'                           // re-assignment possible
// console.log("name is",name1);
// let name1="anju"      //(error)         //redeclaration not possible

//const
const a=100
console.log("a =",a);
a=300                                    // re-assignment not possible
console.log("a =",a);
const a='abcd'                           // re-declaration not possible
console.log("a ",a);



