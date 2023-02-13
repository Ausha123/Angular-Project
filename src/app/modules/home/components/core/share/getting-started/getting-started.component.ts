import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MakingInquiryComponent} from "../../../../../share/components/making-inquiry/making-inquiry.component";

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(MakingInquiryComponent,{
      width:'500px'
    });
  }
}
