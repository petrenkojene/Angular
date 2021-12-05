import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {ManComponent,ChildrenComponent, WomanComponent,ShoesComponent} from './index';
import { JacketComponent } from './man/jacket/jacket.component';
import { DressComponent } from './woman/dress/dress.component';
import { CrosyComponent } from './children/index';


@NgModule({
    declarations:[
    ManComponent,
    WomanComponent,
    ChildrenComponent,
    ShoesComponent,
    JacketComponent,
    DressComponent,
    CrosyComponent
  ],
    imports:[
        CommonModule
    ]
})
export class ClothesModule{}