
import { PaymentDaoMemoryImplementation } from '../../model/database/memory/paymentDaoImplementation';
import { PaymentService } from '../../model/services/payment-service';


describe('Payment service', () => { 

    
  const paymentDaoImplementationMemory = new PaymentDaoMemoryImplementation();

  const paymentService = new PaymentService(paymentDaoImplementationMemory);

  const user = { 
    id: 1,
    name: 'João Victor Leal Santos Cardoso', 
    Cpf: '123.456.789-000',
    valueToTransfer: 100 
  };
  beforeAll(async () => { 
    
    await paymentService.deposit(900,user.id);
  });

    
  it('Should make a transfer to other user', async () => { 

    await paymentService.transfer(user.valueToTransfer,user.id);

    expect(await paymentService.getBalance(user.id)).toBe(1000);
  
  });
});