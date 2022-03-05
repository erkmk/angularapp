import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private ms:MessageService) { }

    ngOnInit() { 
        console.log("Home Component-Producer")
    }

    sendMsg():void{
        this.ms.sendMessage("Message:Angular 13 now has Messaging system")
    }

    clearMsg():void{
        this.ms.clearMessage() //clear Cache to avoid memory leak
    }
}