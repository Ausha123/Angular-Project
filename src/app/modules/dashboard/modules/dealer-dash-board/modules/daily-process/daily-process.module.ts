import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyProcessRoutingModule } from './daily-process-routing.module';
import { DailyProcessComponent } from './daily-process.component';
import { ProjectListPageComponent } from './components/project-management/project-management-context/inner-items/project-list-page/project-list-page.component';
import { CompletedProjectListPageComponent } from './components/project-management/project-management-context/inner-items/completed-project-list-page/completed-project-list-page.component';
import { ProjectManagementContextComponent } from './components/project-management/project-management-context/project-management-context.component';
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {ShareModule} from "../../../../../share/share.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import { OnGooingProjectsPageComponent } from './components/project-management/project-management-context/inner-items/on-gooing-projects-page/on-gooing-projects-page.component';


@NgModule({
  declarations: [
    DailyProcessComponent,
    ProjectListPageComponent,
    CompletedProjectListPageComponent,
    ProjectManagementContextComponent,
    OnGooingProjectsPageComponent
  ],
  imports: [
    CommonModule,
    DailyProcessRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ShareModule,
    MatPaginatorModule
  ]
})
export class DailyProcessModule { }
