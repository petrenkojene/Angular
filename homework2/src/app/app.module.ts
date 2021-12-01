import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TherdComponentComponent } from './therd-component/therd-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    TherdComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
