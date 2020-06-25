export class Transaction {

  constructor(userId: string, name: string, description: string, status: string,createdDate: number){
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.status = status;
    this.createdDate = createdDate;
  }
  userId: string = '';
  name: string = '';
  description: string = ''
  status: string = '';
  createdDate: number = 0;
}