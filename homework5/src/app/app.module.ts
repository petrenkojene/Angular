import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardBlocComponent } from './card-bloc/card-bloc.component';


@NgModule({
  declarations: [
    AppComponent,
    CardBlocComponent,
    CardsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
