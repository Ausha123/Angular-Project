import { Component, OnInit } from '@angular/core';
import {
  OverviewPopupModelFirstComponent
} from "./inner-items/overview-popup-model-first/overview-popup-model-first.component";
import {MatDialog} from "@angular/material/dialog";
import {
  OverviewPopupModelSecondComponent
} from "./inner-items/overview-popup-model-second/overview-popup-model-second.component";
import {
  OverviewPopupModelThirdComponent
} from "./inner-items/overview-popup-model-third/overview-popup-model-third.component";
import {
  OverviewPopupModelFourthComponent
} from "./inner-items/overview-popup-model-fourth/overview-popup-model-fourth.component";

@Component({
  selector: 'app-overview-main-benefits',
  templateUrl: './overview-main-benefits.component.html',
  styleUrls: ['./overview-main-benefits.component.scss']
})
export class OverviewMainBenefitsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openOverview1() {
    const dialogRef = this.dialog.open(OverviewPopupModelFirstComponent,{
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openOverview2() {
    const dialogRef = this.dialog.open(OverviewPopupModelSecondComponent,{
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openOverview3() {
    const dialogRef = this.dialog.open(OverviewPopupModelThirdComponent,{
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openOverview4() {
    const dialogRef = this.dialog.open(OverviewPopupModelFourthComponent,{
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
