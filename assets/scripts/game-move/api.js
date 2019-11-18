'use strict'

const config = require('../config')
// const store = require('../store')

// const gameMove = function (formData) {
//   console.log('inside gameMove...formData is', formData)
//   return $.ajax({
//     url: config.apiUrl + '/game-move',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }

const gameMove = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/game-move',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  gameMove
}
