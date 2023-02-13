import {Component, OnInit} from '@angular/core';
import {TabItem} from "../../../../../../../../share/dto/core/TabItem";

@Component({
  selector: 'app-total-expences-context',
  templateUrl: './total-expences-context.component.html',
  styleUrls: ['./total-expences-context.component.scss']
})
export class TotalExpencesContextComponent implements OnInit {


  tabs: TabItem[] = [
    {
      label: 'List View',
      icon: 'apartment',
      route: '/dashboard/dealer/finance/expenses/list'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
