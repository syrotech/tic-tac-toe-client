#!/bin/bash

curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{}'

echo
