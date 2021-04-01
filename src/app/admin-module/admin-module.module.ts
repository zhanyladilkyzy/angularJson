import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AdminModuleComponent, UserComponent, GroupComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ],
  exports: [AdminModuleComponent]
})
export class AdminModuleModule { }
