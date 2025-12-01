// Create a variable named `seasons` that contains Summer, Fall, Winter and Spring
var seasons = ["Summer", "Fall", "Winter", "Spring"];

// Update the second item in the seasons array to be Autumn
seasons[1] = "Autumn";

// Assign the innerHTML of the HTML element with the id result to the second element in the seasons array
var resultElement = document.getElementById("result");
if (resultElement) {
	resultElement.innerHTML = seasons[1];
}

