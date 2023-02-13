import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DailyProcessComponent} from './daily-process.component';
import {ProjectManagementContextComponent} from "./components/project-management/project-management-context/project-management-context.component";
import {ProjectListPageComponent} from "./components/project-management/project-management-context/inner-items/project-list-page/project-list-page.component";
import {CompletedProjectListPageComponent} from "./components/project-management/project-management-context/inner-items/completed-project-list-page/completed-project-list-page.component";
import {OnGooingProjectsPageComponent} from "./components/project-management/project-management-context/inner-items/on-gooing-projects-page/on-gooing-projects-page.component";
const routes: Routes = [
  {
    path: '', component: DailyProcessComponent, children: [
      {
        path: 'project-management', component: ProjectManagementContextComponent, children: [
          {path: 'project-list', component: ProjectListPageComponent},
          {path: 'ongoing', component: OnGooingProjectsPageComponent},
          {path: 'completed-list', component: CompletedProjectListPageComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyProcessRoutingModule {
}
