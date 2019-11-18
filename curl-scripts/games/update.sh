#!/bin/bash

curl --include --request PATCH  "https://tic-tac-toe-wdi.herokuapp.com//games/:id \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }

echo
