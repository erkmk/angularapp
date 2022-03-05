import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

import { Session } from './globals';

@Injectable({providedIn: 'root'})
export class CheckRoleGuard implements CanLoad {
    constructor() { }

    canLoad(route: Route) {
        if(Session.authenticated){
            alert("Lazy loading about module")
            return true
        }else{
            alert("Sorry you are not authorized to access about module")
            return false
        }
    }
}