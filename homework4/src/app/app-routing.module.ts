import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenComponent,ManComponent,WomanComponent ,ShoesComponent} from './clothes/index';
import { CrosyComponent } from './clothes/children';
import { OneComponent } from './children/nutrition/one/one.component';
import { TwoComponent } from './children/nutrition/two/two.component';
import { NutritionComponent } from './children';


const routes: Routes = [
  {path: 'children', component: ChildrenComponent,
children:[{path:'child', component: ShoesComponent}]},
  {path: 'man', component:ManComponent},
  {path:'woman', component:WomanComponent},
  {path:'crosy', component: CrosyComponent},
  {path:'nutrilon', component: NutritionComponent,
children:[
  {path: 'one', component:OneComponent},
  {path:'two', component:TwoComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
