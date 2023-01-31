// quadratic calculator REFINED!!!!




var a = 1; //try 1, 4, and 3 &&&& 1, 5, 6 &&&& 9, -9, 2
var b = 4; 
var c = 3; 

var displayValue = ["", "", ""]; //default, nothing
var lettersDisplay = ["a", "b", "c"]; //default, a, b, c

var xPos = Math.round(((b * -1) + (Math.sqrt(Math.pow(b,2) - (4 * a * c))))/(2 * a));
var xNeg = Math.round(((b * -1) - (Math.sqrt(Math.pow(b,2) - (4 * a * c))))/(2 * a));

if (a < -1 || a > 1) {   
    displayValue[0] = a;
} else if (a == -1) {
    displayValue[0] = "-";
} else if (a == 0) {
    lettersDisplay[0] = "";
} 

if (b < -1) {
    displayValue[1] = b;
} else if (b == -1) {
    displayValue[1] = "-";
} else if (b == 0) {
    lettersDisplay[1] = "";
} else if (b == 1) {
    displayValue[1] = "+";
} else if (b > 1 && a != 0) {
    displayValue[1] = "+" + b; 
} else {
  displayValue[1] = b;
}

if (c < -1) {
    displayValue[2] = c;
} else if (c == -1) {
    displayValue[2] = "-";
} else if (c == 0) {
    lettersDisplay[1] = "";
} else if (c == 1) {
    displayValue[2] = "+";
} else if (c > 1 && b != 0) {
    displayValue[2] = "+" + c;
} else if (c > 1 && b == 0 && c != 0) {
    displayValue[2] = "+" + c;
} else {
  displayValue[2] = c;
}



if (a == 0 && b == 0 && c == 0) {
    console.log("You're trying to mess with me >:( and\n");
    youSuck();
} else if (isFinite(xPos) == true && isFinite(xNeg) == true) {
    displayValueFormula();
    console.log("ok so the xes are uh x = " + xPos + " and " + xNeg);
} else if (xPos == 0 && xNeg == 0) {
    displayValueFormula();
    console.log(" BOZO! and x and the other x are ZEROOO!!! + bozo!!!\n");
    youSuck();
} else {
    displayValueFormula();
    console.log("You typed wrong and get good noob + RATIO!!!\n");
    youSuck();
}

function displayValueFormula() {
    console.log("The original equation is " + displayValue[0] + lettersDisplay[0] + displayValue[1] + lettersDisplay[1] + displayValue[2] + lettersDisplay[2]);
}
function youSuck() {
    for(var i = 0; i < 3; i++) {
        console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n");
        console.log("██╗░░░██╗░█████╗░██╗░░░██╗░░░██████╗██╗░░░██╗░█████╗░██╗░░██╗\n");
        console.log("╚██╗░██╔╝██╔══██╗██║░░░██║░░██╔════╝██║░░░██║██╔══██╗██║░██╔╝\n");
        console.log("░╚████╔╝░██║░░██║██║░░░██║░░╚█████╗░██║░░░██║██║░░╚═╝█████═╝░\n");
        console.log("░░╚██╔╝░░██║░░██║██║░░░██║░░░╚═══██╗██║░░░██║██║░░██╗██╔═██╗░\n");
        console.log("░░░██║░░░╚█████╔╝╚██████╔╝░░██████╔╝╚██████╔╝╚█████╔╝██║░╚██╗\n");
        console.log("░░░╚═╝░░░░╚════╝░░╚═════╝░░░╚═════╝░░╚═════╝░░╚════╝░╚═╝░░╚═╝\n");
        console.log("░░░░░░░░░░░░░░░░░░░░░░█████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n");
        console.log("░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n");
        console.log("░░█▒▒▒▒▒▒█░░░░░░░███▒▒▒▒▒▒▒▒▒▒▒▒▒███\n");
        console.log("░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██\n");
        console.log("░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███\n");
        console.log("░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██\n");
        console.log("░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██\n");
        console.log("░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██\n");
        console.log("░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██\n");
        console.log("██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██\n");
        console.log("█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██\n");
        console.log("██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██\n");
        console.log("░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██\n");
        console.log("░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█\n");
        console.log("░░████████████░░░█████████████████\n");
    }}