import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {InquiriesService} from "../../../../../../../../../../share/service/inquiries.service";
import {LoadingService} from "../../../../../../../../../../share/service/core/loading.service";

@Component({
  selector: 'app-income-source-page',
  templateUrl: './income-source-page.component.html',
  styleUrls: ['./income-source-page.component.scss']
})
export class IncomeSourcePageComponent implements OnInit {

  page: number | undefined = 0;
  pageSize: number | undefined = 10;
  pageSizeOptions = [5, 10, 20, 30, 50, 80, 100];
  dataCount = 0;
  pageEvent: PageEvent | undefined;

  sourceList: any[] = [];

  constructor(private inquiriesService: InquiriesService, public loadingService: LoadingService) {
  }

  ngOnInit(): void {
  }
  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
  }
}
