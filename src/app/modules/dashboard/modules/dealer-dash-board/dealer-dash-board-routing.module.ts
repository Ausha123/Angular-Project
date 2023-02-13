import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DealerDashBoardComponent} from './dealer-dash-board.component';
import {DealerDahboardDefaultPageComponent} from "./components/dealer-dahboard-default-page/dealer-dahboard-default-page.component";

const routes: Routes = [
  {
    path: '', component: DealerDashBoardComponent, children: [
      {
        path: '',
        redirectTo: '/dashboard/dealer/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: DealerDahboardDefaultPageComponent
      }, {
        path: 'daily-process',
        loadChildren: () => import('./modules/daily-process/daily-process.module').then(m => m.DailyProcessModule)
      },
      {
        path: 'finance', loadChildren: () => import('./modules/finance/finance.module').then(m => m.FinanceModule)
      },
      {
        path: 'human-resource', loadChildren: () => import('./modules/hr/hr.module').then(m => m.HRModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerDashBoardRoutingModule {
}
