/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// need variables for the 10 pokimon cards
let isFlipped = false;
let firstCard
let secondCard


/*------------------------ Cached Element References ------------------------*/
// need cached elements for the cards, player name, reset button
let cards = document.querySelectorAll(".card")

/*----------------------------- Event Listeners -----------------------------*/
// need to create clicks for the cards, reset button, and player name
cards.forEach(card => card.addEventListener('click', flipCard))

/*-------------------------------- Functions --------------------------------*/
// initialize the board
    // reset board with all of the cards
    // flip all of the cards over
    // create a new random locations for the cards
    // reset number of player turns

// winning scenarios
    // function to establish winning combinations 
        // needs to be based on the shapes since the order will be random

// render 


// flip
function flipCard() {
    this.classList.toggle('flip')
}