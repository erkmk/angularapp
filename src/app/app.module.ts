import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

//http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TrackbyComponent } from './binding/trackby.component';
import { IntercompModule } from './binding/intercomp/intercomp.module';
import { DIModule } from './di/di.module';
import { ChildComponent, LifeCycleComponent } from './lifecycle/complifecycle';
import { ContactModule } from './multi-comp/contact.module';
import { CartModule } from './cartapp/cart.module';
import { HttpComponent } from './http/http.component';
import { WeatherComponent } from './http/weather.component';
import {AgGridModule} from 'ag-grid-angular';
import { AgGridComponent } from './http/aggrid.component';
import { SPAModule } from 'src/spa/spa.module';
import { HomeComponent } from './home/home.component';
import { NotifyComponent } from './notify.component';
import { OtherComponent } from './other.component';
import { WorkerComponent } from './worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TrackbyComponent,
    LifeCycleComponent,
    ChildComponent,
    HttpComponent,
    WeatherComponent,
    AgGridComponent,
    HomeComponent,
    NotifyComponent,
    OtherComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    IntercompModule,
    DIModule,
    ContactModule,
    CartModule,
    SPAModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*
  constructor(private appRef:ApplicationRef){
    //entire shadow DOM now in your pocket!
    const originalTick=appRef.tick
    appRef.tick=function(){
      const winPerform = window.performance //from the browser
      //how much time its taking to render the component
      const start=winPerform.now()
      const retValue=originalTick.apply(this)//continue your CDS
      //now all this went on real DOM updated on browser side
      const end=winPerform.now()
      const runtime=end-start
      console.log("change detection time:", runtime)
      return retValue
    }

  }*/
 }
