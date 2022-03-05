import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    // selector: 'selector-name',no need this because we used routing
    template: `
    <h1 class="bg-warning mycolor">
    You have selected {{name}}
    </h1>
    `,
    styles:[`
        .mycolor {color:blue}
    `],
    // encapsulation:ViewEncapsulation.Emulated, //this is like enum
})
//1-Emulated: global style and bootstrap style and ownStyle, and not leake my
//ownStyle to any other comp. it is default.
//2-None: disable the ViewEncapsulation, purely globally available this own style in index.html, other Dom also can use.
//3-shadowDom : it is global but only available to shadowDom not other Dom
//native: only want my style, in till Angular10

export class ShowComponent implements OnInit {
    name:string = ''
    constructor(private route:ActivatedRoute) { }

    ngOnInit() { 
        this.name=this.route.snapshot.params['selected']
        console.log(this.name)
        //http.get(url?name=name)
    }
}