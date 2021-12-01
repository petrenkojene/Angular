import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TherdComponentComponent } from './therd-component/therd-component.component';

const routes: Routes = [
  {path:'',component:FirstComponentComponent},
  {path:'second',component:SecondComponentComponent},
  {path:'therd',component:TherdComponentComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
