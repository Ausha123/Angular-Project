import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import {TotalExpencesContextComponent} from "./components/expenses-managent/total-expences-context/total-expences-context.component";
import {TotalRevenueContextComponent} from "./components/revenue-management/total-revenue-context/total-revenue-context.component";
import {TotalExpensesListComponent} from "./components/expenses-managent/total-expences-context/inner-items/total-expenses-list/total-expenses-list.component";
import {IncomeSourcePageComponent} from "./components/revenue-management/total-revenue-context/inner-items/income-source-page/income-source-page.component";
import {MatTabsModule} from "@angular/material/tabs";
import {ShareModule} from "../../../../../share/share.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    FinanceComponent,
    TotalRevenueContextComponent,
    IncomeSourcePageComponent,
    TotalExpencesContextComponent,
    TotalExpensesListComponent,

  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MatTabsModule,
    ShareModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class FinanceModule { }
