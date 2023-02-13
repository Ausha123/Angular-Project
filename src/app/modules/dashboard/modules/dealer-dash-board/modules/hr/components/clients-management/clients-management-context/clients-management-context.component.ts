import {Component, OnInit} from '@angular/core';
import {TabItem} from "../../../../../../../../share/dto/core/TabItem";

@Component({
  selector: 'app-clients-management-context',
  templateUrl: './clients-management-context.component.html',
  styleUrls: ['./clients-management-context.component.scss']
})
export class ClientsManagementContextComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'Clients List',
      icon: 'apartment',
      route: '/dashboard/dealer/human-resource/clients/list'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
