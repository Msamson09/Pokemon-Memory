/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// need variables for the 10 pokimon cards
let isFlipped = false;
let onlyTwoAtATime = false
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
    if (onlyTwoAtATime) return;
    if (this === firstCard) return
    
    this.classList.toggle('flip')

    if(!isFlipped) {
        isFlipped = true;
        firstCard = this;
    } else {
        isFlipped = false;
        secondCard = this;

        if (firstCard.dataset.pokemon === secondCard.dataset.pokemon) {
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
        } else {
            onlyTwoAtATime = true

            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
                onlyTwoAtATime = false
            }, 2000)
        }
        
        
    }
    
}
