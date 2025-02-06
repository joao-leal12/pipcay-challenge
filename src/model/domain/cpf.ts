export class CPF {
    
  constructor(cpf: string) { 
    if (!this.validate(cpf)) { 
      throw new Error('Invalid CPF');
    }
  }

  calculate(cpf: string) : boolean { 
    return true; 

  }   

  validate(cpf:string): boolean { 
    return this.calculate(cpf); 
  }
}