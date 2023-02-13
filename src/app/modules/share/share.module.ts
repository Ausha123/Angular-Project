import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ShareRoutingModule} from './share-routing.module';
import {ShareComponent} from './share.component';
import {MainLoadingBarComponent} from './components/main-loading-bar/main-loading-bar.component';
import {MainLoadingSpinnerComponent} from './components/main-loading-spinner/main-loading-spinner.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";
import { ButtonLoadingSpinnerComponent } from './components/button-loading-spinner/button-loading-spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { MakingInquiryComponent } from './components/making-inquiry/making-inquiry.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";


@NgModule({
  declarations: [
    ShareComponent,
    MainLoadingBarComponent,
    MainLoadingSpinnerComponent,
    ButtonLoadingSpinnerComponent,
    PageNotFoundComponent,
    MakingInquiryComponent
  ],
  exports: [
    ButtonLoadingSpinnerComponent,
    MainLoadingSpinnerComponent,
    MainLoadingBarComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    NgxIntlTelInputModule
  ]
})
export class ShareModule {
}
