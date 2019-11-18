'use strict'

const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onGameMove = event => {
  event.preventDefault()
  console.log('onGameMove ran!')
  const formData = getFormFields(event.target)
  console.log('formData is', formData)
  api.gameMove(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

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
