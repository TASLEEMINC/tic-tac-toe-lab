/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    // and so on    
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]  
  
/*---------------------------- Variables (state) ----------------------------*/
// let board = ['', '', '', '', '', '', '', '', ''];
let board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

let turn = 'X'; // player X
let winner = false; //the game is still in progress
let tie = false; //the game is still in progress


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr'); // stored in Array
// console.log(squareEls)
const messageEl = document.querySelector('#message')
// console.dir(messageEl.innerText)



/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log('tempMessage');
}

function render(statusMsg) {
    messageEl.innerText = statusMsg
    updateBoard()
    updateMessage()
}

function updateBoard () {
    // squareEls.forEach( (squareEl) => squareEl = board ) <--wrong
    for (let i=0; i<board.length; i++) {
        squareEls[i].innerText = board[i]
    }
}
updateBoard() // it can be commented out

function updateMessage() {
    if (winner === false && tie === false) {
        render('X goes first!');
    } else if (winner === false && tie === true) {
        render('Tie! No winner!')
    } else {
        render('Congratulations! You[the player] won!')
    }
}

/*----------------------------- Event Listeners -----------------------------*/

function handleClick (event) {
    // console.dir(event.target.id)
    const squareIndex = event.target.id
    // if(event.target.innerText === 'X' || event.target.innerText === 'O') { }
}
squareEls.forEach( (squareEl) => squareEl.addEventListener('click', handleClick ))


















//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.