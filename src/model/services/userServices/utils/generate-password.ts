import {randomBytes,pbkdf2Sync} from 'crypto';

export class GeneratePassword { 

  static execute(password: string) {

    const salt = randomBytes(16).toString('hex');

    const genHash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    return `${genHash}:${salt}`;

  }

  static verify(password: string , hashPassword: string): boolean {
        
    const [hash, salt] = hashPassword.split(':');    

    const newGenHash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex'); 
    
    return hash === newGenHash;
  }
}