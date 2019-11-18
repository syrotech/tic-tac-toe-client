#!/bin/bash

https://tic-tac-toe-wdi.herokuapp.com/

curl --include --request POST  "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "id": 3,
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": null
    }
  }'

echo
