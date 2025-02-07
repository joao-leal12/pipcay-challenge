
import { PaymentDao } from '../database/paymentDao';


interface Payment { 
    deposit: (value: number, sender: number) => Promise<void>; 

    transfer: (value: number, sender: number) => Promise<void>; 

    getBalance:(sender: number) => Promise<number>;
}


export class PaymentService implements Payment {

  databaseImplementation: PaymentDao;
   
  constructor(databaseImplementation: PaymentDao) { 
    this.databaseImplementation = databaseImplementation;
  }
   

  async deposit(value: number, sender: number) { 
    const log = 1; 
    return this.databaseImplementation.deposit(value,sender);

  }


  async transfer(value: number, recipient: number) { 

    return this.databaseImplementation.send(value, recipient);
  }


  async getBalance(sender: number) { 

    return this.databaseImplementation.getBalance(sender);
  }
    
    
} 