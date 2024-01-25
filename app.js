function checkResult() {
    // Get the input value
    var marks = document.getElementById('marks').value;

    // Check if the input is a valid number
    if (isNaN(marks) || marks === "") {
        alert("Please enter a valid marks.");
        return;
    }

    // Convert the input to a number
    marks = parseFloat(marks);

    // Check if the marks are above or below the passing threshold
    var result = (marks >= 50) ? "Pass" : "Fail";

    // Display the result
    document.getElementById('result').innerHTML = "Result: " + result;
}