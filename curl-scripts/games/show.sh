#!/bin/bash


curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games/:id" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "id": 1,
      "cells": ["o","x","o","x","o","x","o","x","o"],
      "over": true,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": null
    }
  }'

echo
