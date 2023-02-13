import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';
import {TotalRevenueContextComponent} from "./components/revenue-management/total-revenue-context/total-revenue-context.component";
import {IncomeSourcePageComponent} from "./components/revenue-management/total-revenue-context/inner-items/income-source-page/income-source-page.component";
import {TotalExpencesContextComponent} from "./components/expenses-managent/total-expences-context/total-expences-context.component";
import {TotalExpensesListComponent} from "./components/expenses-managent/total-expences-context/inner-items/total-expenses-list/total-expenses-list.component";

const routes: Routes = [{ path: '', component: FinanceComponent,children:[
    {
      path: 'revenue', component: TotalRevenueContextComponent, children: [
        {path: 'source', component: IncomeSourcePageComponent}
      ]
    },
    {
      path: 'expenses', component: TotalExpencesContextComponent, children: [
        {path: 'list', component: TotalExpensesListComponent}
      ]
    }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
