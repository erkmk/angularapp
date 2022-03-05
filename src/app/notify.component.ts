import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
    selector: 'app-notify',
    template: `
    <div class="container">
        <h3>I am Notifier Component</h3>
        <div *ngIf="message" class="alert alert-success">
            {{message.result}}
        </div>
    </div>
    
    `
})

export class NotifyComponent implements OnInit, OnDestroy {
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