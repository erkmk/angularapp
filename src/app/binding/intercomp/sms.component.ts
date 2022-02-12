import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'sms-text',
    template: `
    <h3>Stock information from SMS Component</h3>
    <h4>Sent SMS about {{stock}}</h4>
    
    `
})

export class SMSComponent implements OnInit {

    @Input()
    stock:any

    constructor() { }

    ngOnInit() { }
}


//Grand child Component
