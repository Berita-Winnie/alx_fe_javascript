//Manage an array of quote elements..
const quoteArray = [
    {text:  "You are exactly where you need to be.",  category:"Encouragement"},
    {text:  "You are loved and supported.", category:"Encouragement"},
    {text:  "The only limit of our realization of tomorrow is our doubts of today.", category:"Inspitation"},
    {text: "Your happiness is your responsibility", category:"selfdevelopment"}
    ];
    
    
    
    
    //Implement a function to display a random quote ..
    const quoteDisplay = document.getElementById("quoteDisplay");
    
    
    const newQuote = document.getElementById("newQuote");
    newQuote.addEventListener('click',
        function displayRandomQuote() {
    
    
        //Pick a random index
        let randomIndex = Math.floor(Math.random() * quoteArray.length);
     
        //get a random element from array
        let randomElement =quoteArray[randomIndex];
    
    
        quoteDisplay.textContent = randomElement.text;
    })
    
    
    //Add Quote Function for user;
    
    
    function addQuote () {
    
    
        //getting the values from the input fields
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();
    
    
       //Error Handling:
    if ( newQuoteText === "" || newQuoteCategory ===""){
        alert("Please fill in both the quote and ccategory!")
        return;
    }
    
    
    //Adding the new Quote to the array;
    quoteArray.push({ text: newQuoteText, category: newQuoteCategory});
    
    
    //Resetting the input Fields
    document.getElementById("newQuoteText").value ="";
    document.getElementById("newQuoteCategory").value ="";
    }
    
    
    
    
    
    