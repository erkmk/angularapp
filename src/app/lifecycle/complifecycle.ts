import { Component, OnInit,
OnChanges,OnDestroy,DoCheck,Input,
ChangeDetectorRef,
ChangeDetectionStrategy,
SimpleChanges, ViewChildren
} from '@angular/core';

import { interval,Subscription } from 'rxjs';

@Component({
    selector: 'app-lifecycle',
    template: `
    <h2 class="container">
    Google Search:
    <input type="text" [(ngModel)]="search" />
    </h2>

    <child [search]="search"></child>
    `
})

export class LifeCycleComponent implements OnInit {
    search:string="computers"
    constructor() { }

    ngOnInit() { }
}

//child
@Component({
    selector: 'child',
    template: `
    <h2 class="text-danger">Search text</h2>
    <div>
    <h3>{{search}}</h3>
    <h4>Count : {{count}}</h4>

    <h2 *ngFor="let item of items" #demo id="mydata">
    IntegriChain wishes you!
    </h2>
    <div>
    `
    ,
    // changeDetection: ChangeDetectionStrategy.Default
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
    @Input() 
    search:string=''
    count:number=0
    items=[1,2,3]

    subscription:Subscription | undefined

    @ViewChildren('demo') 
    dm:any

    constructor(private cd:ChangeDetectorRef) { 
        console.log("in constructor:"+this.search)
        // this.cd.detach()
    }
    
    
    ngOnChanges(changes: SimpleChanges): void {
        //validation
        for (let key in changes){
            console.log(`${key} changed 
                - Current: ${changes[key].currentValue}
                - Previous: ${changes[key].previousValue}`)
        }
    }

    ngOnInit() {
        this.subscription=interval(1000).subscribe(console.log)


        console.log("in ngOnInit:"+this.search)
        //subscrib service of rx,websocket,events, data init
        //one time
        /*
        setTimeout( ()=>{
            this.cd.reattach()
        },5000)
        */
       setInterval( ()=>{
        ++this.count
        console.log("count is:", this.count)
       },1000)


    }

    ngDoCheck(): void {
        //every time when state changes weather to render or not
        console.log("in NDC lifecycle method"+this.search)
        //ajax classes and based on response or condition
       /*
        if (this.search.length===10){
            this.cd.detectChanges()
        }
        */
       this.cd.detectChanges()
    }

    ngAfterViewChecked(){
        //js can use and jquery can use because it is real dom.
        console.log("after viewChecked fire......")
        console.log("in view checked:", this.dm)
    }

    ngOnDestroy(): void {
        //when comp remove frm the shadow dom.
        //viewcontainerRef ref pointer remove
        //unsubscribe observable, websocket, event,clean the cache....\
        this.subscription?.unsubscribe()
    }

}