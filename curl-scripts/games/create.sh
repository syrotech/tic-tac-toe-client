#!/bin/bash

https://tic-tac-toe-wdi.herokuapp.com/

curl --include --request POST  "" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
