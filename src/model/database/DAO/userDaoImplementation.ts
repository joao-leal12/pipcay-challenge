import { DatabaseDriver } from '../../../view/Adapters/DatabaseDriver';
import { UserInputDTO } from '../../services/userServices/userServiceImplementation';
import { outputUserDto, User, UserDao } from './userDao';

export class UserDaoImplementation implements UserDao { 
  databaseDriver;
  constructor() { 
    this.databaseDriver = new DatabaseDriver();
  }
  async get(email: string): Promise<boolean> {
    return await this.databaseDriver.query(`
            select
             case
                when exists (select 1 from user us where email = $1) then true
                else false 
             end as output
            from 
        `, [email]);

  }


  async createUser(user: UserInputDTO): Promise<{id: number}> {
    return  await this.databaseDriver.query(
      `
                insert into user us 
                (name, cpf, email,password)
                values ($1, $2, $3, $4)
                returning id
            `, 
      [user.name, user.cpf,user.email, user.password]);

  }
  login(email: string, password: string): Promise<outputUserDto> {
    
    return {} as Promise<outputUserDto>;
  }
}