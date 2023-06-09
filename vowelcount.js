//print number of consonants,vowels
var text="hello"
vowel=['a','e','i','o','u']
vowel_count=0
cons_count=0
for(let ch of text){
    if(vowel.includes(ch)){
        vowel_count+=1
    }
    else{
        cons_count+=1
    }
   
}
console.log(vowel_count);
console.log(cons_count);

// using ternary operator
var text="hello"
vowel=['a','e','i','o','u']
vowel_count=0
cons_count=0
for(let ch of text){
    vowel.includes(ch)?vowel_count+=1:cons_count+=1
}
console.log(vowel_count);
console.log(cons_count);


