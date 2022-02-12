import { Injectable } from "@angular/core";



//DI
//providedIn root use for singleton
//only one instance would be used all over project
//
@Injectable({providedIn:'root'}) 
export class TestService{
    //Business logic
    getInfo(){
        return "Welcome"
    }
}


//another way to create the object