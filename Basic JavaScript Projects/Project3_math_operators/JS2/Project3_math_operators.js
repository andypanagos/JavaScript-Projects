window.alert("hello");

function multiplication() {
    var simple_Math = 6*8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math2 = 48/6;
    document.getElementById("Math").innerHTML = "48 / 6 =" + simple_Math2;
}

function more_Math() {
    var simple_Math3 = (1+2)*10/2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,"
    + "divided in half and then subtracted by 5 equals " + simple_Math3;
}

function modulus_Operator() {
    var simple_Math4 = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of:" +simple_Math4;
}


function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

window.alert(Math.random() *100);