import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgclassComponent } from './ngclass/ngclass.component';
import { SecondComponent } from './second/second.component';
import { FourthComponent } from './fourth/fourth.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
  {path:'', component:NgclassComponent},
{path:'second',component:SecondComponent},
{path:'third',component:ThirdComponent},
{path:'fourth',component:FourthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
