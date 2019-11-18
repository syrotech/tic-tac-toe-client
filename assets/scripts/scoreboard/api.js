'use strict'

const config = require('../config')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET'
  })
}

const show = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'GET'
  })
}

const destroy = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'DELETE'
  })
}

const update = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game.id,
    method: 'PATCH',
    data: formData
  })
}

const create = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
