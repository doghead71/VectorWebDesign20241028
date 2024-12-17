function changeText() {
    var button = document.getElementById("button-change");
    var textTarget = document.getElementById("text-target");

    //validation to change botton and text 
    if (button.innerText === "Change Text") {
        textTarget.innerText = "The text has been changed!";
        button.innerText = "Reset";
    } else {
        textTarget.innerText = "This text will change.";
        button.innerText = "Change Text";
    }
}



