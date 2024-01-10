function getRandomNumber(min, max) {
    let out = Math.random() * (max - min) + min
    return out;
  }

let balance =  (getRandomNumber(50, 10000));
let mondaySpending = getRandomNumber(0, 500);
let tuesdaySpending = getRandomNumber(0, 500);
let wednesdaySpending = getRandomNumber(0, 500);
let thursdaySpending = getRandomNumber(0, 500);
let fridaySpending = getRandomNumber(0, 500);
let saturdaySpending = getRandomNumber(0, 500);
let sundaySpending = getRandomNumber(0, 500);

let totalSpendings = mondaySpending + tuesdaySpending + wednesdaySpending + thursdaySpending
 + fridaySpending + saturdaySpending + sundaySpending;



lastMonthSpending = (getRandomNumber(-10, 10)).toFixed(2);

let highestNumber = mondaySpending;
if(tuesdaySpending > highestNumber) {highestNumber = tuesdaySpending;}
if(wednesdaySpending > highestNumber) {highestNumber = wednesdaySpending;}
if(thursdaySpending > highestNumber) {highestNumber = thursdaySpending;}
if(fridaySpending > highestNumber) {highestNumber = fridaySpending;}
if(saturdaySpending > highestNumber) {highestNumber = saturdaySpending;}
if(sundaySpending > highestNumber) {highestNumber = sundaySpending;}


let spendingGoal = highestNumber;
console.log(spendingGoal)
document.getElementById("balance").innerHTML = "$" + balance.toFixed(2);
document.getElementById("spendings").innerHTML = "$" + totalSpendings.toFixed(2)    ;
let lastMonth = document.getElementById("spendingLastMonth")
let prefix = "";
if(lastMonthSpending > 0) {
    prefix = "+";
    lastMonth.classList.add("red");
} else {
    lastMonth.classList.add("green");
}
lastMonth.innerHTML = prefix + lastMonthSpending + "%";
let maxHeight;
if(window.innerWidth > 1280) {
    maxHeight = 160
} else {
    maxHeight = 120;
}

function getBarHeight(moneyValue) {
    let perc = moneyValue / spendingGoal;
    if(perc > 1) {perc = 1;}
    else if(perc < .05) {
        perc = .1;
    }
    return maxHeight * perc;
}

function setColor(element, value) {
    let perc = value / spendingGoal;
    if(perc > 1) {perc = 1;}
    let minRed, minGreen, minBlue;
    let maxRed, maxGreen, maxYellow;
    if(perc <= .5) {
        //Green
        minRed = 74;
        minGreen = 222;
        minBlue = 128;

        maxRed = 245;
        maxGreen = 158;
        maxBlue = 11;
    } else {
        minRed = 245;
        minGreen = 158;
        minBlue = 11;

        maxRed = 248;
        maxGreen = 113;
        maxBlue = 113;
    }

    let redValue = minRed + ((maxRed - minRed) * perc);
    let greenValue = minGreen + ((maxGreen - minGreen) * perc);
    let blueValue = minBlue + ((maxBlue - minBlue) * perc);
    // console.log(element + ": " + "rgb(" + redValue + "," + greenValue + "," + blueValue + ")")
    document.getElementById(element).style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}

setTimeout(()=> {
    document.getElementById("main").classList.toggle("hidden-none")
}, 500)


function setHover(barElement) {
    let hoveredElemet = document.getElementById(barElement);
    let moneyElement = "money-" + barElement
    hoveredElemet.addEventListener("mouseover", ()=> {
        document.getElementById(moneyElement).classList.remove("hidden-none");
    }, false);
    hoveredElemet.addEventListener("mouseleave", ()=> {
        document.getElementById(moneyElement).classList.add("hidden-none");
    }, false);
}

setTimeout(()=> {
    document.getElementById("mon").style.height = getBarHeight(mondaySpending) + "px";
setColor("mon", mondaySpending)
document.getElementById("tue").style.height = getBarHeight(tuesdaySpending) + "px";
setColor("tue", tuesdaySpending)
document.getElementById("wed").style.height = getBarHeight(wednesdaySpending) + "px";
setColor("wed", wednesdaySpending)
document.getElementById("thu").style.height = getBarHeight(thursdaySpending) + "px";
setColor("thu", thursdaySpending)
document.getElementById("fri").style.height = getBarHeight(fridaySpending) + "px";
setColor("fri", fridaySpending)
document.getElementById("sat").style.height = getBarHeight(saturdaySpending) + "px";
setColor("sat", saturdaySpending)
document.getElementById("sun").style.height = getBarHeight(sundaySpending) + "px";
setColor("sun", sundaySpending)
}, 1000)

setTimeout(()=> {
    document.getElementById("bottom-half").classList.toggle("hidden-none")
}, 1000)

setTimeout(()=> {
    setHover("mon");
    document.getElementById("money-mon").innerHTML = "<b>$" + mondaySpending.toFixed(2) + "</b>"
    setHover("tue");
    document.getElementById("money-tue").innerHTML = "<b>$" + tuesdaySpending.toFixed(2) + "</b>"
    setHover("wed");
    document.getElementById("money-wed").innerHTML = "<b>$" + wednesdaySpending.toFixed(2) + "</b>"
    setHover("thu");
    document.getElementById("money-thu").innerHTML = "<b>$" + thursdaySpending.toFixed(2) + "</b>"
    setHover("fri");
    document.getElementById("money-fri").innerHTML = "<b>$" + fridaySpending.toFixed(2) + "</b>"
    setHover("sat");
    document.getElementById("money-sat").innerHTML = "<b>$" + saturdaySpending.toFixed(2) + "</b>"
    setHover("sun");
    document.getElementById("money-sun").innerHTML = "<b>$" + sundaySpending.toFixed(2) + "</b>"
}, 2000)



