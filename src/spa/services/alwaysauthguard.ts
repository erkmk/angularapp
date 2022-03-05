import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Session } from './globals';

@Injectable({providedIn: 'root'})
export class AlwaysAuthGuard implements CanActivate {
    constructor(private _router:Router) {
        //http.get(url?username=murthey)
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('I am always auth guard' +state)
        alert('I am alwaysauthguard service intercepted')

        if(!Session.authenticated == true){
            // this._router.navigate("contact")
            return false;

        }
        return true;
    }
}

// Note: guard cannot be use without routing and service can.