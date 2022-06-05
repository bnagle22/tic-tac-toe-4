/*-------------------------------- Constants --------------------------------*/

winCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
              [0, 3, 6], [1, 4, 7], [2, 5, 8],
              [0, 4, 8], [2, 4, 6] ]

/*---------------------------- Variables (state) ----------------------------*/

let board = []
let turn = null
let winner = null

/*------------------------ Cached Element References ------------------------*/

const sq0 = document.getElementById("0")
const sq1 = document.getElementById("1")
const sq2 = document.getElementById("2")
const sq3 = document.getElementById("3")
const sq4 = document.getElementById("4")
const sq5 = document.getElementById("5")
const sq6 = document.getElementById("6")
const sq7 = document.getElementById("7")
const sq8 = document.getElementById("8")
const sq9 = document.getElementById("9")
const sq10 = document.getElementById("10")
const sq11 = document.getElementById("11")
const sq12 = document.getElementById("12")
const sq13 = document.getElementById("13")
const sq14 = document.getElementById("14")
const sq15 = document.getElementById("15")
const squares = [sq0, sq1, sq2, sq3,
                  sq4, sq5, sq6, sq7,
                  sq8, sq9, sq10, sq11,
                  sq12, sq13, sq14, sq15]
const gameStatus = winner
const renderMsg = document.querySelector("#render-msg")
const reset = document.getElementById("reset")


/*----------------------------- Event Listeners -----------------------------*/

squares.forEach(function(i){
  i.addEventListener('click', handleClick)
})
reset.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

function init(){
  board = [null, null, null, null, 
          null, null, null, null,
          null, null, null, null,
          null, null, null, null]
  turn = 1
  winner = null
  render()
  squares.forEach(function(i){
    i.innerText = ''
  })
}

function render(){
  if(winner === null){
    if(turn === 1){
      renderMsg.innerText = "Player 1's turn (X)"
    }
    if(turn === -1){
      renderMsg.innerText = "Player 2's turn (O)"
    }
}
}
function handleClick(event){
  if(winner === null && event.target.innerText === ''){
    if(turn === 1){
      event.target.style.color = 'black'
      event.target.innerText = 'X'
      board[event.target.id] = 1
      turn = -1
      render()
      checkWinX()
      checkTie()
    } else {
      event.target.style.color = 'white'
      event.target.innerText = 'O'
      board[event.target.id] = -1
      turn = 1
      render()
      checkWinO()
      checkTie()
    }
  }
}

// more efficient way to check win- needs to include win for Player 2
// function checkWin(){
//   for(let i = 0; i < winCombos.length; i ++){
//     if(Math.abs(board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]] == 3)){
//       winner = 1
//       renderMsg.innerText = "Player 1 (X) wins!"
//     }
//   }
// }

function checkWinX(){
    if((board[0] === 1 && board[1] === 1 && board[2] === 1)
    || (board[3] === 1 && board[4] === 1 && board[5] === 1)
    || (board[6] === 1 && board[7] === 1 && board[8] === 1)
    || (board[0] === 1 && board[3] === 1 && board[6] === 1)
    || (board[1] === 1 && board[4] === 1 && board[7] === 1)
    || (board[2] === 1 && board[5] === 1 && board[8] === 1)
    || (board[0] === 1 && board[4] === 1 && board[8] === 1)
    || (board[2] === 1 && board[4] === 1 && board[6] === 1)
    ){
      winner = 1
      renderMsg.innerText = "Player 1 (X) wins!"
    }
  }

function checkWinO(){
  if((board[0] === -1 && board[1] === -1 && board[2] === -1)
  || (board[3] === -1 && board[4] === -1 && board[5] === -1)
  || (board[6] === -1 && board[7] === -1 && board[8] === -1)
  || (board[0] === -1 && board[3] === -1 && board[6] === -1)
  || (board[1] === -1 && board[4] === -1 && board[7] === -1)
  || (board[2] === -1 && board[5] === -1 && board[8] === -1)
  || (board[0] === -1 && board[4] === -1 && board[8] === -1)
  || (board[2] === -1 && board[4] === -1 && board[6] === -1)
  ){
    winner = -1
    renderMsg.innerText = "Player 2 (O) wins!"
  }
}

function checkTie(){
  if (winner === null && board.every(function(i){
    return i !== null
  })){
    winner = 0
    renderMsg.innerText = "The game is a tie."
  }
}


init()

