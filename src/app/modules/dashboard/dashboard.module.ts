import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ShareModule} from "../share/share.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { DashboardAccessPageComponent } from './components/dashboard-access-page/dashboard-access-page.component';
import { DashboardBlockPageComponent } from './components/dashboard-block-page/dashboard-block-page.component';
import { DashboardNotVerifiedPageComponent } from './components/dashboard-not-verified-page/dashboard-not-verified-page.component';
import {HomeModule} from "../home/home.module";


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAccessPageComponent,
    DashboardBlockPageComponent,
    DashboardNotVerifiedPageComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ShareModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        HomeModule
    ]
})
export class DashboardModule { }
