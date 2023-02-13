import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRComponent } from './hr.component';
import {ClientsManagementContextComponent} from "./components/clients-management/clients-management-context/clients-management-context.component";
import {MyClientsListPageComponent} from "./components/clients-management/clients-management-context/inner-items/my-clients-list-page/my-clients-list-page.component";

const routes: Routes = [{ path: '', component: HRComponent,children:[
    {
      path: 'clients', component: ClientsManagementContextComponent, children: [
        {path: 'list', component: MyClientsListPageComponent}
      ]
    }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRRoutingModule { }
