'use strict'

const getGamesFailure = error => {
  console.error(error)
}

const getGamesSuccess = response => {
  const games = response.games
  let gameHtml = ''

  // double check with instructions on how to label correctly
  games.forEach(game => {
    gameHtml += `
    <h4>${game.title}</h4>
    <h5>${game.author}</h5>
    <p>${game.id}</p>
    `
    $('#results').html(gameHtml)
  })
}

const getGameSuccess = data => {
  const game = data.game
  const gameHtml = `
    <h4>${game.title}</h4>
    <h5>${game.author}</h5>
    <p>${game.id}</p>
  `
  $('#results').html(gameHtml)
}

const getGameFailure = error => {
  console.error(error)
}

const destroyGameSuccess = data => {
  $('#results').html('<p>You Deleted a Game!</p>')
}

const destroyGameFailure = error => {
  console.error(error)
}

const updateGameSuccess = data => {
  $('#results').html('<p>You Updated a Game!</p>')
}

const updateGameFailure = error => {
  console.error(error)
}

const createGameSuccess = data => {
  $('#results').html('<p>You Created a Game!</p>')
}

const createGameFailure = error => {
  console.error(error)
}

module.exports = {
  getGamesFailure,
  getGamesSuccess,
  getGameFailure,
  getGameSuccess,
  destroyGameSuccess,
  destroyGameFailure,
  updateGameSuccess,
  updateGameFailure,
  createGameSuccess,
  createGameFailure
}
