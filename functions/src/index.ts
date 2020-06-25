import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const getTransactions = functions.https.onRequest((request, response) => {
  if (request.method != 'POST') {
    response.status(400).send('I am not happy');
    return;
  }
  const body = request.body;
  if (!body.hasOwnProperty('userId') || !body.hasOwnProperty('fromDate') || !body.hasOwnProperty('toDate') ) {
    response.send('false');
  }
  // response.send(request.body.username);
  response.send("true");
});
