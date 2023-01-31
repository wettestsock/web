
// local vs global scope
var deezNuts = "deez nuts";
function deez() {
    var deezNuts = "NOOOO";

    return deezNuts
}
console.log(deez() + "\n" + "\n");
console.log(deezNuts + "\n" + "\n");
//



//return - returns value, esp with parameters
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10) + "\n" + "\n");

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

for(var i = 0; i < 10; i++) {
    console.log(getRandomNumber(2,4));
}
//


//idk
function nextInLine(arr, item) {
    arr.push(item); //adds the element
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));   //JSON.stringify turns array into a string 
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));
//

//stricts
/* 
3 === 3   -> true    
3 === "3"     -> false //triple equal is super strict, string =/= number
// Note: strict inequality also exists, works the same

3 == 3     -> true
3 == "3"     -> true
*/ 
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";    //return is final, meaning no other return after this point will be executed
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));
//

// THE SWITCH STATEMENTS
var weather = "raining";
    switch(weather) {    //switch works like an if statement for equals
        case "raining":  //the case, or if
        case "thunder":    //can put multiple cases on one answer
        console.log("dont go skateboarding");
        break;     //have to put break at end of each statement to signify the end of the statement
        case "sunny":
        console.log("go outside");
        break; 
        default:  //else statement
        console.log("maybe");
    }

function isLess(a,b) {
    return a < b
}
    
console.log(isLess(10,15));
//


//OBJECTS, CAN BE USED TO SRE STRINGS, NUMBERS, AND ARRAYS

//CNA BE USED TO REPLACE A SWITCH STATEMENT 
    var ourDog = {  //objects are like arrays but they give properties to values
        "name": "joe",  //put colon and commas till the very end
        "legs": 4,
        "tails": 1,
        "friends": ["everything", "at", "the", "end", "of", "time"] //dont put comma here
    };

console.log(ourDog.name); //object name dot the variable notation, dot notation only works with 1 word
console.log(ourDog.friends[3]);
//

//OR USE BRACKETS
console.log(ourDog["name"]);
console.log(ourDog["friends"]);
//

//can also change the properties within
ourDog["name"] = "joe biden";
console.log(ourDog.name);
//

var testObj = {
    12: "whos",
    16: "the hell",
    19: "is joe"
};

var playerNumber = 16;
console.log(testObj[playerNumber]);


//can add items to the object
var trial = {
    "this": ["is", "a", "super", "duper", "test"]
};

trial.thisistwo = "lol"; //adds another property to the end
//OR
trial["troll"] = "i am a troll and i have hijacked the entire world!!";

console.log(trial.thisistwo);

//CAN ALSO DELETE PROPERTIES FROM AN OBJECT

delete trial.troll; //or trial["troll"];
console.log(trial["troll"]);  //undefined, nothing there


//REPLACING A SWITCH STATEMENT (WHICH REPLACES AN ELSE IF STATEMENTS)
function phoneLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": ["the", "boston", "tea", "party"],
        "charlie": "Chicago",
        "delta": "Denver"
    };
    result = lookup[val];

    return result;
}

console.log(phoneLookup("bravo"));

//testing objects for properties

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) { //if it has a propertys
        return myObj[checkProp];
    } else {
        return "the deez nuts man is comign";
    }
    return "Change Me!";
}

console.log(checkObj("gift"));
console.log(checkObj("deez nuts man"));


//can put object inside of an array
var myMusic = [
    {
        "whos joe": "joe mama",
        "how are you": "good",
        "try": ["to understand", "holy crap this worked", "mess"],
        "gold": true
    }, // [sjfije, fejsij]
    {
        "joe": "biden",
        "year of covid": 2020
    }
];

console.log(myMusic[1]["year of covid"]);
console.log(myMusic[0].try[1]);


//do while loop, DOES THE LOOP AT LEAST ONCE EVEN IF THE CONDITION ISNT TRUE
var myArray = [];
var i = 10;  //i is not 5

do {
    myArray.push(i);
    i++;
} while (i <5);

console.log(myArray);


function convertToInteger(str) {
    return parseInt(str); //converts string to integer 
}

var isThisInteger = convertToInteger("56"); 
console.log(isThisInteger);

function binaryConvert(str) {
    return parseInt(str, 2); //converts string to integer, base 2, meaning converting binary code to integer
}  //by default this value is 10

var integerButBinary = binaryConvert("10011"); 
console.log(integerButBinary);



//TERNARY OPERATOR -- replaces condition of 2 if statements with 1 line of code

