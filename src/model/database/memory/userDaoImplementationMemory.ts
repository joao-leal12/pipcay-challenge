import { UserInputDTO } from '../../services/userServices/userServiceImplementation';
import { outputUserDto, User, UserDao } from '../DAO/userDao';

export class UserDaoImplementationMemory implements UserDao {
    
  defaultUser: User[] = [{
    id: Math.random() * 10,
    password: '123456',
    name: 'Emanuel Cardoso',
    cpf: '033089098098',
    email: 'emanual@gmail.com'
  }];

  async createUser(user: UserInputDTO): Promise<{id: number}> {
        
        
    return  new Promise((resolve, reject) => {  
            
      if (this.defaultUser.find((dUser) => dUser.email === user.email)) {
        reject(new Error('Usuário já cadastrado'));
      }
            

      const newUser = {...user, id: Math.random() * 10};

      this.defaultUser.push(newUser);
      resolve({id: newUser.id});
    });
    
    
  }
  login: (email: string, password: string) => Promise<outputUserDto>; 

  get(email: string): Promise<boolean> {
    return new Promise((resolve, reject) =>  {
        
      if (this.defaultUser.find(x => x.email === email)) { 
        resolve(true);
      }

      resolve(false);
    });
  }
    
    
}