//trying to communicate with html

function changeColor() {

    /*
    //long way of doing this 
    document.querySelector(".join-btn").style.height = "400px";

    //querySelector picks a css selector, like p or .example or #example
    //the document specifies to be picked from the document
    //style.[css style] changes the style

    document.querySelector(".join-btn").style.backgroundColor = "red";
    // ^^ camelcase instead of dashes for css styles works but also can do
    document.querySelector(".join-btn").style = "background-color: blue;";
    */

    //shorter way

    let joinButton = document.querySelector(".join-btn");
    //querySelectorAll pciks all elements instead of just the first one
    joinButton.style.cssText = "background-color: blue; height: 400px;"; //can change multiple properties within the style call
    //.cssText adds a style to a css sheet
    
    //   .innerHTMl takes anything inside of the html brackets >[text]< 
    joinButton.innerHTML = "kid named tyrone"; //can replace the inner html

};


var textbox = ["tommy"];
document.getElementById("button1").onclick = () => {
    let text = document.getElementById("inp").value;
    textbox.push(`"` + text + `"`);
    console.log(text);
};

document.getElementById("text").innerHTML = textbox;
console.log(textbox);
console.log(4);

// .value is from input/form elements
//innerHTML is for div, span, td, and similar