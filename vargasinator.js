//the vargasinator version 2!!!!


var isMrVargasReallyAwesome = [];
var hesReallyAwesome = [];
var goofyAh;
var oddOrEven;
for(var i = 0; i < randomNumber(20, 36); i++) {
    isMrVargasReallyAwesome.push(randomNumber(2, 99));
    
}
isMrVargasReallyAwesome.sort();

function randomNumber(min_number, max_number) {
    return Math.floor(Math.random() * (max_number - min_number) + min_number);
}

goofyAh = randomNumber(Math.floor(isMrVargasReallyAwesome.length/2), isMrVargasReallyAwesome.length-1);


for(var i = 0; i < isMrVargasReallyAwesome[goofyAh]; i++) {
    hesReallyAwesome.push(randomNumber(2, 999));
    isTheFirstNumberFive(...hesReallyAwesome);
}


function isTheFirstNumberFive(number) {
    number = number.toString();
    let firstNumber = number.charAt(0);
    if (number.charAt(0) % 2 == 0) {
        oddOrEven = "Even";
    } else {
        oddOrEven = "Odd";
    }
};

if (oddOrEven != "") {
    console.log("Mr Vargas is " + Math.pow(Math.sqrt(Math.random()), 0) * 100 + "% awesome!!!!!!");
}

//cool and awesome!!