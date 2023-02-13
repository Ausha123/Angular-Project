import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-on-going-projects-data',
  templateUrl: './on-going-projects-data.component.html',
  styleUrls: ['./on-going-projects-data.component.scss']
})
export class OnGoingProjectsDataComponent implements OnInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 78;

  // MatPaginator Output
  // @ts-ignore
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
