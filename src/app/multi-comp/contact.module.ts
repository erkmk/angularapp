import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ContactListComponent} from 
      './components/contactlist.component';
import { ContactDetailsComponent } from 
      './components/contactdetails.component';
      
@NgModule({
  declarations:[ContactDetailsComponent,ContactListComponent],
  imports: [ CommonModule,FormsModule],
  exports:[ContactListComponent]
})
export class ContactModule { }
