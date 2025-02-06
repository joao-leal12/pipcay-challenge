import { PgAdapter } from './pgAdapter';

export class DatabaseDriver<T> implements PgAdapter<T> { 
    
  async query(query: string, params: any[]): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async connect(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async disconnect(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}