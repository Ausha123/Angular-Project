import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../../../../../../../share/dto/core/TabItem";

@Component({
  selector: 'app-project-management-context',
  templateUrl: './project-management-context.component.html',
  styleUrls: ['./project-management-context.component.scss']
})
export class ProjectManagementContextComponent implements OnInit {


  tabs: TabItem[] = [
    {
      label: 'Project List',
      icon: 'apartment',
      route: '/dashboard/dealer/daily-process/project-management/project-list'

    },
    {
      label: 'OnGoing Projects',
      icon: 'apartment',
      route: '/dashboard/dealer/daily-process/project-management/ongoing'

    }, {
      label: 'Completed Projects',
      icon: 'apartment',
      route: '/dashboard/dealer/daily-process/project-management/completed-list'

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
