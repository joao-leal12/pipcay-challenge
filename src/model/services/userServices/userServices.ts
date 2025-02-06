export interface User { 
    name: string
    email: string
    password: string
    cpf: string
}


export interface UserServices { 
    createUser: (user: User) => Promise<string>
    cryptoPassword: (password: string) => string
    findUser: (email: string) => Promise<boolean>
}