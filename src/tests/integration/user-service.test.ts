
import { UserDaoImplementationMemory } from '../../model/database/memory/userDaoImplementationMemory';
import { UserServiceImplementation } from '../../model/services/userServices/userServiceImplementation';


describe('userService', () => { 

  const createUserParams = { 
    id: 1, 
    name: 'João Victor Leal Santos Cardoso', 
    cpf: '12345678900',
    email: 'joaovictorbonaparte@outroemail.com', 
    password: '12345@',
  };
    
    
  it('Should create new user', async () => { 

    const userDaoImplementationMemory = new UserDaoImplementationMemory();

    const user = new UserServiceImplementation(userDaoImplementationMemory);
        
    const output = await user.createUser({cpf: createUserParams.cpf, email: createUserParams.email, name: createUserParams.name, password: createUserParams.password});

    expect(output).toBe('Usuário criado com sucesso');
  });

  it('should give an error when trying to create', async () => { 

    const checkEmail = { 
      password: '123456',
      name: 'Emanuel Cardoso',
      cpf: '033089098098',
      email: 'emanual@gmail.com'
    };

    const userDaoImplementationMemory = new UserDaoImplementationMemory();

    const user = new UserServiceImplementation(userDaoImplementationMemory);
        
    
    const output =  user.createUser({cpf: checkEmail.cpf, email: checkEmail.email, name: checkEmail.name, password: checkEmail.password});

    await expect(output).rejects.toThrow(new Error('Usuário já cadastrado'));
  });
});