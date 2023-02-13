import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MainHeaderComponent} from './components/main-header/main-header.component';
import {MainFooterComponent} from './components/main-footer/main-footer.component';
import {MainPageComponent} from './components/core/main-page/main-page.component';
import {MainPageSliderComponent} from './components/core/main-page/inner-items/main-page-slider/main-page-slider.component';
import {MainPageInquiryWidgetComponent} from './components/core/main-page/inner-items/main-page-inquiry-widget/main-page-inquiry-widget.component';
import {ProvidedApplicationsComponent} from './components/core/main-page/inner-items/provided-applications/provided-applications.component';
import {IntroductionOuterComponent} from './components/core/main-page/inner-items/introduction-outer/introduction-outer.component';
import {IntroductionVideoComponent} from './components/core/main-page/inner-items/introduction-outer/items/introduction-video/introduction-video.component';
import {MainBenefitsComponent} from './components/core/main-page/inner-items/main-benefits/main-benefits.component';
import {HowDoWeProcessComponent} from './components/core/main-page/inner-items/how-do-we-process/how-do-we-process.component';
import {MainCounterOuterComponent} from './components/core/share/main-counter-outer/main-counter-outer.component';
import {WhoAreWeOuterComponent} from './components/core/main-page/inner-items/who-are-we-outer/who-are-we-outer.component';
import {ProcessVideoOuterComponent} from './components/core/share/process-video-outer/process-video-outer.component';
import {ClientFeedbacksComponent} from './components/core/share/client-feedbacks/client-feedbacks.component';
import {GettingStartedComponent} from './components/core/share/getting-started/getting-started.component';
import {ServicesPageComponent} from './components/core/services-page/services-page.component';
import {ServiceDescriptionMainPageComponent} from './components/core/services-page/inner-items/service-description-main-page/service-description-main-page.component';
import {ProvideServicesComponent} from './components/core/share/provide-services/provide-services.component';
import {AboutPageComponent} from './components/core/about-page/about-page.component';
import {AboutUsDescComponent} from './components/core/about-page/inner-items/about-us-desc/about-us-desc.component';
import {ServicesPageMainSliderComponent} from './components/core/services-page/inner-items/services-page-main-slider/services-page-main-slider.component';
import {AboutMainSliderComponent} from './components/core/about-page/inner-items/about-main-slider/about-main-slider.component';
import {WhyChooseUsPageComponent} from './components/core/share/why-choose-us-page/why-choose-us-page.component';
import {ContactUsPageComponent} from './components/core/contact-us-page/contact-us-page.component';
import {GetInTouchWidgetComponent} from './components/core/contact-us-page/inner-items/get-in-touch-widget/get-in-touch-widget.component';
import {ContactUsMainSliderComponent} from './components/core/contact-us-page/inner-items/contact-us-main-slider/contact-us-main-slider.component';
import {MapOuterComponent} from './components/core/contact-us-page/inner-items/map-outer/map-outer.component';
import {SystemDevelopmentComponent} from './components/core/system-development/system-development.component';
import {MakeMoneyWithUsComponent} from './components/core/make-money-with-us/make-money-with-us.component';
import {LegalComponent} from './components/core/legal/legal.component';
import {OverViewComponent} from './components/core/over-view/over-view.component';
import {KnowladgeCenterComponent} from './components/core/knowladge-center/knowladge-center.component';
import {WhatDoWeDoComponent} from './components/core/what-do-we-do/what-do-we-do.component';
import {ProjectTrackComponent} from './components/core/project-track/project-track.component';
import {SystemDevelopmentMainSliderComponent} from './components/core/system-development/inner-items/system-development-main-slider/system-development-main-slider.component';
import {AboutSystemDevelopmentComponent} from './components/core/system-development/inner-items/about-system-development/about-system-development.component';
import {OurExperiencesComponent} from './components/core/system-development/inner-items/our-experiences/our-experiences.component';
import {SystemDevGetStartedComponent} from './components/core/system-development/inner-items/system-dev-get-started/system-dev-get-started.component';
import {MakeMoneyWithUsMainSliderComponent} from './components/core/make-money-with-us/inner-items/make-money-with-us-main-slider/make-money-with-us-main-slider.component';
import {HowCanYouEarnComponent} from './components/core/make-money-with-us/inner-items/how-can-you-earn/how-can-you-earn.component';
import {WhyUsComponent} from './components/core/make-money-with-us/inner-items/why-us/why-us.component';
import {EarningProcessComponent} from './components/core/make-money-with-us/inner-items/earning-process/earning-process.component';
import {EarningWorldMapComponent} from './components/core/make-money-with-us/inner-items/earning-world-map/earning-world-map.component';
import {OverviewMainSliderComponent} from './components/core/over-view/inner-items/overview-main-slider/overview-main-slider.component';
import {OverviewMainBenefitsComponent} from './components/core/over-view/inner-items/overview-main-benefits/overview-main-benefits.component';
import {OverviewMainDescriptionComponent} from './components/core/over-view/inner-items/overview-main-description/overview-main-description.component';
import {OverviewTeamWorkComponent} from './components/core/over-view/inner-items/overview-team-work/overview-team-work.component';
import {KnowledgeCenterMainSliderComponent} from './components/core/knowladge-center/inner-items/knowledge-center-main-slider/knowledge-center-main-slider.component';
import {KnowledgeCenterMainEntryPointsComponent} from './components/core/knowladge-center/inner-items/knowledge-center-main-entry-points/knowledge-center-main-entry-points.component';
import {KnowledgeCenterLatestArticlesComponent} from './components/core/knowladge-center/inner-items/knowledge-center-latest-articles/knowledge-center-latest-articles.component';
import {KnowledgeCenterFAQComponent} from './components/core/knowladge-center/inner-items/knowledge-center-faq/knowledge-center-faq.component';
import {KnowledgeCenterNeedSupportComponent} from './components/core/knowladge-center/inner-items/knowledge-center-need-support/knowledge-center-need-support.component';

