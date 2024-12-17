function handleMouseOver() {
    document.getElementById("output-event").innerText = "Mouse is over the box!";
    document.getElementById("output-event").style.color = "green";
}

function handleMouseOut() {
    document.getElementById("output-event").innerText = "Mouse has left the box!";
    document.getElementById("output-event").style.color = "red";
}
