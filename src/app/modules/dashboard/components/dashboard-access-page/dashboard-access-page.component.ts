import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../../share/service/core/loading.service";
import {CoreService} from "../../../share/service/core/core.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../share/service/local/token.service";
import {DealerService} from "../../../share/service/dealer/dealer.service";
import {CommonSnackBarServiceService} from "../../../share/service/core/common-snack-bar-service.service";
import {Store} from "@ngrx/store";
import {saveDealerBasicData} from "../../../share/state/dashboard/dealer/DealerBasicDetails.actions";

@Component({
  selector: 'app-dashboard-access-page',
  templateUrl: './dashboard-access-page.component.html',
  styleUrls: ['./dashboard-access-page.component.scss']
})
export class DashboardAccessPageComponent implements OnInit {

  errorState = false;
  errorMessage = '';
  createNewAccountState = false;
  bothAccessState = false;


  constructor(
    private store: Store<{
      dealerBasicDetailsState: {
        accountType: string,
        avatar: string,
        dealerLevel: string,
        fullName: string,
        registerDate: Date |null,
        verifiedState: boolean
      }
    }>,
    private commonSnackBarService: CommonSnackBarServiceService,private tokenService: TokenService, private router:Router, public loadingService: LoadingService, private coreService: CoreService, private dealerService:DealerService) {
  }

  ngOnInit(): void {
    this.errorState = false;
    this.createNewAccountState = false;
    this.bothAccessState = false;
    this.coreService.isAvailableForDashboard().subscribe(response => {
      console.log(response);
      const dataSet = response.data;
      if (response.code === 200) {
        if (!dataSet.dealerAccountState && !dataSet.developerAccountState) {
          this.errorState = true;
          this.createNewAccountState = true;
          this.errorMessage = 'We can\'t find any Details associated with this user!';
          return;
        }

        if (dataSet.dealerAccountState && dataSet.developerAccountState) {
          // load both
          this.bothAccessState = true;
          return;
        }
        if (dataSet.dealerAccountState) {
          // load dealer
          this.dealerService.authenticateDealerForAccess().subscribe(responseData=>{
            console.log(responseData)

            let dealerData = {
              accountType: responseData.responseData,
              avatar: responseData.data?.avatar,
              dealerLevel: responseData.data?.dealerLevel,
              fullName: responseData.data?.fullName,
              registerDate: responseData.data?.registerDate,
              verifiedState: responseData.data?.verifiedState
            }
            this.store.dispatch(saveDealerBasicData({dataSet: dealerData}));
            this.router.navigate(['/dashboard/dealer'])
            return;
          }, error => {
            if (error.status===423){
              this.router.navigate(['/dashboard/blocked']);
              this.openSnackBar(error.error.message,'Close',5000,'warning-snack-bar-common')
              return;
            }else if(error.status===503){
              this.router.navigate(['/dashboard/dashboard-access-verify']);
              this.openSnackBar(error.error.message,'Close',5000,'warning-snack-bar-common')
              return;
            }
          })
          return;
        }
        if (dataSet.developerAccountState) {
          // load developer
          this.router.navigate(['/dashboard/developer'])
          return;
        }

      }
    }, error => {
      this.tokenService.removeDashBoardToken();
      this.router.navigate(['/home/auth/login']);
      /*this.errorState = true;
      this.errorMessage = 'Something went wrong, please try again!';*/
    })
  }

  openSnackBar(message: string, action: string,time:number,errorType:string) {
    this.commonSnackBarService.trigger(message, action, [
      time, errorType,
      'end',
      'top'
    ]);
  }

}
