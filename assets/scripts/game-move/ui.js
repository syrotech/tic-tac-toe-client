'use strict'

const store = require('../store.js')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
}

// onGameMove Success callback
// will have to be a post because later on the game will have to remember spots
const onGameMoveSuccess = response => {
  onSuccess('You successfully clicked a spot!')
  store.user = response.user
  console.log('response', response)
}

// onGameMove Failure callback
const onGameMoveFailure = () => {
  onFailure('Please try again!')
}

module.exports = {
  onGameMoveSuccess,
  onGameMoveFailure
}
