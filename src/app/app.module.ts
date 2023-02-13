import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpManagerInterceptor} from "./modules/share/intercepters/http-manager.interceptor";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FacebookModule} from "ngx-facebook";
import {NgApexchartsModule} from "ng-apexcharts";
import {AgmCoreModule} from "@agm/core";
import {RouterModule} from "@angular/router";
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {dealerBasicDataMainReducer} from "./modules/share/state/dashboard/dealer/DealerBasicDetails.reducer";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    FacebookModule.forRoot(),
    NgApexchartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBImn5OqadqokIIfmKrzd6yqQ9KbRzm2Tk'
    }),
    TooltipModule.forRoot(),
    StoreModule.forRoot({
      dealerBasicDetailsState: dealerBasicDataMainReducer
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpManagerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
