'use strict'

const config = require('../config')
const store = require('../store')

// const gameMove = function (formData) {
//   // console.log('inside gameMove...formData is', formData)
//   return $.ajax({
//     url: config.apiUrl + '/game-move',
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }
const createGame = () => {
  // console.log('new game is saved woo')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// const gameMove = function (formData) {
//   // console.log('got to gameMove')
//   return $.ajax({
//     url: config.apiUrl + `/games/${ID}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     data: formData
//   })
// }

const getAllGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const onUpdateGame = (index, value) => {
  // console.log('update worked!')
  // console.log('the index is ' + index)
  // console.log('the value is ' + value)
  // console.log(value)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        }
      }
    }
  })
}

module.exports = {
  getAllGames,
  createGame,
  onUpdateGame
}


// FROM SCOREBOARD
// 'use strict'
//
// const config = require('../config')
// const store = require('../store')
//

//

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

// module.exports = {
  // createGame
  // updateGame,
  // index
// }
