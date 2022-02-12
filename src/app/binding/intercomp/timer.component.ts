import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'timer-comp',
    template: `
    <h2 class="text-center bg-warning">
        {{time}}
    </h2>
    
    `
})

export class TimerComponent implements OnInit {

    time:any
    constructor() {
        //in every one sec this func will called to get Date time.
        window.setInterval(()=>{
            this.time=new Date().toString()
        }, 1000)
     }

    ngOnInit() { }
}