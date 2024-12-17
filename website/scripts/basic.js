function basicOperations() { //function declaration
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    if(number1 === ""){
        number1  = 0;
    }else{
        number1 =parseFloat(number1);
    }
    if(number2 === ""){
        number2  = 0;
    }else{
        number2 = parseFloat(number2);
    }
    var result = number1 + number2; //variable declaration and assignment. variable result stores the sum of 5 and 7. constant and cannot be changed after assignment
    document.getElementById("output-basic").innerText = number1 +"+"+number2+"="+result;
}
