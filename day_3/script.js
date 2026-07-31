// Function to calculate simple interest
function calculateInterest() {
    // Get the input values
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    // Calculate the interest
    var interest = (principal * rate * time) / 100;

    // Display the result
    document.getElementById("result").textContent = interest.toFixed(2);
}
