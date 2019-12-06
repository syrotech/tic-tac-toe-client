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

const winningGame = function(currentPlayer) {
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
    $('#0').css('color', 'red')
    $('#1').css('color', 'red')
    $('#2').css('color', 'red')
  } else if ((cell3 === currentPlayer) && (cell4 === currentPlayer) && (cell5 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#3').css('color', 'red')
    $('#4').css('color', 'red')
    $('#5').css('color', 'red')
  } else if ((cell6 === currentPlayer) && (cell7 === currentPlayer) && (cell8 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#6').css('color', 'red')
    $('#7').css('color', 'red')
    $('#8').css('color', 'red')
  } else if ((cell0 === currentPlayer) && (cell4 === currentPlayer) && (cell8 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#0').css('color', 'red')
    $('#4').css('color', 'red')
    $('#8').css('color', 'red')
  } else if ((cell2 === currentPlayer) && (cell4 === currentPlayer) && (cell6 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#2').css('color', 'red')
    $('#4').css('color', 'red')
    $('#6').css('color', 'red')
  } else if ((cell0 === currentPlayer) && (cell3 === currentPlayer) && (cell6 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#0').css('color', 'red')
    $('#3').css('color', 'red')
    $('#6').css('color', 'red')
  } else if ((cell1 === currentPlayer) && (cell4 === currentPlayer) && (cell7 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#1').css('color', 'red')
    $('#4').css('color', 'red')
    $('#7').css('color', 'red')
  } else if ((cell2 === currentPlayer) && (cell5 === currentPlayer) && (cell8 === currentPlayer)) {
    console.log('Winner!')
    gameOver = true
    $('#2').css('color', 'red')
    $('#5').css('color', 'red')
    $('#8').css('color', 'red')
  } else {
    console.log('this is a tie or continue?')
  }
}

// this is the let player click on space and add mark variable and functions
let player1 = 'x'
let gameOver = false
let moveCount = 0
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

  if (!(target.text() === 'x') && !(target.text() === 'o') && (gameOver === false)) {
    target.html(player1)
    moveCount++
    winningGame(player1)
    if (gameOver === true) {
      $('#winner-announcement').html('Player <strong>' + player1 + '</strong> won!')
      $('#winner-announcement').css('color', 'red')
    }
    changePlayer()
    if ((gameOver === false) && (moveCount < 9)) {
      $('#winner-announcement').html('Player <strong>' + player1 + '</strong>, your move!')
    } else if (gameOver === false) {
      gameOver = true
      $('#winner-announcement').html('It\'s a tie!')
      $('#winner-announcement').css('color', 'blue')
    }

  } else if (gameOver === false) {
    $('#winner-announcement').html('Player <strong>' + player1 + '</strong>, choose another spot!')
  }
  // api.gameMove(formData)
  //   .then(ui.onGameMoveSuccess)
  //   .catch(ui.onGameMoveFailure)

  //put in your api function just like we did with createGame and onGetGames
  api
    .onUpdateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
  console.log('Game updated button')
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
const onRestart = event => {
  player1 = 'x'
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
  $('#0').css('color', 'black')
  $('#1').css('color', 'black')
  $('#2').css('color', 'black')
  $('#3').css('color', 'black')
  $('#4').css('color', 'black')
  $('#5').css('color', 'black')
  $('#6').css('color', 'black')
  $('#7').css('color', 'black')
  $('#8').css('color', 'black')
  $('#winner-announcement').html('New game! Player <strong>X</strong>, it\'s your turn!')
  $('#winner-announcement').css('color', 'black')
  gameOver = false
  moveCount = 0

  api
    .createGame()
  console.log('new game works! D:')
}

const onGetGames = event => {
  api
    .getAllGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
  console.log('Works')
}

const addHandlers = event => {
  $('.cells').on('click', onGameMove)
  $('#restart-button').on('click', onRestart)
  $('#index').on('click', onGetGames)
}

// Do I add this into the addHandlers to make a callback in it to see if it is functioning?
// {
// console.log('Successfully clicked!')
// }

module.exports = {
  addHandlers
}

// // From SCOREBOARD
//
// 'use strict'
//
// const api = require('./api')
// const ui = require('./ui')
// // const gameMove = require('./game-move/events')
//
// // const onGetGames = () => {
// //   api.index()
// //     .then(ui.getGamesSuccess)
// //     .catch(ui.getGamesFailure)
// // }
//
// // const onUpdateGame = event => {
// //   event.preventDefault()
// //   const form = event.target
// //   const gameData = getFormFields(form)
// //   api.update(gameData)
// //     .then(ui.updateGameSuccess)
// //     .catch(ui.updateGameFailure)
// // }
//
// const onCreateGame = event => {
//   event.preventDefault()
//   console.log('Got to on Create Game')
//   api.createGame()
//     .then(ui.onCreateGameSuccess)
//     .catch(ui.onCreateGameFailure)
// }
//
// const addHandlers = event => {
//   // do i want on the button or form?
//   $('#create-game').on('click', onCreateGame)
//   // double check with Eron
//   // $('#update-game').on('click', onCreateGame) on form
//   // $('#index').on('click', onGetGames)
// }

module.exports = {
  addHandlers
}
