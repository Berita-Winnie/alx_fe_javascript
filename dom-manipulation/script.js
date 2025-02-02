// Manage an array of quote elements
const quoteArray = [
    { text: "You are exactly where you need to be.", category: "Encouragement" },
    { text: "You are loved and supported.", category: "Encouragement" },
    { text: "The only limit of our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Your happiness is your responsibility", category: "Self-Development" }
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");

    // Pick a random index
    let randomIndex = Math.floor(Math.random() * quoteArray.length);

    // Get a random element from array
    let randomElement = quoteArray[randomIndex];

    // Update the DOM
    quoteDisplay.textContent = randomElement.text;
}

// Function to create the Add Quote Form dynamically
function createAddQuoteForm() {
    // Create form container
    const formContainer = document.createElement("div");

    // Create input field for new quote
    const newQuoteText = document.createElement("input");
    newQuoteText.id = "newQuoteText";
    newQuoteText.type = "text";
    newQuoteText.placeholder = "Enter a new quote";

    // Create input field for quote category
    const newQuoteCategory = document.createElement("input");
    newQuoteCategory.id = "newQuoteCategory";
    newQuoteCategory.type = "text";
    newQuoteCategory.placeholder = "Enter quote category";

    // Create Add Quote button
    const addQuoteButton = document.createElement("button");
    addQuoteButton.textContent = "Add Quote";
    addQuoteButton.id = "addQuoteButton"; // Assign an ID for event listener

    // Append elements to the form container
    formContainer.appendChild(newQuoteText);
    formContainer.appendChild(newQuoteCategory);
    formContainer.appendChild(addQuoteButton);

    // Append form to body
    document.body.appendChild(formContainer);
}

// Function to add a new quote
function addQuote() {
    // Get input values
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    // Error handling
    if (newQuoteText === "" || newQuoteCategory === "") {
        alert("Please fill in both the quote and category!");
        return;
    }

    // Add new quote to the array
    quoteArray.push({ text: newQuoteText, category: newQuoteCategory });

    // Reset input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Run functions when the page loads
window.onload = function () {
    createAddQuoteForm(); // Create the Add Quote Form

    // Create "Show New Quote" button
    const showQuoteButton = document.createElement("button");
    showQuoteButton.textContent = "Show New Quote";
    showQuoteButton.id = "showQuoteButton"; // Assign an ID for event listener
    document.body.appendChild(showQuoteButton);

    // Create a placeholder for displaying quotes
    const quoteDisplay = document.createElement("p");
    quoteDisplay.id = "quoteDisplay";
    document.body.appendChild(quoteDisplay);

    // Display an initial quote
    showRandomQuote();

    // Add event listeners
    document.getElementById("showQuoteButton").addEventListener("click", showRandomQuote);
    document.getElementById("addQuoteButton").addEventListener("click", addQuote);
};