/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let isFlipped = false;
let onlyTwoAtATime = false
let winCounter = 0
let firstCard
let secondCard
let levelUp = new Audio('/Sounds/levelUp.mp3')
let themeSong = new Audio('/Sounds/themeSong.mp3')
let wrong = new Audio('/Sounds/fail.mp3')

levelUp.volume = 0.25
themeSong.volume = 0.25
wrong.volume = 0.25


/*------------------------ Cached Element References ------------------------*/
let mute = document.getElementById('mute')
let cards = document.querySelectorAll(".card")

/*----------------------------- Event Listeners -----------------------------*/
cards.forEach(card => card.addEventListener('click', flipCard))

document.getElementById('reset').addEventListener('click', reset)

document.getElementById('mute').addEventListener('click', function() {
    if (levelUp.volume == 0.25){
        levelUp.volume = 0
        mute.style.backgroundColor = 'red'
    } else {
        levelUp.volume = 0.25
        mute.style.backgroundColor = 'white'
    }
    if (themeSong.volume == 0.25) {
        themeSong.volume = 0
        mute.style.backgroundColor = 'red'
    } else {
        themeSong.volume = 0.25
        mute.style.backgroundColor = 'white'
    }
    if (wrong.volume == 0.25) {
        wrong.volume = 0
        mute.style.backgroundColor = 'red'
    } else {
        wrong.volume = 0.25
        mute.style.backgroundColor = 'whilte'
    }
})


/*-------------------------------- Functions --------------------------------*/


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
    document.getElementById('message-display').innerHTML = `YOU HAVE CAUGHT THEM ALL!!!`
    themeSong.play()
}

(function randomize () {
    cards.forEach(card => {
        let shuffle = Math.floor(Math.random() * 20)
        card.style.order = shuffle
    })
})();

function reset() {
    onlyTwoAtATime = false
    isFlipped = false
    firstCard = null
    secondCard = null
    cards.forEach(card => card.classList.remove('flip'))
}
