import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TrackbyComponent } from './binding/trackby.component';
import { IntercompModule } from './binding/intercomp/intercomp.module';
import { DIModule } from './di/di.module';
import { ChildComponent, LifeCycleComponent } from './lifecycle/complifecycle';
import { ContactModule } from './multi-comp/contact.module';
import { CartModule } from './cartapp/cart.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TrackbyComponent,
    LifeCycleComponent,ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IntercompModule,
    DIModule,
    ContactModule,
    CartModule
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
