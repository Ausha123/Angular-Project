import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MakingInquiryComponent} from "../../../../../share/components/making-inquiry/making-inquiry.component";
import {DealerService} from "../../../../../share/service/dealer/dealer.service";

@Component({
  selector: 'app-dealer-dahboard-default-page',
  templateUrl: './dealer-dahboard-default-page.component.html',
  styleUrls: ['./dealer-dahboard-default-page.component.scss']
})
export class DealerDahboardDefaultPageComponent implements OnInit {

  constructor(public dialog: MatDialog,public dealerService:DealerService) {

  }

  ngOnInit(): void {

  }



  makeNewInquiry() {
      this.dialog.open(MakingInquiryComponent,{
        width:'500px'
      });
  }


}
