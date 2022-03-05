import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
    selector: 'app-other',
    template: `
    <div class="container bg-warning">
        <h3>I am Another consumer Component</h3>
        <div *ngIf="message" class="alert alert-danger">
            {{message.result}}
        </div>
    </div>
    
    `
})

export class OtherComponent implements OnInit, OnDestroy {
    message:any
    subscription:any

    constructor(private ms:MessageService) { }

    //consumer
    ngOnInit() { 
        this.subscription=this.ms.getMessage().subscribe( 
            (msg:any)=>{
                this.message=msg
            })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe(); //to avoid memory leak
    }
}