import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoadingService} from "../../../../../../../../../../share/service/core/loading.service";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss']
})
export class ProjectListPageComponent implements OnInit {


  page: number | undefined = 0;
  pageSize: number | undefined = 10;
  pageSizeOptions = [5, 10, 20, 30, 50, 80, 100];
  dataCount = 0;
  pageEvent: PageEvent | undefined;
  activeState = 'active';
  searchText = '';
  SelectedType = 'ALL';

  inquiriesList: any[] = [];

  searchForm = new FormGroup({
    searchText: new FormControl(null,
      [Validators.required])
  });

  constructor(public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    /*this.loadAllInquiries();*/

    //---------------------------------- Search configuration-----------------

    this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        this.searchText = data.searchText;
       /* this.loadAllInquiries();*/
      });

    //---------------------------------- Search configuration-----------------

  }


  public getServerData(event?: PageEvent): any {
    this.pageSize = event?.pageSize;
    this.page = event?.pageIndex;
   /* this.loadAllInquiries();*/
  }


  changeType(type: string) {
    this.SelectedType=type;
   /* this.loadAllInquiries();*/
  }

}
