import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../services/contact';


@Component({
    selector: 'app-multicomp',
    templateUrl:'./contactlist.component.html'
  })
export class ContactListComponent implements OnInit {
    public contacts: any
    public selected:any = {}
    status:boolean=true;
    errorInfo:any

    constructor(private _contactService: ContactService) {
        console.log("Service Injected")
    }

    ngOnInit() {
        console.log("ngOnInit Fired and contacts injected")
        this.getContactDetails()// my local method       
    }
    getContactDetails() {
       this._contactService.getContacts()
         .then((result:any) => {this.contacts = result}),
         (error:any) =>{  this.status=false;  }
    }
    selectedContact(contact: Contact) {
    console.log("selected contact name " + contact.name)
        this.selected = contact       
    }
}//end of code
