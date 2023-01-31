function totalClick(click) {
    const sum = document.getElementById("totalClicks");
    const sumvalue = parseInt(sum.innerText) + click;
    console.log(sumvalue);
    totalClicks.innerText = sumvalue;

    //avoid negatives 
    if (sumvalue < 0) {
        totalClicks.innerText = 0;
    }
}