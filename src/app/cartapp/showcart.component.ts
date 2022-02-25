import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'show-cart',
    template: `
    <button (click)="showCart()">Show Cart</button>
    <br/>
    <div class="card" *ngIf="showCartTable">
                 <div class="card-body position-relative">
                  <div class="table-responsive cnstr-record product-tbl">
                   <table class="table table-bordered heading-hvr" >
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                                
                            </tr>
                            
                        </thead>
                      
                        <tbody>
                        
                            <tr *ngFor="let product of cartData; let i = index">
                                 <td>{{product.id}}</td>
                                 <td>{{product.name }}</td>
                                 <td>{{product.price}}</td>
                                 <td><button class="bg bg-danger" (click)="cartData.splice(i, 1)">Remove</button>
                            </tr>
                        
                        </tbody>
                    
                    </table>
                    
            </div>
            
        </div>
    `
})

export class ShowCartComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Input()
    public cartData:any

    public showCartTable:Boolean = false

    showCart(){
        this.showCartTable = true
        console.log("ShowcartData", this.cartData)
    }
    // removeCart(id:number){
    //     // const index: number = this.cartData.indexOf(id);     
    //     // this.cartData.splice(index, id)
    //     delete this.cartData[id]
    //     console.log("removeCart", this.cartData)
    // }
}