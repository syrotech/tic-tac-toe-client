'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onGetGames = () => {
  api.index()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onGetGame = event => {
  event.preventDefault()
  const form = event.target
  const gameData = getFormFields(form)
  api.show(gameData)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

// want to make it all games at some point?
const onDeleteGame = event => {
  event.preventDefault()
  const form = event.target
  const gameData = getFormFields(form)
  api.destroy(gameData)
    .then(ui.destroyGameSuccess)
    .catch(ui.destroyGameFailure)
}

const onUpdateGame = event => {
  event.preventDefault()
  const form = event.target
  const gameData = getFormFields(form)
  api.update(gameData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const gameData = getFormFields(form)
  console.log(gameData)
  api.create(gameData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onGetGames,
  onGetGame,
  onDeleteGame,
  onUpdateGame,
  onCreateGame
}
