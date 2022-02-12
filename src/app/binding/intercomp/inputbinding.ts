import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock',
    templateUrl: './inputbinding.html'
})

export class StockComponent implements OnInit {
    stock:any
    quantity:any
    constructor() { }

    ngOnInit() { }

    onInputEvent(event:any):void{
        this.stock =event.target.value
    }
}

//Parent Component