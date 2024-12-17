function displayArray() {
    const numbers = [1, 2, 3, 4, 5];
    let output = "Numbers in the array: ";
    for (let i = 0; i < numbers.length; i++) {
        output += numbers[i] + " ";
    }
    document.getElementById("output-array").innerText = output;
}
