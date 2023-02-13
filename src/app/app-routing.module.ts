import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardLoggedGuard} from "./modules/share/guards/dashboard-logged.guard";
import {PageNotFoundComponent} from "./modules/share/components/core/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '', redirectTo: '/home/main', pathMatch: 'full',
  },
  {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule)},
  {path: 'dashboard', canActivate:[DashboardLoggedGuard], loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
