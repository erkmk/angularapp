import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';

import aboutRoutes from './about.routes' //(can give any name)because we used default at export in about routes!

@NgModule({
    imports: [CommonModule, aboutRoutes],
    exports: [],
    declarations: [
        AboutComponent
    ],
    providers: [],
})
export class AboutModule { }
