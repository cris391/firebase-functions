export class TransactionRequest {

  constructor(userId: string, fromDate: number, toDate: number){
    this.userId = userId;
    this.fromDate = fromDate;
    this.toDate = toDate;
  }
  userId: string = '';
  fromDate: number = 0;
  toDate: number = 0;
}