import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {MainPageComponent} from "./components/core/main-page/main-page.component";
import {ServicesPageComponent} from "./components/core/services-page/services-page.component";
import {AboutPageComponent} from "./components/core/about-page/about-page.component";
import {ContactUsPageComponent} from "./components/core/contact-us-page/contact-us-page.component";
import {ProjectTrackComponent} from "./components/core/project-track/project-track.component";
import {WhatDoWeDoComponent} from "./components/core/what-do-we-do/what-do-we-do.component";
import {KnowladgeCenterComponent} from "./components/core/knowladge-center/knowladge-center.component";
import {OverViewComponent} from "./components/core/over-view/over-view.component";
import {LegalComponent} from "./components/core/legal/legal.component";
import {MakeMoneyWithUsComponent} from "./components/core/make-money-with-us/make-money-with-us.component";
import {SystemDevelopmentComponent} from "./components/core/system-development/system-development.component";
import {RegisterMainPageComponent} from "./components/register-main-page/register-main-page.component";
import {LoginContextComponent} from "./components/core/auth/login-context/login-context.component";
import {LoginPageComponent} from "./components/core/auth/login-page/login-page.component";
import {ForgetPasswordComponent} from "./components/core/auth/forget-password/forget-password.component";
import {ForgetPasswordSuccessComponent} from "./components/core/auth/forget-password-success/forget-password-success.component";
import {ResetPasswordComponent} from "./components/core/auth/reset-password/reset-password.component";
import {LoggedAuthGuard} from "../share/guards/logged-auth.guard";
import {TermsComponent} from "./components/core/terms/terms.component";
import {DeveloperRegistrationComponent} from "./components/register-main-page/developer-registration/developer-registration.component";
import {DealerRegistrationComponent} from "./components/register-main-page/dealer-registration/dealer-registration.component";
import {SignupPageComponent} from "./components/core/auth/signup-page/signup-page.component";
import {VerifyUserAccountPageComponent} from "./components/core/auth/verify-user-account-page/verify-user-account-page.component";
import {RequestVerifyUserAccountPageComponent} from "./components/core/auth/request-verify-user-account-page/request-verify-user-account-page.component";
import {SignupConfirmationPageComponent} from "./components/core/auth/signup-confirmation-page/signup-confirmation-page.component";
import {DashboardLoggedGuard} from "../share/guards/dashboard-logged.guard";
import {YourAccountMainPageComponent} from "./components/your-account-main-page/your-account-main-page.component";
import {ManageAccountDetailsContextComponent} from "./components/manage-account-details-context/manage-account-details-context.component";
import {PersonalDetailsManagePageComponent} from "./components/manage-account-details-context/inner-items/personal-details-manage-page/personal-details-manage-page.component";
import {SecurityDetailsManagePageComponent} from "./components/manage-account-details-context/inner-items/security-details-manage-page/security-details-manage-page.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', redirectTo: '/home/main', pathMatch: 'full'},
      {path: 'main', component: MainPageComponent},
      {path: 'service', component: ServicesPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'contact', component: ContactUsPageComponent},
      {path: 'system-development', component: SystemDevelopmentComponent},
      {path: 'make-money-with-us', component: MakeMoneyWithUsComponent},
      {path: 'terms-conditions', component: TermsComponent},
      {path: 'privacy-policy', component: LegalComponent},
      {path: 'overview', component: OverViewComponent},
      {path: 'knowledge-center', component: KnowladgeCenterComponent},
      {path: 'what-do-we-do', component: WhatDoWeDoComponent},
      {path: 'register', component: RegisterMainPageComponent, canActivate: [DashboardLoggedGuard]},
      {path: 'developer-registration', canActivate: [DashboardLoggedGuard], component: DeveloperRegistrationComponent},
      {path: 'dealer-registration', canActivate: [DashboardLoggedGuard], component: DealerRegistrationComponent},
      {path: 'my-account', canActivate: [DashboardLoggedGuard], component: YourAccountMainPageComponent},
      {
        path: 'my-account/manage',
        canActivate: [DashboardLoggedGuard],
        component: ManageAccountDetailsContextComponent,
        children: [
          {path: '', redirectTo: 'my-account/manage/personal-details'},
          {path: 'personal-details', component: PersonalDetailsManagePageComponent},
          {path: 'security', component: SecurityDetailsManagePageComponent}
        ]
      },
      {
        path: 'auth', component: LoginContextComponent, children: [
          {path: '', redirectTo: '/home/auth/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent, canActivate: [LoggedAuthGuard]},
          {path: 'forgot-password', component: ForgetPasswordComponent},
          {path: 'forgot-password-success', component: ForgetPasswordSuccessComponent},
          {path: 'signup', component: SignupPageComponent},
          {path: 'signup-confirmation', component: SignupConfirmationPageComponent},
          {path: 'request-user-verification-token', component: RequestVerifyUserAccountPageComponent},
          {path: 'verify-user-account/:token', component: VerifyUserAccountPageComponent},
          {path: 'reset-password/:token', component: ResetPasswordComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
