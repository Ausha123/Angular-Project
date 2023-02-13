import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ImageData} from "../system-dev-get-started.component";

@Component({
  selector: 'app-edealer-project-image-view',
  templateUrl: './edealer-project-image-view.component.html',
  styleUrls: ['./edealer-project-image-view.component.scss']
})
export class EDealerProjectImageViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EDealerProjectImageViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageData,
  ) {}

  ngOnInit(): void {
  }

}
