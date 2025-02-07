export class Password { 
  constructor(password: string) { 
    if (!this.validate(password)) { 
      throw new Error('Invalid password');
    }
  }

  calculate(password: string) : boolean { 
    return true;
  }

  validate(password: string) {
        
    return this.calculate(password);
  }
}