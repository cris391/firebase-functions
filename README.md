curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"xyz","password":"xyz"}' \
  http://localhost:3000/api/login


curl --header "Content-Type: application/json" \
--request POST \
--data '{"username":"xyz","password":"xyz"}' \
https://us-central1-fir-fun-6fe6e.cloudfunctions.net/getTransactions