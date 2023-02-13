import { Component, OnInit } from '@angular/core';
import {CommonSnackBarServiceService} from "../../service/core/common-snack-bar-service.service";
import {InquiriesService} from "../../service/inquiries.service";
import {LoadingService} from "../../service/core/loading.service";
import CountriesDataSource from "../../data/local/CountriesDataSource";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

import {SearchCountryField, CountryISO, PhoneNumberFormat} from 'ngx-intl-tel-input';


@Component({
  selector: 'app-making-inquiry',
  templateUrl: './making-inquiry.component.html',
  styleUrls: ['./making-inquiry.component.scss']
})
export class MakingInquiryComponent implements OnInit {



  constructor(public dialog: MatDialog, private commonSnackBarServiceService:CommonSnackBarServiceService,private inquiryService: InquiriesService, public loadingService: LoadingService) {
  }
  filteredCountries: any[]=[];
  ngOnInit(): void {
    this.countryForm.valueChanges.pipe().subscribe(data=>{
      this._filter(data.country);
    })
  }
  private _filter(value: string){
    const filterValue = value.toLowerCase();
    this.filteredCountries = this.countryList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  webState = false;
  mobileState = false;
  otherState = false;
  countryList: Array<any> = new CountriesDataSource().getAllData();

  setType(type: string) {
    this.webState = false;
    this.mobileState = false;
    this.otherState = false;
    if (type === 'WEB') {
      this.webState = true;
    }
    if (type === 'MOBILE') {
      this.mobileState = true;
    }
    if (type === 'OTHER') {
      this.otherState = true;
    }
  }


  inquiryForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    contact: new FormControl(null, [Validators.required])
  });
  countryForm = new FormGroup({
    country: new FormControl(null, [Validators.required, Validators.maxLength(100)])
  });

  mainButtonLoadingState: boolean = true;
  errorState: boolean = false;
  errorMessage: string = 'Something went wrong! please try again shortly.';


  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];

  submitData(formDirective: FormGroupDirective) {
    let applicationType = 'OTHER';
    if (this.webState) {
      applicationType = 'Web Application';
    }
    if (this.mobileState) {
      applicationType = 'Mobile Application';
    }

    let email = this.inquiryForm.get('email')?.value;
    let name = this.inquiryForm.get('name')?.value;
    let contact = this.inquiryForm.get('contact')?.value;
    let country = this.inquiryForm.get('country')?.value;

    this.inquiryForm.reset(); // Reset form data
    formDirective.resetForm(); // Reset the ugly validators
    this.errorState=false;
    this.inquiryService.makeInquiry(
      email,
      name,
      contact,
      country,
      applicationType,
      'SPINNER'
    ).subscribe(response => {
      this.dialog.closeAll();
      this.openSnackBar('Thank You! we will contact you immediately..', 'close')
    }, error => {
      this.errorState=true;
      this.inquiryForm.patchValue({
        email,
        name,
        contact,
        country
      })
      if (error.status===409){
        this.errorMessage='Already you have requested with this Email! we will contact you immediately..'
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.commonSnackBarServiceService.trigger(message, action,[
      10000,'success-snack-bar-common',
      'end',
      'top'
    ]);
  }
}
