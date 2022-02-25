import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartManagerComponent } from './cart.component';
import { ProductsComponent } from './products.component';
import { ShowCartComponent } from './showcart.component';


@NgModule({
    imports: [CommonModule,FormsModule],
    exports: [CartManagerComponent],
    declarations: [CartManagerComponent, ProductsComponent, ShowCartComponent],
    providers: [],
})
export class CartModule { }
