import { Component,Output,EventEmitter, OnInit, Input} from '@angular/core';

interface IPriceQuote{
    stockSymbol:string,
    lastPrice:number
}

interface ILogger{
    log(msg:string):void
}

//parent
@Component({
    selector: 'app-event',
    template: `
    <div class="container">
        <h2>
        Parent Component Received:
        {{stockSymbol}} - {{price | currency:'USD'}}
        </h2>

        <price-quoter (lastPriceEvent)="priceQuoteHandler($event)"></price-quoter>
        <app-notify [info]="stockInfo"></app-notify>
    </div>
    `
})

export class OutputComponent {

    stockSymbol:string = ''
    price:number=0
    stockInfo:IPriceQuote = {'stockSymbol':'', 'lastPrice':0}

    priceQuoteHandler(event:IPriceQuote){
        this.stockSymbol=event.stockSymbol
        this.price=event.lastPrice
    this.stockInfo={'stockSymbol':event.stockSymbol, 'lastPrice':event.lastPrice}
    }

}

//child1
@Component({
    selector: 'price-quoter',
    template: `
    <h3 class="container">
    Child PricequoterComponent : {{company}} - 
        {{price | currency:'USD'}}
    </h3>
    `
})

export class PriceQuoterComponent implements ILogger{
    log(msg: string): void {
        console.log("logged" +msg)
    }
    company:string = "Integrichain"
    price:number = 0

    @Output()
    lastPriceEvent: EventEmitter<IPriceQuote>=new EventEmitter()
    constructor() {
        window.setInterval( ()=>{
            let priceQuote:IPriceQuote={
                stockSymbol: this.company,
                lastPrice: 100*Math.random()
            };
            this.price = priceQuote.lastPrice;
            this.lastPriceEvent.emit(priceQuote);

        }, 1000)
    }

}

//child2
@Component({
    selector: 'app-notify',
    template: `
    <div class="container">
        <h3>Send notification {{info.stockSymbol}}
        and Stock value {{info.lastPrice}} successfully
        </h3>
    </div>
    `
})

export class NotifyComponent{
    @Input()
    info:IPriceQuote={'stockSymbol':'', 'lastPrice':0}
}