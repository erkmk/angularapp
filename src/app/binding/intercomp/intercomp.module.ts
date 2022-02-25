import { CommonModule } from '@angular/common';
import { NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockComponent } from './inputbinding';
import { OrderProcessorComponent } from './order.component';
import { NotifyComponent, OutputComponent, PriceQuoterComponent } from './outputbinding';
import { SMSComponent } from './sms.component';
import { TimerComponent } from './timer.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [StockComponent, OutputComponent],
    declarations: [
        StockComponent,
        OrderProcessorComponent,
        SMSComponent,
        TimerComponent,
        OutputComponent,
        PriceQuoterComponent,
        NotifyComponent
    ],
    providers: [],
})
export class IntercompModule { }
