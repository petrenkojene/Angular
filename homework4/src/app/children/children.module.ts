import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { ToysComponent } from './toys/toys.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { SchoolComponent } from './school/school.component';
import { OneComponent } from './nutrition/one/one.component';
import { TwoComponent } from './nutrition/two/two.component';


@NgModule({
  declarations: [
    ToysComponent,
    NutritionComponent,
    SchoolComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule,
    ChildrenRoutingModule
  ]
})
export class ChildrenModule { }
