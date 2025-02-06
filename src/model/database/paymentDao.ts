export interface PaymentDao { 
    send(value: number, recipient: number): void

    receive(value: number, sender: number): void

    getBalance(account: number): number

    deposit(accout: number, value: number):  void
}