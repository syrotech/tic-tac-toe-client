'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

let player1 = 'x'
let player2 = 'o'

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

const onGameMove = event => {
  event.preventDefault()
  console.log('onGameMove ran!')

  // const formData = getFormFields(event.target)
  // console.log('formData is', formData)
  // if the user clicks on a valid space, then add their X or O
  $(event.target).html(player1)
  console.log(changePlayer())
}

// do not allow users to add an X or O to an invalid space

// api.gameMove(formData)
//   .then(ui.onGameMoveSuccess)
//   .catch(ui.onGameMoveFailure)


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
