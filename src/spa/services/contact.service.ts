

import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';

@Injectable({providedIn: 'root'})
export class ContactService {
    constructor() { }


    getContacts(){
        //http.get(url/contacts)
        return Promise.resolve(CONTACTS)
    }
    
}