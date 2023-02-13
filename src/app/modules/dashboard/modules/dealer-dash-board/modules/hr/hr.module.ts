import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { HRComponent } from './hr.component';
import {ClientsManagementContextComponent} from "./components/clients-management/clients-management-context/clients-management-context.component";
import { MyClientsListPageComponent } from './components/clients-management/clients-management-context/inner-items/my-clients-list-page/my-clients-list-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ShareModule} from "../../../../../share/share.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HRComponent,
    ClientsManagementContextComponent,
    MyClientsListPageComponent
  ],
  imports: [
    CommonModule,
    HRRoutingModule,
    MatTabsModule,
    ShareModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule
  ]
})
export class HRModule { }
