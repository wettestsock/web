/*

myNum = Math.round(3.3424); round a number
myNum = Math.ceil(3.5); round UP!!!
myNum = Math.floor(3.5); round down
myNum = Math.pow(3, 2); 3 is the base, 2 is the exponent, powers
myNum = Math.sqrt(64); SQUARE ROOTING
myNum = Math.abs(-3); absolute value
myNum = Math.min(1, 5, 3, 4); finds the minimum value
myNum = Math.max(1, 5, 3, 4); finds the maximum value
myNum = Math.PI; pi
myNum = Math.E;

//random number generator within a range
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min + 1) + min);
}
ORRRRR
var randomNumbers = (max,min) => Math.floor(Math.random() * (max - min + 1) + min); 
// arrow function random number

//return works like an if boolean (true or false) statement

function isLess(a,b) {
    return a < b
}

console.log(isLess(10,15));

.charAt([character number, starting from 0]) <- prefix to find charatcer, only works in strings, if want to find number, use .toString();


...[array name] <--- applies to each element in an array



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

CONCATINATE MERGES 2 ARRAYS OR STRINGS TOGETHER

ex -- array3 = array1.concat(array2); <---- adds array2 to the end of array 1
*/

