/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// need variables for the 10 pokimon cards
let isFlipped = false;
let onlyTwoAtATime = false
let winCounter = 0
let firstCard
let secondCard
let levelUp = new Audio('/Sounds/levelUp.mp3')
let themeSong = new Audio('/Sounds/themeSong.mp3')
let wrong = new Audio('/Sounds/fail.mp3')

levelUp.volume = 0.5
themeSong.volume = 0.5
wrong.volume = 0.5


/*------------------------ Cached Element References ------------------------*/
// need cached elements for the cards, player name, reset button
let cards = document.querySelectorAll(".card")

/*----------------------------- Event Listeners -----------------------------*/
// need to create clicks for the cards, reset button, and player name
cards.forEach(card => card.addEventListener('click', flipCard))

document.getElementById('reset').addEventListener('click', reset)

document.getElementById('mute').addEventListener('click', function() {
    if (levelUp.volume == 0.5){
        levelUp.volume = 0

    } else {
        levelUp.volume = 0.5
    }
    if (themeSong.volume == 0.5) {
        themeSong.volume = 0
    } else {
        themeSong.volume = 0.5
    }
    if (wrong.volume == 0.5) {
        wrong.volume = 0
    } else {
        wrong.volume = 0.5
    }
})


/*-------------------------------- Functions --------------------------------*/
// initialize the board
    // reset board with all of the cards
    // flip all of the cards over
    // create a new random locations for the cards
    // reset number of player turns


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
            winCounter++
            levelUp.play()
            if (winCounter === 10) {
                youWon()
            }
        } else {
            onlyTwoAtATime = true
            setTimeout(() => {
                wrong.play()
            }, 300)
            setTimeout(() => {
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
                onlyTwoAtATime = false
            }, 1500)
        }
        
        
    }
    
}

function youWon() {
    document.getElementById('message-display').innerHTML = `CONGRATULATIONS ON WINNING THE GAME`
    themeSong.play()
}

(function randomize () {
    cards.forEach(card => {
        let shuffle = Math.floor(Math.random() * 20)
        card.style.order = shuffle
    })
})();

//needs work
function reset() {
    onlyTwoAtATime = false
    isFlipped = false
    firstCard = null
    secondCard = null
    
}
