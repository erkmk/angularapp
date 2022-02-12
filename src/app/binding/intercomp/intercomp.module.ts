import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockComponent } from './inputbinding';
import { OrderProcessorComponent } from './order.component';
import { SMSComponent } from './sms.component';
import { TimerComponent } from './timer.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [StockComponent],
    declarations: [
        StockComponent,
        OrderProcessorComponent,
        SMSComponent,
        TimerComponent
    ],
    providers: [],
})
export class IntercompModule { }
