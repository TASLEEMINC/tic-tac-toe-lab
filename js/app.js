/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')

/*-------------------------------- Functions --------------------------------*/
const init = () => {

    board = ['', '', '', '', '', '', '', '', ''];    
    turn = 'X'; // <-- this will represent player X
    winner = false; //means that there is no winner yet
    tie = false;
    render();
}

function render() {
    updateBoard();
    updateMessage();
};

const updateBoard = () => {
    board.forEach((cell, idx) => {
        if (cell === 'X') {
            squareEls[idx].textContent = 'X';
            squareEls[idx].style.backgroundColor = 'green'
        } else if (cell === 'O') {
          squareEls[idx].textContent = 'O';
          squareEls[idx].style.backgroundColor = 'orange'
        } else {
          squareEls[idx].textContent = '';
          squareEls[idx].style.backgroundColor = 'yellow'
        }
    });
};

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = 'Start the game by clicking on the cell'
    } else if (winner === false && tie === true) {
        messageEl.textContent = 'Tie! No winners!'
    } else {
        messageEl.textContent = 'Congratulations! You won!'
    }
}

const handleClick = (event) => {
    const squareIndex = event.target.id
    // console.log(squareIndex)
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner === true) {                
    return;
    }
    if (event.target.innerText === '') {         
        // console.log('ok')
        board[squareIndex] === 'X'        
        }
        console.log(tie)
    placePiece(squareIndex);
    checkForWinner()
    checkForTie()
    console.log(tie)
    switchPlayerTurn()
    render()
}

squareEls.forEach((cell) => cell.addEventListener('click', handleClick))

const placePiece = (index) => {
    board[index] = turn;
    console.log(board)
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],        
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

const checkForWinner = () => {
    winningCombos.forEach(combo => {
        if (board[combo[0]] !== '' && 
            board[combo[0]] === board[combo[1]] && 
            board[combo[1]] === board[combo[2]]) 

            {
                winner = true
            }
    })
}

const checkForTie = () => {
    if (winner === true) {
        return;
    } else if (board.includes('') === true) {
        tie = false;
    } else tie = true;
}

const switchPlayerTurn = () => {
    console.log(turn, winner)
    if (winner === true) {
        return;
    } else if (winner === false && turn === 'X') {
        turn = 'O'
    } else if (winner === false && turn === 'O') {
        turn = 'X'
    }
}

init()
// /*----------------------------- Event Listeners -----------------------------*/
resetBtnEl.addEventListener('click', init)
  
  const isEmpty = board.some((cell) => {
    cell.value = '';
  });
  console.log(isEmpty)