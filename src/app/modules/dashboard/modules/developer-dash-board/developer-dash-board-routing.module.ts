import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperDashBoardComponent } from './developer-dash-board.component';

const routes: Routes = [{ path: '', component: DeveloperDashBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperDashBoardRoutingModule { }
