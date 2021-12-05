import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrosyComponent } from "./shoes/crosy/crosy.component";

const routes: Routes = [
    {path:'crosy', component: CrosyComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }