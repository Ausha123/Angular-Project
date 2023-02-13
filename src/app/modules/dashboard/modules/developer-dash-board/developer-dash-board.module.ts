import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperDashBoardRoutingModule } from './developer-dash-board-routing.module';
import { DeveloperDashBoardComponent } from './developer-dash-board.component';


@NgModule({
  declarations: [
    DeveloperDashBoardComponent
  ],
  imports: [
    CommonModule,
    DeveloperDashBoardRoutingModule
  ]
})
export class DeveloperDashBoardModule { }
