export interface PgAdapter<T> { 
  
    query:(query: string, params: any[]) => Promise<T | T[]>


    connect: () => Promise<void>


    disconnect: () => Promise<void>
}