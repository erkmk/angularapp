import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {
    constructor() { }

    private subject=new Subject<any>() //drum

    //producer
    sendMessage(message:string){ 
        //Live data from websocket /ajax
        //rx operator and filter/pagination

        //after getting response
        this .subject.next({result:message})
    }
    
    //producer-clearing the drum.
    clearMessage(){
        this.subject.next({})
    }

    //consumer: call by consumer
    getMessage():Observable<any>{ 
        return this.subject.asObservable();
    }
}