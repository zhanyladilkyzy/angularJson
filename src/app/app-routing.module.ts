import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminModuleComponent} from "./admin-module/admin-module.component";
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";
import {NestedFormComponent} from "./nested-form/nested-form.component";

const routes: Routes = [{path: "admin", component: AdminModuleComponent},
                        {path: "task1", component: SignUpFormComponent},
                        {path: "task2", component: NestedFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
