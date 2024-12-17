function customFunction() {
    function greet(name) {
        return `Hello, ${name}!`;
    }
    const result = greet("Student");
    document.getElementById("output-function").innerText = result;
}
