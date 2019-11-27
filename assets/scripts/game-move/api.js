'use strict'

const config = require('../config')
const store = require('../store')

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
  console.log('got to gameMove')
  return $.ajax({
    url: config.apiUrl + `/games/${ID}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  gameMove
}


// FROM SCOREBOARD
'use strict'

const config = require('../config')
const store = require('../store')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const updateGame = (index, value) => {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: {
//       'game': {
//         'cell': {
//           'index': index,
//           'value': value
//         },
OVER
//       }
//     }
//   })
// }
//
// const index = () => {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     }
//   })
// }

module.exports = {
  createGame
  // updateGame,
  // index
}
