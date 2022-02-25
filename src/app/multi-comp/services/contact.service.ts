import {Injectable} from '@angular/core';
import {CONTACTS} from './mock-contact';

@Injectable({providedIn:'root'}) 
export class ContactService {  
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
                  resolve(CONTACTS);
                   }  
        }, 1000);
      });
    }
}// end



