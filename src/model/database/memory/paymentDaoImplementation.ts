import { PaymentDao } from '../paymentDao';


export class PaymentDaoMemoryImplementation implements PaymentDao {

  wallet: Array<{accountId: number, value: number}> = []; 

  constructor() { 
    this.wallet = [{accountId: 1, value: 0}];
  }

  deposit(value: number, accountId: number): void {
    const account = this.wallet.find(x => x.accountId === accountId);

    if (!account) { 
      throw new Error('Account not found');
    }

    this.wallet =   this.wallet.map(account => { 
      if (account.accountId === accountId) { 
        return {accountId: account.accountId, value: account.value + value};
      }

      return account; 
    });

    console.log({wallet: this.wallet});
  }

  send(value: number, recipient: number): void {
    const hasAccount = this.wallet.find(x => x.accountId === recipient);

    if (!hasAccount) {
      throw new Error('Account not found');
    }
       

    const mutationAcount = [{ accountId: hasAccount.accountId, value: hasAccount.value + value }];
      

    this.wallet = this.wallet.map(account => {
      if (account.accountId === recipient) {
        return mutationAcount[0];
      }
      return account;
    });

  }

  receive(value: number, recipient: number): void {
    const hasAccount = this.wallet.find(x => x.accountId === recipient);

    if (!hasAccount) {
      throw new Error('Account not found');
    }

    const mutationAcount = [{ accountId: hasAccount.accountId, value: hasAccount.value + value }];

    this.wallet = this.wallet.map(account => {
      if (account.accountId === recipient) {
        return mutationAcount[0];
      }
      return account;
    });
  }

  getBalance(account: number): number {
    // implementation
    const hasAccount = this.wallet.find(x => x.accountId === account);

    if (!hasAccount) { 
      throw new Error('Account not found');
    }

    console.log('Entrei até aqui');

    return hasAccount.value || 0;
  }

}