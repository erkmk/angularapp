import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-di',
    templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {
    constructor(private ps:ProductService) { }
    product:any
    ngOnInit() { 
        this.product=this.ps.getProduct()
    }
}

// 3 types service dependancies injection
//component level -payment service
//module - cart
//global level - authentication