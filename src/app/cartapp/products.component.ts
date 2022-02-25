import {Component,Input} from '@angular/core';

@Component({
    selector:   'app-product',
    template: `
    <h3 class="bg-primary text-success"> Details of Product :</h3>
    <div>
    <label for="name">Name</label>
    <input type="text" [(ngModel)]="product.id">
    </div>

    <div>
    <label for="email">Email</label>
    <input type="text" [(ngModel)]="product.name">
    </div>

    <div>
    <label for="phone">Phone</label>
    <input type="text" [(ngModel)]="product.price">
    </div>
    `,
    inputs: ["product"],
    styles :[`
        label {display:inline-block; width:100px}
        input {width:200px}
      `
    ]
})
export class ProductsComponent{
   //@Input () 
   //contact:Contact
 public product:any = {}; 
} // End of code
