import { TransactionStatus } from "../Enums/TransactionStatus";

export class Transaction {

  constructor(userId: string, name: string, description: string, status: TransactionStatus, createdDate: number){
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.status = status;
    this.createdDate = createdDate;
  }
  userId: string = '';
  name: string = '';
  description: string = ''
  status: TransactionStatus;
  createdDate: number = 0;
}