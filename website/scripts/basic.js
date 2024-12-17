function basicOperations() { //function declaration
    var number1 = parseFloat(document.getElementById("num1").value);
    var number2 = parseFloat(document.getElementById("num2").value);
    var result = number1 + number2; //variable declaration and assignment. variable result stores the sum of 5 and 7. constant and cannot be changed after assignment
    document.getElementById("output-basic").innerText = number1 +"+"+number2+"="+result;
}
