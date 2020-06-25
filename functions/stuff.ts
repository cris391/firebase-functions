import { Transaction } from './src/Models/Transaction'

const transactions = [
  new Transaction(
    'user_ID_1',
    'My First Transaction Name',
    'My First Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_2',
    'My Second Transaction Name',
    'My Second Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_3',
    'My Third Transaction Name',
    'My third Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_4',
    'My Fourth Transaction Name',
    'My Fourth Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_5',
    'My Fifth Transaction Name',
    'My Fifth Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_6',
    'My Sixth Transaction Name',
    'My Sixth Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_7',
    'My Seventh Transaction Name',
    'My Seventh Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_8',
    'My Eight Transaction Name',
    'My Eight Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_9',
    'My Ninth Transaction Name',
    'My Ninth Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
  new Transaction(
    'user_ID_10',
    'My Tenth Transaction Name',
    'My Tenth Transaction Description',
    // TransactionStatus.success,
    new Date().getTime()
  ),
];

// transactions.forEach(t =>{
//   console.log(t.name)
// })

function getTransactions(request) {
  const body = request.body;
  if (!body.hasOwnProperty('userId') || !body.hasOwnProperty('fromDate') || !body.hasOwnProperty('toDate')) {
    console.log('false');
    return;
  }
  console.log('true');
}

const filteredTransactionList = transactions.filter(transaction => {
  return transaction.userId === 'user_ID_10'  
})
console.log(filteredTransactionList)


// getTransactions({
//   body: {
//     userId: 1,
//     fromDate: 2,
//     toDate: 3,
//   },
// });
