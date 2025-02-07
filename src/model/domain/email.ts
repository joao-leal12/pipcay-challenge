export class Email { 
  constructor(email: string) { 
    if (!this.validate(email)) { 
      throw new Error('Email inválido');
    }
  }

  calculate(email: string) {
    return true; 
  }

  validate(email: string) {

    return this.calculate(email);
  }

}

