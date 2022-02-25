import { Component, OnInit } from '@angular/core';
import { Product } from './services/product';
import { ProductServices } from './services/product.service';


@Component({
    selector: 'app-cart',
    templateUrl:'./cart.component.html'
  })
export class CartManagerComponent implements OnInit {
    public products: any
    public selected:any = {}
    public cartData:any = []
    status:boolean=true;
    errorInfo:any

    constructor(private _productService: ProductServices) {
        console.log("Service Injected")
    }

    ngOnInit() {
        console.log("ngOnInit Fired and contacts injected")
        this.getContactDetails()// my local method       
    }
    getContactDetails() {
       this._productService.getContacts()
         .then((result:any) => {this.products = result}),
         (error:any) =>{  this.status=false;  }
    }
    selectedProduct(product: Product) {
    console.log("selected product name " + product.name)
        this.selected = product
        this.cartData.push(product)  
        console.log("this.cartData", this.cartData)     
    }
}//end of code
