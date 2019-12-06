'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const theGame = require('./game-move/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  theGame.addHandlers()
})

// NOTE: The "manifest" or entry-point is assets/scripts/app.js. In general, only
// application initialization goes in this file. It's normal for developers to
// start putting all code in this file, but encourage them to break out different
// responsibilities and use the require syntax put references where they're needed.
