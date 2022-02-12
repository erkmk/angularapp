import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { TrackbyComponent } from './binding/trackby.component';
import { IntercompModule } from './binding/intercomp/intercomp.module';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TrackbyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IntercompModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
