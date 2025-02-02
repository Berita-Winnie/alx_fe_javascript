// Manage an array of quote elements
let quoteArray = JSON.parse(localStorage.getItem("quoteArray")) || [
    { text: "You are exactly where you need to be.", category: "Encouragement" },
    { text: "You are loved and supported.", category: "Encouragement" },
    { text: "The only limit of our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Your happiness is your responsibility", category: "Self-Development" }
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById("quoteDisplay");

    if (quoteArray.length === 0) {
        quoteDisplay.innerHTML = "No quotes available!";
        return;
    }

    // Pick a random index
    let randomIndex = Math.floor(Math.random() * quoteArray.length);

    // Get a random element from array
    let randomElement = quoteArray[randomIndex];

    // Update the DOM
    quoteDisplay.innerHTML = randomElement.text;

    // Store the last viewed quote in session storage
    sessionStorage.setItem("lastQuote", randomElement.text);
}

// Function to create the Add Quote Form dynamically
function createAddQuoteForm() {
    const formContainer = document.createElement("div");

    const newQuoteText = document.createElement("input");
    newQuoteText.id = "newQuoteText";
    newQuoteText.type = "text";
    newQuoteText.placeholder = "Enter a new quote";

    const newQuoteCategory = document.createElement("input");
    newQuoteCategory.id = "newQuoteCategory";
    newQuoteCategory.type = "text";
    newQuoteCategory.placeholder = "Enter quote category";

    const addQuoteButton = document.createElement("button");
    addQuoteButton.textContent = "Add Quote";

    // Append elements
    formContainer.appendChild(newQuoteText);
    formContainer.appendChild(newQuoteCategory);
    formContainer.appendChild(addQuoteButton);
    document.body.appendChild(formContainer);

    // Add event listener to add quotes
    addQuoteButton.addEventListener("click", addQuote);
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    if (newQuoteText === "" || newQuoteCategory === "") {
        alert("Please fill in both the quote and category!");
        return;
    }

    // Add new quote
    quoteArray.push({ text: newQuoteText, category: newQuoteCategory });

    // Save to Local Storage
    saveQuotes();

    // Reset input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Function to save quotes to local storage
function saveQuotes() {
    localStorage.setItem("quoteArray", JSON.stringify(quoteArray));
}

// Function to export quotes as JSON
function exportToJsonFile() {
    const dataStr = JSON.stringify(quoteArray, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "quotes.json";
    downloadLink.click();

    URL.revokeObjectURL(url);
}

// Function to import JSON quotes
function importFromJsonFile(event) {
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            if (!Array.isArray(importedQuotes)) {
                alert("Invalid JSON format. Please upload a valid quotes file.");
                return;
            }

            quoteArray.push(...importedQuotes);
            saveQuotes();
            alert("Quotes imported successfully!");
        } catch (error) {
            alert("Error parsing JSON file.");
        }
    };

    fileReader.readAsText(event.target.files[0]);
}

// Initialize application
window.onload = function () {
    createAddQuoteForm();
    showRandomQuote();

    // Show last viewed quote from session storage
    const lastQuote = sessionStorage.getItem("lastQuote");
    if (lastQuote) {
        document.getElementById("quoteDisplay").innerHTML = lastQuote;
    }

    // Create Show New Quote button
    const showQuoteButton = document.createElement("button");
    showQuoteButton.textContent = "Show New Quote";
    showQuoteButton.id = "showQuoteButton";
    document.body.appendChild(showQuoteButton);

    // Create Export JSON button
    const exportButton = document.createElement("button");
    exportButton.textContent = "Export Quotes";
    exportButton.addEventListener("click", exportToJsonFile);
    document.body.appendChild(exportButton);

    // Create Import JSON input
    const importInput = document.createElement("input");
    importInput.type = "file";
    importInput.id = "importFile";
    importInput.accept = ".json";
    importInput.addEventListener("change", importFromJsonFile);
    document.body.appendChild(importInput);

    // Create a placeholder for displaying quotes
    const quoteDisplay = document.createElement("p");
    quoteDisplay.id = "quoteDisplay";
    document.body.appendChild(quoteDisplay);

    // Add event listeners
    document.getElementById("showQuoteButton").addEventListener("click", showRandomQuote);
};
