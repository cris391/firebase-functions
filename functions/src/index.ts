import * as functions from 'firebase-functions';
import { Transaction } from './Models/Transaction';
import { TransactionStatus } from './Enums/TransactionStatus';
import { TransactionRequest } from './Models/TransactionRequest';

export const getTransactions = functions.https.onRequest((request, response) => {
  if (request.method != 'POST') {
    response.status(400).send('Method has to be POST');
    return;
  }
  const body = request.body;
  if (!body.hasOwnProperty('userId') || !body.hasOwnProperty('fromDate') || !body.hasOwnProperty('toDate')) {
    response.status(400).send('Body missing property');
  }
  let transactionRequest: TransactionRequest;
  try {
    transactionRequest = new TransactionRequest(body.userId, body.fromDate, body.toDate);
    console.log(transactionRequest);
  } catch (e) {
    response.send(e);
    return;
  }
  let transactionsFound;
  transactionsFound = filterItems(transactions, transactionRequest);
  response.send(transactionsFound);
  return;
});

/////////
// Helpers
/////////
function filterItems(arr: any, query: TransactionRequest) {
  return arr.filter(function (el: any) {
    return el.userId === query.userId && el.createdDate >= query.fromDate && el.createdDate <= query.toDate;
  });
}

const transactions = [
  new Transaction(
    'user_ID_1',
    'My First Transaction Name',
    'My First Transaction Description',
    TransactionStatus.success,
    new Date('2020-06-19T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_2',
    'My Second Transaction Name',
    'My Second Transaction Description',
    TransactionStatus.pending,
    new Date('2020-06-20T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Third Transaction Name',
    'My third Transaction Description',
    TransactionStatus.failed,
    new Date('2020-06-21T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Fourth Transaction Name',
    'My Fourth Transaction Description',
    TransactionStatus.success,
    new Date('2020-06-22T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Fifth Transaction Name',
    'My Fifth Transaction Description',
    TransactionStatus.pending,
    new Date('2020-06-23T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Sixth Transaction Name',
    'My Sixth Transaction Description',
    TransactionStatus.failed,
    new Date('2020-06-24T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Seventh Transaction Name',
    'My Seventh Transaction Description',
    TransactionStatus.success,
    new Date('2020-06-25T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Eight Transaction Name',
    'My Eight Transaction Description',
    TransactionStatus.pending,
    new Date('2020-06-26T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Ninth Transaction Name',
    'My Ninth Transaction Description',
    TransactionStatus.failed,
    new Date('2020-06-27T03:24:00').getTime()
  ),
  new Transaction(
    'user_ID_1',
    'My Tenth Transaction Name',
    'My Tenth Transaction Description',
    TransactionStatus.success,
    new Date('2020-06-28T03:24:00').getTime()
  ),
];
