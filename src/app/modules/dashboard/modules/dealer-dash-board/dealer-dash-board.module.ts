import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerDashBoardRoutingModule } from './dealer-dash-board-routing.module';
import { DealerDashBoardComponent } from './dealer-dash-board.component';
import { DealerDashboardHeaderTopBarComponent } from './components/dealer-dashboard-header-top-bar/dealer-dashboard-header-top-bar.component';
import { DealerDashboardMainLeftNavBarComponent } from './components/dealer-dashboard-main-left-nav-bar/dealer-dashboard-main-left-nav-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { DealerDahboardDefaultPageComponent } from './components/dealer-dahboard-default-page/dealer-dahboard-default-page.component';
import { OnGoingProjectsDataComponent } from './components/dealer-dahboard-default-page/on-going-projects-data/on-going-projects-data.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ProjectsServerCostComponent } from './components/dealer-dahboard-default-page/projects-server-cost/projects-server-cost.component';
import {NgApexchartsModule} from "ng-apexcharts";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    DealerDashBoardComponent,
    DealerDashboardHeaderTopBarComponent,
    DealerDashboardMainLeftNavBarComponent,
    DealerDahboardDefaultPageComponent,
    OnGoingProjectsDataComponent,
    ProjectsServerCostComponent
  ],
    imports: [
        CommonModule,
        DealerDashBoardRoutingModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        NgApexchartsModule,
        MatBadgeModule,
        MatButtonModule
    ]
})
export class DealerDashBoardModule { }
