import { Injectable } from '@angular/core';
import { Product } from './product';

interface ILogger{
    logMessage(msg:string):void
}
@Injectable()
export class ProductService implements ILogger{
    constructor() { }
    logMessage(msg: string): void {
        console.log("logged"+msg);
    }

    getProduct():Product{
        this.logMessage("Product accessed")
        return new Product(101, 'IPhone','latest phone', 40000)
    }



    
}