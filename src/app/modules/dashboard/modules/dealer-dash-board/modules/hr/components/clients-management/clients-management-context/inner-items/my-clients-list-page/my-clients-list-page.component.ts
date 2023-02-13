import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {LoadingService} from "../../../../../../../../../../share/service/core/loading.service";
import {debounceTime} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {InquiriesService} from "../../../../../../../../../../share/service/inquiries.service";

@Component({
  selector: 'app-my-clients-list-page',
  templateUrl: './my-clients-list-page.component.html',
  styleUrls: ['./my-clients-list-page.component.scss']
})
export class MyClientsListPageComponent implements OnInit {


  page: number | undefined = 0;
  pageSize: number | undefined = 10;
  pageSizeOptions = [5, 10, 20, 30, 50, 80, 100];
  dataCount = 0;
  pageEvent: PageEvent | undefined;
  searchText = '';

  myClientsList: any[] = [];

  searchForm = new FormGroup({
    searchText: new FormControl(null,
      [Validators.required])
  });

  constructor(public loadingService: LoadingService) {
  }

  ngOnInit(): void {


    //---------------------------------- Search configuration-----------------

    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        this.searchText = data.searchText;

      });

    //---------------------------------- Search configuration-----------------

  }



  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;

  }


}
