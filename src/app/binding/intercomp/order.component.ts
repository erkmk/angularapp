import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'order-processor',
    template: `
    <h2>Order Processor</h2>
    <h3 class="bg-warning">
    Buying {{quantity}} of {{stockSymbol}}
    </h3>
    <sms-text [stock] = "stockSymbol"></sms-text>    
    `
})

export class OrderProcessorComponent implements OnInit {

    @Input() //means this stockSymbol value coming from parent comp
    stockSymbol:any

    @Input()
    quantity:any
    constructor() { }

    ngOnInit() { }
}

//Child Component
