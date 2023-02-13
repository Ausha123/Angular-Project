import { Component, OnInit } from '@angular/core';
import {TabItem} from "../../../../../../../../share/dto/core/TabItem";

@Component({
  selector: 'app-total-revenue-context',
  templateUrl: './total-revenue-context.component.html',
  styleUrls: ['./total-revenue-context.component.scss']
})
export class TotalRevenueContextComponent implements OnInit {

  tabs: TabItem[] = [
    {
      label: 'Income Source',
      icon: 'apartment',
      route: '/dashboard/dealer/finance/revenue/source'

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