/* replaces
if (a === b) {
    return true;
} else {
    return false;
}
*/ 
function checkEqual(a, b) {
    return a === b ? true : false; 
    // condition, ? the if it's true , and : and false

    //return a === b; would work fine but this is a simple example
}
console.log(checkEqual(2,2));

//can nest ternary operators too
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "" : "zero";
    //if num > 0 it's positive, if it's not then it checks for whether it's under 0 or 0
}
console.log(checkSign(3));


//mutating an array within const
const s = [5,3,4]; 
function editInPlace() {
    //s = [2,5,6] <--- this wont work
    s[0] = 3; //cant edit const but can edit values within const array
    s[1] = 4;
    s[2] = 3;
}
editInPlace();
console.log(s);

//can, however, freeze the const with Object.freeze
const d = [5,3,4]; 
Object.freeze(d); //will freeze the object and prevent it from being changed

var gh = 24;
Object.freeze(gh); //freezes any object
function editInPlace() {
    s[0] = 3; 
    s[1] = 4;
    s[2] = 3;
}
editInPlace();
console.log(d);
console.log(gh);




//ARROW FUNCTIONS

const deezNut = (dez) => {
    let deezy = Math.sqrt(dez, 3);
    return Math.PI * deezy;
}
console.log(deezNut(3));


const magic = () => new Date(); //one line function only works with 1 statement, removes the need for a return statement

var myConcat = (arr1, arr2) => arr1.concat(arr2); //give parameters, then => arrow to set the function
let arrayUno = [1,2,4,3,2,4];
let arrayTwo = [5,87,4,3,5];

console.log(myConcat(arrayUno, arrayTwo)); 

var randomNumbers = (max,min) => Math.floor(Math.random() * (max - min + 1) + min); //random number generator but epic!!!
var randomNumbersSet = [];


for(let i = 0; i < 10; i++) {
    randomNumbersSet.push(randomNumbers(420, 69));
}
console.log(randomNumbersSet);
// this method only works with only 1 statement 

//for flexible functions theres default parameters --
const increment = (function() {
    return function increment(number, value = 1) { //default of 1
        return number + value;
    }
})();
console.log(increment(5,2)); //makes it so that the second value can be, by default, 1 
console.log(increment(5));



//DESTRUCTURING SYNTHAX

// can skip line 
const [z, x, , y] = [1,2,3,4,5,6];
console.log(z,x,y);


//if want to return array with first 2 elements missing
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [, , ...arr] = list; //leaving them blank skips them
    return arr;
}
console.log(removeFirstTwo(source));

//can destructure to pass an object as a function's parameters

const stats = {
    max: 324,
    min: 312,
    deeznut: 32342
};

const moreStats = {
    max: 2,
    min: 1
};

const half = (function() {
    return function half({max, min}) { //deconstructs a max and min value from an array as long as it has a max and min
        return (max + min) / 2.0;
    };
})();
console.log(half(stats));
console.log(half(moreStats));


//TEMPLATE LITERALS
// aka special string that makes complex strings easier

const person = {
    name: "Joe Biden",
    age: 85
}

 const greeting = `hello my name is ${person.name}!!!!!!!!!!!!!   


I am ${person.age} years old.` //backticks can be used to put vars and put multiline strings without needing to use \n
                                // the vars go inside a ${}  
console.log(greeting);

//CLASSES
//a blueprint for creating objects
//defines properties and/or methods

class Car {             //keeps multiple functions within a class and changes depending on the var it's called upon
    drive(){
        console.log("you drive the car");
    }  break(){
        console.log("you step on the brake");
    }
};

let car = new Car(); //have to declare a let
let car2 = new Car(); //can assign classes to multiple vars

car.drive(); //the object gets called
car2.break();


//constructor -- special method for assigning properties
//can pass specific instructions for specific values in the parentheses
class CarModels {         
    constructor(make, model, year, color){ //can assign properties to each car
        this.make = make;
        this.model = model;
        this.year = year *2 + " lol get fucked nerd";
        this.color = color;
    }
    drive(){
        console.log("you drive the car");
    }  break(){
        console.log("you step on the brake");
    }
};

let car01 = new CarModels("ford", "mustang", 2022, "red"); 
let car02 = new CarModels("chevy", "corvette", 2021, "blue"); 


console.log(car01.make);
console.log(car01.model);
console.log(car01.year);
console.log(car01.color);
console.log("\n");
console.log(car02.make);
console.log(car02.model);
console.log(car02.year);
console.log(car02.color);

function sayMyName(name) {
    console.log(`my name is ${name}`)
};



