import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {GroupComponent} from "./group/group.component";

const routes: Routes = [{path:"user", component: UserComponent},
                        {path: "group", component: GroupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
