import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spa',
    templateUrl: 'spa.component.html',
    styleUrls:['./spa.component.css']
})

export class SpaComponent implements OnInit {
    constructor() { }
    title:string="Angular 13 SPA casestudy by Murthy"

    ngOnInit() { }
}