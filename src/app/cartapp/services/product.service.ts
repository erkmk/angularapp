import {Injectable} from '@angular/core';
import {PRODUCTS} from './mock_products';

@Injectable({providedIn:'root'}) 
export class ProductServices {  
  error:boolean=false;   

     getContacts(){
       // ES  6 / Typescript
       return new Promise((resolve, reject) => {
         //mocking for deferred data
         //ajax call to restful 
        setTimeout(() => {
             if (this.error) {
                  reject('Sorry.. can not fetch Contacts ');
          } else {                 
                  resolve(PRODUCTS);
                   }  
        }, 1000);
      });
    }
}// end



