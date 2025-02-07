import { UserInputDTO } from '../../services/userServices/userServiceImplementation';

export interface User {
    id: number; 
    name: string; 
    email: string; 
    password: string; 
    cpf: string ;

}


export interface outputUserDto { 
    refreshToken: string; 
    accessToken: string;
    updatedAt: Date;
}

export interface UserDao { 

    createUser  (user: UserInputDTO): Promise<{id: number }>
    
    login: (email: string, password: string) => Promise<outputUserDto>

    get(email: string): Promise<boolean>
}   