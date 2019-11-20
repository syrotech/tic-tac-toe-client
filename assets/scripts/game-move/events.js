'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
//
// // this is the game BOARD array
const board = ['', '', '', '', '', '', '', '', '']

// these are the winning combinations
// const winningCombos =
// //rows
//   0, 1, 2
//   3, 4, 5
//   6, 7, 8
// //diagonals
//   0, 4, 8
//   2, 4, 6
// //columns
//   0, 3, 6
//   1, 4, 7
//   2, 5, 8
// //board
//   0, 1, 2
//   3, 4, 5,
//   6, 7, 8

// these are the variabele for the board cells
// const cell0 = $('#0').text()
// const cell1 = $('#1').text()
// const cell2 = $('#2').text()
// const cell3 = $('#3').text()
// const cell4 = $('#4').text()
// const cell5 = $('#5').text()
// const cell6 = $('#6').text()
// const cell7 = $('#7').text()
// const cell8 = $('#8').text()

const winningGame = function (currentPlayer) {
  const cell0 = $('#0').text()
  const cell1 = $('#1').text()
  const cell2 = $('#2').text()
  const cell3 = $('#3').text()
  const cell4 = $('#4').text()
  const cell5 = $('#5').text()
  const cell6 = $('#6').text()
  const cell7 = $('#7').text()
  const cell8 = $('#8').text()
  console.log('currentPlayer is', currentPlayer)
  console.log('cell0 is ', cell0)
  console.log('cell1 is ', cell1)
  console.log('cell2 is ', cell2)
  console.log('cell3 is ', cell3)
  console.log('cell4 is ', cell4)
  console.log('cell5 is ', cell5)
  console.log('cell6 is ', cell6)
  console.log('cell7 is ', cell7)
  console.log('cell8 is ', cell8)
  if ((cell0 === currentPlayer) && (cell1 === currentPlayer) && (cell2 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell3 === currentPlayer) && (cell4 === currentPlayer) && (cell5 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell6 === currentPlayer) && (cell7 === currentPlayer) && (cell8 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell0 === currentPlayer) && (cell4 === currentPlayer) && (cell8 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell2 === currentPlayer) && (cell4 === currentPlayer) && (cell6 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell0 === currentPlayer) && (cell3 === currentPlayer) && (cell6 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell1 === currentPlayer) && (cell4 === currentPlayer) && (cell7 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else if ((cell2 === currentPlayer) && (cell5 === currentPlayer) && (cell8 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
  } else {
    console.log('this is a tie or continue?')
  }
}

// this is the let player click on space and add mark variable and functions
let player1 = 'x'
let gameOver = false
// let player2 = 'o'
//

// const currentPlayer = function() {
//   if ($(onGameMove.text) === 'x') {
//     player1 = 'x'
//     console.log('current player is', player1)
//     }
//     else {
//       player1 = 'o'
//       console.log('current player is', player1)
//     } return
//   }

const changePlayer = () => {
  // after player clicks, i want to change changePlayer
  // if player = x, then make o
  // if/else statement
  if (player1 === 'x') {
    player1 = 'o'
  } else {
    player1 = 'x'
  }
  return player1
}

// this is the clicked spot function-- registers the click
const onGameMove = event => {
  event.preventDefault()
  console.log('onGameMove ran!')
  // $(event.target).html(player1)
  // console.log(changePlayer())
  // $('.col-sm').innerHTML += 'A'
  // this is the function that prevents a spot from being clicked if it was already chosen
  const target = $(event.target)
  console.log(target.text() + ' ' + target.is('1'))
  if (!(target.text() === 'x') && !(target.text() === 'o') && (gameOver === false)) {
    target.html(player1)
    winningGame(player1)
    changePlayer()
  }
  // api.gameMove(formData)
  //   .then(ui.onGameMoveSuccess)
  //   .catch(ui.onGameMoveFailure)
}

// const formData = getFormFields(event.target)
// console.log('formData is', formData)
// if the user clicks on a valid space, then add their X or O
// if (!$('.col-sm').html('x') && !$('.col-sm').html('o')) {
// $(event.target).html(player1)
// changePlayer()
// console.log(changePlayer())
// } else if (!$('.col-sm').html('')) {
//  alert('not allowed')

// do not allow users to add an X or O to an invalid space


const addHandlers = event => {
  $('.col-sm').on('click', onGameMove)
}

// Do I add this into the addHandlers to make a callback in it to see if it is functioning?
// {
// console.log('Successfully clicked!')
// }

module.exports = {
  addHandlers
}
