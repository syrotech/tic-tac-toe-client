#!/bin/bash

https://tic-tac-toe-wdi.herokuapp.com/

curl --include --request PATCH  "https://sei-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
