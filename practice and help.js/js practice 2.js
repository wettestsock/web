// last one got too big, made a new one ot make it less confusing

//      WAYS TO CALL ITEMS FROM AN OBJECT INTO A FUNCTION
//this keyboard has 4 ways of being determined
// Implicit 
// Explicit
// New 
// Default binding
const name = 'superman';
const lastName = 'super superman';
//...

//IMPLICIT BINDING RULE
const teacher = {
    name: "Michael",
    lastName: "Vargas",
    sayMyName: function() {
        console.log(`my name is ${this.name} and last name ${this.lastName}`)  //this.name treats it as person.name 
    }   //this refers to the object the function is within
};

teacher.sayMyName(); //implicit binding rule 


//EXPLICIT BINDING RULE
//if the function is outside of an object
function sayMyName() {
    console.log(`my name is ${this.name} and last name fjesjflji ${this.lastName}`)  //this.name treats it as person.name 
};

sayMyName.call(teacher); //.call calls an object 



//NEW BINDING

function Person (name) {
    // this = {}
    this.name = name + ' nice cock'; //chabges the specified object
    console.log(`you goddamn studeering parrtor`);

}


const p1 = new Person("Joe Biden"); 
const p2 = new Person("Joe Biden Jr"); 
const p3 = new Person("Joe Biden Sr"); 

console.log(p1.name, p2.name, p3.name);

//DEFAULT BINDING
//if none of the other 3 rules are matched, the default


sayMyName(); //if it doesnt find anything, itll look in the global scope for .name


/*
// ORDER OF PREFERENCE, LEAST TO MOST
// default binding -> implicit binding -> explicit binding -> new binding


//PROTOTYPE OBJECT
function personFunction(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
};

const person1 = new personFunction('Bruce', 'Wayne')
const person2 = new personFunction('Joe', 'Biden')

personFunction.prototype.getFullName = function() { //object followed by .protoype can make a function be generic and applicable to all properties of the object
    return this.firstName + ' ' + this.lastName;
};

console.log(person1.getFullName());
console.log(person2.getFullName());

//prototypal inheritance

function SuperHero(fName, lName) {
    personFunction.call(this, fName, lName) //calls parameters from an object, being the personFunction
    this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
    console.log('fighting crime');
}
SuperHero.prototype = Object.create(Person.prototype);


const batman = new SuperHero('stinky', 'toilet');
console.log(batman.getFullName());

*/