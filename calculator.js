var expression = ""; //This variable stores what the user has clicked
function press(value) {
    expression = expression + value;
    document.getElementById("screen").innerText = expression;
}; // This function runs when any number or operator is clicked
function calculate() {
    var result = eval(expression);
    document.getElementById("screen").innerText = result;
    expression = String(result);
} // This function runs when equals to is clicked
function clearScreen() {
    expression = "";
    document.getElementById("screen").innerText = "0";
} // This function runs when C is clicked, clearing the screen
function backspace() {
    expression = expression.slice(0,-1);
    if(expression == "") {
        document.getElementById("screen").innerText = "0";
    } else {
        document.getElementById("screen").innerText = expression;
    } // This if statement will display 0 if there is nothing inside, otherwise will show backspaced value
} // This function runs when backspace is clicked to remove the last character