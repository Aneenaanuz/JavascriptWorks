// 1)print highest length word
var text="hello good morning all"
var max_length=text.split(' ').reduce((w1,w2)=>w1.length>w2.length?w1:w2)
console.log(max_length);