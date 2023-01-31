// quadratic calculator REFINED!!!!


document.querySelectorAll('input[type="number"]').forEach(input => { //fixes the character cap issue
    input.oninput = () =>{
        if(input.value.length > input.maxLength) 
            input.value = input.value.slice(0, input.maxLength);
    };
});


function calculate() {
var a = document.getElementById("number1").value;
var b = document.getElementById("number2").value;
var c = document.getElementById("number3").value;

var displayValue = ["", "", ""]; //default, nothing
var lettersDisplay = ["a", "b", "c"]; //default, a, b, c


var xPos = Math.round(((b * -1) + (Math.sqrt(Math.pow(b,2) - (4 * a * c))))/(2 * a));
var xNeg = Math.round(((b * -1) - (Math.sqrt(Math.pow(b,2) - (4 * a * c))))/(2 * a));

var answer = document.getElementById("answer");
var gif = document.getElementById("wrong");

var equation = displayValue[0] + lettersDisplay[0] + displayValue[1] + lettersDisplay[1] + displayValue[2] + lettersDisplay[2];
console.log(equation);


var wrong = () => {
    answer.innerHTML = "YOU TYPED WRONGGGGGG!!";
    answer.style.color = "red";
    gif.style = "opacity: 1;";
};

if (a == 0 && b == 0 && c == 0) {
    wrong();
    answer.innerHTML = "STOP MESSING WITH ME YOU TROLLS!!";
} else if (isFinite(xPos) == true && isFinite(xNeg) == true) {
    answer.innerHTML = "X= " + xPos + "and X= " + xNeg;
    gif.style = "opacity: 0;";
    answer.style = "margin-bottom: -18%;";
} else if (xPos == 0 && xNeg == 0) {
    wrong();
} else {
    wrong();
}
};
