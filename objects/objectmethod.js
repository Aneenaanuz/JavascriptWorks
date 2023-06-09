const stud={
    name:"Sreerag",
    class:12,
    mark:90,
    displaymark:function(){return this.name + " studying in " +this.class +'th standard'}
}
display=stud.displaymark()
console.log(display);

const car={
    brand:"BMW",
    color:"black",
    type:"4 wheeler",
    price:"70 lakhs",
    enginestart:function(){return this.brand},
    breaking:function(){return this.brand + " applying break"}

}
console.log(car.enginestart());
console.log(car.breaking());

//self introduction

const person={
    Name:"Aneena",
    place:"vadakara",
    currently:"python full stack developer",
    skills:"HTML,CSS,Python,Django",
    goal:"to be placed in a reputed company",
    intro:function(){self="I am "+this.Name + " from "+ this.place + ".currently doing "+this.currently +" at Luminar Technolab."+
    "My skills are "+this.skills +" My goal is to "+this.goal
     return self}
}
console.log(person.intro());

//nested property
const student={
    Name:"Aneena",
    place:"vadakara",
    currently:"python full stack developer",
    skills:{skill1:"python",skill2:'html',skill3:"css"},
    goal:"to be placed in a reputed company"
}
console.log(student.skills);
console.log(student.skills.skill1);

//create an object student ,having property marks and it should contain marks of 5 subjects

const student1={
    Name:"jasim",
    class:12,
    marks:{english:95,maths:90,chemistry:60,physics:75}

}
console.log(student1.marks.english);