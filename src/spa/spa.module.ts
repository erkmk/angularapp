import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './components/contactlist.component';
import { LoginComponent } from './components/login.component';
import { ShowComponent } from './components/show.component';
import { SpaComponent } from './spa.component';
import { SPARouting } from './spa.router';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SPARouting,
    ],
    exports: [
        SpaComponent
    ],
    declarations: [
        SpaComponent,
        LoginComponent,
        ContactListComponent,
        ShowComponent
    ],
    providers: [],
})
export class SPAModule { }
