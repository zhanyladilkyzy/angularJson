import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModuleModule } from "./admin-module/admin-module.module";
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    NestedFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
