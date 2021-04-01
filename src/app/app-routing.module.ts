import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminModuleComponent} from "./admin-module/admin-module.component";

const routes: Routes = [{path: "admin", component: AdminModuleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
