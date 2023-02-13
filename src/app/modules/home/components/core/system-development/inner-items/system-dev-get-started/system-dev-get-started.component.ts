import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {EDealerProjectImageViewComponent} from "./edealer-project-image-view/edealer-project-image-view.component";
import {MakingInquiryComponent} from "../../../../../../share/components/making-inquiry/making-inquiry.component";
export interface ImageData {
  link: string;
}
@Component({
  selector: 'app-system-dev-get-started',
  templateUrl: './system-dev-get-started.component.html',
  styleUrls: ['./system-dev-get-started.component.scss']
})
export class SystemDevGetStartedComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openImage(link:string){
    this.dialog.open(EDealerProjectImageViewComponent, {
      width: '1000px',
      data: {link: link}
    });
  }

  openModal() {
    this.dialog.open(MakingInquiryComponent,{
      width:'500px'
    });
  }
}
