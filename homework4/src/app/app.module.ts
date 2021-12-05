import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildrenModule } from './children/children.module';
import { ClothesModule } from './clothes/closes.module';

@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildrenModule,
    ClothesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