import {CarouselModule} from "ngx-owl-carousel-o";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

import {WhatDoWeDoMarketingComponent} from './components/core/what-do-we-do/inner-items/what-do-we-do-marketing/what-do-we-do-marketing.component';
import {WhatDoWeDoDesignConceptComponent} from './components/core/what-do-we-do/inner-items/what-do-we-do-design-concept/what-do-we-do-design-concept.component';
import {WhatDoWeDoAboutComponent} from './components/core/what-do-we-do/inner-items/what-do-we-do-about/what-do-we-do-about.component';
import {OverviewServicesComponent} from './components/core/share/overview-services/overview-services.component';
import {MatTabsModule} from "@angular/material/tabs";
import {WhatDoWeDoMainSliderComponent} from './components/core/what-do-we-do/inner-items/what-do-we-do-main-slider/what-do-we-do-main-slider.component';
import {OwlModule} from "ngx-owl-carousel";
import {MatMenuModule} from "@angular/material/menu";
import {MainContactItemComponent} from './components/core/share/main-contact-item/main-contact-item.component';
import {RegisterMainPageComponent} from './components/register-main-page/register-main-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShareModule} from "../share/share.module";
import {OverviewPopupModelFirstComponent} from './components/core/over-view/inner-items/overview-main-benefits/inner-items/overview-popup-model-first/overview-popup-model-first.component';
import {OverviewPopupModelSecondComponent} from './components/core/over-view/inner-items/overview-main-benefits/inner-items/overview-popup-model-second/overview-popup-model-second.component';
import {OverviewPopupModelThirdComponent} from './components/core/over-view/inner-items/overview-main-benefits/inner-items/overview-popup-model-third/overview-popup-model-third.component';
import {OverviewPopupModelFourthComponent} from './components/core/over-view/inner-items/overview-main-benefits/inner-items/overview-popup-model-fourth/overview-popup-model-fourth.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RegistrationMainSliderComponent} from './components/register-main-page/inner-items/registration-main-slider/registration-main-slider.component';
import {LoginPageComponent} from "./components/core/auth/login-page/login-page.component";
import {LoginContextComponent} from "./components/core/auth/login-context/login-context.component";
import {ForgetPasswordComponent} from './components/core/auth/forget-password/forget-password.component';
import {ForgetPasswordSuccessComponent} from './components/core/auth/forget-password-success/forget-password-success.component';
import {ResetPasswordComponent} from './components/core/auth/reset-password/reset-password.component';
import {EDealerProjectImageViewComponent} from './components/core/system-development/inner-items/system-dev-get-started/edealer-project-image-view/edealer-project-image-view.component';
import {TermsComponent} from './components/core/terms/terms.component';
import {AgmCoreModule} from "@agm/core";
import {StringDividerPipe} from './components/core/share/pipes/string-divider.pipe';
import {RegistrationSelectedFormComponent} from './components/register-main-page/inner-items/registration-selected-form/registration-selected-form.component';
import {DeveloperRegistrationComponent} from './components/register-main-page/developer-registration/developer-registration.component';
import {DealerRegistrationComponent} from './components/register-main-page/dealer-registration/dealer-registration.component';
import {MatChipsModule} from "@angular/material/chips";
import {SignupPageComponent} from './components/core/auth/signup-page/signup-page.component';
import {VerifyUserAccountPageComponent} from './components/core/auth/verify-user-account-page/verify-user-account-page.component';
import {RequestVerifyUserAccountPageComponent} from './components/core/auth/request-verify-user-account-page/request-verify-user-account-page.component';
import {SignupConfirmationPageComponent} from './components/core/auth/signup-confirmation-page/signup-confirmation-page.component';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { YourAccountMainPageComponent } from './components/your-account-main-page/your-account-main-page.component';
import { ManageAccountDetailsContextComponent } from './components/manage-account-details-context/manage-account-details-context.component';
import { PersonalDetailsManagePageComponent } from './components/manage-account-details-context/inner-items/personal-details-manage-page/personal-details-manage-page.component';
import { SecurityDetailsManagePageComponent } from './components/manage-account-details-context/inner-items/security-details-manage-page/security-details-manage-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainPageComponent,
    MainPageSliderComponent,
    MainPageInquiryWidgetComponent,
    ProvidedApplicationsComponent,
    IntroductionOuterComponent,
    IntroductionVideoComponent,
    MainBenefitsComponent,
    HowDoWeProcessComponent,
    MainCounterOuterComponent,
    WhoAreWeOuterComponent,
    ProcessVideoOuterComponent,
    ClientFeedbacksComponent,
    GettingStartedComponent,
    ServicesPageComponent,
    ServiceDescriptionMainPageComponent,
    ProvideServicesComponent,
    AboutPageComponent,
    AboutUsDescComponent,
    ServicesPageMainSliderComponent,
    AboutMainSliderComponent,
    WhyChooseUsPageComponent,
    ContactUsPageComponent,
    GetInTouchWidgetComponent,
    ContactUsMainSliderComponent,
    MapOuterComponent,
    SystemDevelopmentComponent,
    MakeMoneyWithUsComponent,
    LegalComponent,
    OverViewComponent,
    KnowladgeCenterComponent,
    WhatDoWeDoComponent,
    ProjectTrackComponent,
    SystemDevelopmentMainSliderComponent,
    AboutSystemDevelopmentComponent,
    OurExperiencesComponent,
    SystemDevGetStartedComponent,
    MakeMoneyWithUsMainSliderComponent,
    HowCanYouEarnComponent,
    WhyUsComponent,
    EarningProcessComponent,
    EarningWorldMapComponent,
    OverviewMainSliderComponent,
    OverviewMainBenefitsComponent,
    OverviewMainDescriptionComponent,
    OverviewTeamWorkComponent,
    KnowledgeCenterMainSliderComponent,
    KnowledgeCenterMainEntryPointsComponent,
    KnowledgeCenterLatestArticlesComponent,
    KnowledgeCenterFAQComponent,
    KnowledgeCenterNeedSupportComponent,
    WhatDoWeDoMarketingComponent,
    WhatDoWeDoDesignConceptComponent,
    WhatDoWeDoAboutComponent,
    OverviewServicesComponent,
    WhatDoWeDoMainSliderComponent,
    MainContactItemComponent,
    RegisterMainPageComponent,
    OverviewPopupModelFirstComponent,
    OverviewPopupModelSecondComponent,
    OverviewPopupModelThirdComponent,
    OverviewPopupModelFourthComponent,
    RegistrationMainSliderComponent,
    LoginPageComponent,
    LoginContextComponent,
    ForgetPasswordComponent,
    ForgetPasswordSuccessComponent,
    ResetPasswordComponent,
    EDealerProjectImageViewComponent,
    TermsComponent,
    StringDividerPipe,
    RegistrationSelectedFormComponent,
    DeveloperRegistrationComponent,
    DealerRegistrationComponent,
    SignupPageComponent,
    VerifyUserAccountPageComponent,
    RequestVerifyUserAccountPageComponent,
    SignupConfirmationPageComponent,
    YourAccountMainPageComponent,
    ManageAccountDetailsContextComponent,
    PersonalDetailsManagePageComponent,
    SecurityDetailsManagePageComponent
  ],
  exports: [
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    OwlModule,
    MatTabsModule,
    MatMenuModule,
    ReactiveFormsModule,
    ShareModule,
    MatDialogModule,
    AgmCoreModule,
    MatChipsModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ]
})
export class HomeModule {
}
