import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import CountriesDataSource from "../../../../share/data/local/CountriesDataSource";
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {CommonSnackBarServiceService} from "../../../../share/service/core/common-snack-bar-service.service";
import {SearchCountryField, CountryISO, PhoneNumberFormat} from 'ngx-intl-tel-input';
import {RegistrationService} from "../../../../share/service/core/registration.service";
import {LoadingService} from "../../../../share/service/core/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dealer-registration',
  templateUrl: './dealer-registration.component.html',
  styleUrls: ['./dealer-registration.component.scss']
})
export class DealerRegistrationComponent implements OnInit {
  countryList: Array<any> = new CountriesDataSource().getAllData();

  constructor(private router:Router, public loadingService: LoadingService, private registrationService: RegistrationService, private commonSnackBarServiceService: CommonSnackBarServiceService) {
  }

  filteredCountries: any[] = [];

  ngOnInit(): void {
    this.countryForm.valueChanges.pipe().subscribe(data => {
      this._filter(data.country);
    })
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredCountries = this.countryList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  dealerForm = new FormGroup({
    fullName: new FormControl(null, [Validators.required]),
    nic: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    littleAbout: new FormControl(null),
    city: new FormControl(null, [Validators.required]),
    postal: new FormControl(null),
    address: new FormControl(null, [Validators.required]),
  });
  contactEmailForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  })
  contactForm = new FormGroup({
    contact: new FormControl(null, [Validators.required])
  });
  countryForm = new FormGroup({
    country: new FormControl(null, [Validators.required, Validators.maxLength(100)])
  });

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;

  preferredCountries: CountryISO[] = [CountryISO.UnitedStates,
    CountryISO.UnitedKingdom
  ];

  emailsArray: string[] = [];
  contactArray: any[] = [];


  addEmail() {
    if (this.contactEmailForm.invalid) {
      this.openSnackBar('Please insert a valid email!', 'Close', 'warning-snack-bar-common', 5000);
      return;
    }
    let email = this.contactEmailForm.get('email')?.value.toString().trim();
    if (this.ifExistsEmail(email)) {
      this.openSnackBar('Already exists this email!', 'Close', 'warning-snack-bar-common', 5000);
      return;
    } else {
      this.emailsArray.push(email);
    }

  }

  ifExistsEmail(email: string): boolean {
    for (const tempEmail of this.emailsArray) {
      if (tempEmail === email) {
        return true;
      }
    }
    return false;
  }

  addContact() {
    if (this.contactForm.invalid) {
      this.openSnackBar('Please insert a valid Contact!', 'Close', 'waring-snack-bar-common', 5000);
      return;
    }
    let contact = this.contactForm.get('contact')?.value;
    if (this.ifExistsContact(contact.e164Number)) {
      this.openSnackBar('Already exists this email!', 'Close', 'waring-snack-bar-common', 5000);
      return;
    } else {
      this.contactArray.push(contact);
    }

  }

  ifExistsContact(contact: string): boolean {
    for (const tempContact of this.contactArray) {
      if (tempContact.e164Number === contact) {
        return true;
      }
    }
    return false;
  }

  clearFields(formDirective: FormGroupDirective): void {
    formDirective.resetForm(); // Reset the ugly validators
  }

  openSnackBar(message: string, action: string, type: string, time: number) {
    this.commonSnackBarServiceService.trigger(message, action, [
      time, type,
      'end',
      'top'
    ]);
  }

  removeEmail(index: number) {
    this.emailsArray.splice(index, 1);
  }

  removeContact(index: number) {
    this.contactArray.splice(index, 1);
  }

  registerDealer() {

    if (this.contactArray.length === 0) {
      if (this.contactForm.invalid) {
        this.openSnackBar('At least one contact number is required!', 'Close', 'warning-snack-bar-common', 5000);
        return;
      } else {
        this.addContact();
      }
    }
    if (this.emailsArray.length === 0) {
      if (this.contactEmailForm.invalid) {
        this.openSnackBar('At least one Email is required!', 'Close', 'warning-snack-bar-common', 5000);
        return;
      } else {
        this.addEmail();
      }
    }

    let fullName = this.dealerForm.get('fullName')?.value.toString().trim();
    let nic = this.dealerForm.get('nic')?.value.toString().trim();
    let gender = this.dealerForm.get('gender')?.value.toString().trim();
    let littleAbout = this.dealerForm.get('littleAbout')?.value.toString().trim();
    let country = this.dealerForm.get('country')?.value.toString().trim();
    let city = this.dealerForm.get('city')?.value.toString().trim();
    let postal = this.dealerForm.get('postal')?.value.toString().trim();
    let address = this.dealerForm.get('address')?.value.toString().trim();

    const addressData = {
      country: country,
      city: city,
      postal: postal,
      address: address
    }

    const obj = {
      contactEmails: this.emailsArray,
      contactNumbers: this.contactArray,
      fullName: fullName,
      nic: nic,
      gender: gender,
      littleAbout: littleAbout,
      address: addressData
    }
    this.registrationService.registerDealer(obj).subscribe(response => {
      if (response.code===201){
        this.router.navigate(['/dashboard/dashboard-access-verify']);
        this.openSnackBar('Welcome aboard! please wait until the Account Verification process has been done.', 'Close', 'success-snack-bar-common', 5000);
      }
    }, error => {
      if (error.status===409){
        console.log(error)
        this.openSnackBar(error.error.message, 'Close', 'warning-snack-bar-common', 5000);
        return;
      }else{
        this.openSnackBar('Please sign up or login!', 'Close', 'warning-snack-bar-common', 5000);
        return;
      }

    })
  }
}
