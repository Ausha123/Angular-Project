import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../../share/dto/core/TabItem";

@Component({
  selector: 'app-manage-account-details-context',
  templateUrl: './manage-account-details-context.component.html',
  styleUrls: ['./manage-account-details-context.component.scss']
})
export class ManageAccountDetailsContextComponent implements OnInit {
  tabs: TabItem[] = [
    {
      label: 'Personal Info',
      icon: 'apartment',
      route: '/home/my-account/manage/personal-details'
    },
    {
      label: 'Security',
      icon: 'apartment',
      route: '/home/my-account/manage/security'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
