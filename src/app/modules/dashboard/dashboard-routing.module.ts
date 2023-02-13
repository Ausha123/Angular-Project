import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardAccessPageComponent} from "./components/dashboard-access-page/dashboard-access-page.component";
import {DashboardBlockPageComponent} from "./components/dashboard-block-page/dashboard-block-page.component";
import {DashboardNotVerifiedPageComponent} from "./components/dashboard-not-verified-page/dashboard-not-verified-page.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: '/dashboard/loading-admin-panel', pathMatch: 'full'},
      {
        path:'loading-admin-panel',component: DashboardAccessPageComponent
      },
      {
        path:'blocked',component: DashboardBlockPageComponent
      },
      {
        path:'dashboard-access-verify',component: DashboardNotVerifiedPageComponent
      },
      {
        path: 'dealer',
        loadChildren: () => import('./modules/dealer-dash-board/dealer-dash-board.module').then(m => m.DealerDashBoardModule)
      },
      {
        path: 'developer',
        loadChildren: () => import('./modules/developer-dash-board/developer-dash-board.module').then(m => m.DeveloperDashBoardModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
