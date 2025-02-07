import { UserDao } from '../../database/DAO/userDao';

import { User, UserServices } from './userServices';

import { GeneratePassword } from './utils/generate-password';

export interface UserInputDTO extends Omit<User, 'id'>{}

export class UserServiceImplementation implements UserServices { 
  private userDataBase: UserDao;
    
  constructor(userDataBase: UserDao) { 
        
    this.userDataBase = userDataBase;
  }
    
    
  cryptoPassword(password:string) { 

    return  GeneratePassword.execute(password); 
        

  };


  async login(emai: string, password :string, hashPassword: string) {
        
    if (!GeneratePassword.verify(password, hashPassword)) { 
      return 'E-mail ou senha errada, tente novamente.';
    } 
        

  }


  async findUser(email: string) { 

        
    return await this.userDataBase.get(email); 
  }


  async createUser(user: UserInputDTO) {

    const inputUserDTO: UserInputDTO = { 
      ...user, 
      password: this.cryptoPassword(user.password)
    };

    const findUser = await this.findUser(user.email);

    if (findUser) { 
      throw new Error('Usuário já cadastrado');
    }

    const userCreated = await this.userDataBase.createUser(inputUserDTO);

    if (userCreated.id) { 
      return 'Usuário criado com sucesso';
    }

        
    return 'Ops, ocorreu algum erro ao tentar criar o usuário'; 

  }
}