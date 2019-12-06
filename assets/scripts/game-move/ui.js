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

//INDEX/GET ALL GAMES - Success and Failure

const onGetGamesFailure = () => {
  onFailure('ERROR- Failed to Get Games')
}

const getGamesSuccess = data => {
  const games = data.game
  let gameHtml = ''
// double check with instructions on how to label correctly
  games.forEach(game => {
    gameHtml += `
    <h4>${games.id}</h4>
    <h5>${games.cells}</h5>
    <p>${games.over}</p>
    `
    $('#results').html(gameHtml)
  })
}

const onCreateGameSuccess = data => {
  onSuccess('You created a game!')
  store.game = data.game
}

module.exports = {
  onGameMoveSuccess,
  onGameMoveFailure,
  onCreateGameSuccess
}


// FROM SCOREBOARD
// 'use strict'
//
// const store = require('../store')
//
// const onSuccess = message => {
//   $('#create-game')
//     .removeClass('failure')
//     .addClass('success')
//     .text(message)
// }
//
// const onFailure = message => {
//   $('#create-game')
//     .removeClass('success')
//     .addClass('failure')
//     .text(message)
// }
//

//
// const onCreateGameFailure = () => {
//   onFailure('Error-please try again!')
// }
// // const getGamesFailure = error => {
// //   console.error(error)
// // }
// // const getGamesSuccess = response => {
// //   const games = response.games
// //   let gameHtml = ''
// // double check with instructions on how to label correctly
// //   games.forEach(game => {
// //     gameHtml += `
// //     <h4>${games.id}</h4>
// //     <h5>${games.cells}</h5>
// //     <p>${games.over}</p>
// //     `
// //     $('#results').html(gameHtml)
// //   })
// // }
// // const updateGameSuccess = data => {
// //   $('#results').html('<p>You Updated a Game!</p>')
// // }
// // const updateGameFailure = error => {
// //   console.error(error)
// // }

module.exports = {
  // onCreateGameSuccess,
  // onCreateGameFailure
  // getGamesFailure,
  // getGamesSuccess,
  // updateGameSuccess,
  // updateGameFailure,
}
