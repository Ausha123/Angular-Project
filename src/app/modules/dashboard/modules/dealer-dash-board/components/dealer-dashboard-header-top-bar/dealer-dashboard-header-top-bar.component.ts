import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {TokenService} from "../../../../../share/service/local/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../../../../share/service/user.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dealer-dashboard-header-top-bar',
  templateUrl: './dealer-dashboard-header-top-bar.component.html',
  styleUrls: ['./dealer-dashboard-header-top-bar.component.scss'],
  animations: [
    trigger('searchSlider', [
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate('0.2s')
      ]),
      transition('* => void', [
        animate('0.2s', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class DealerDashboardHeaderTopBarComponent implements OnInit {


  searchVisibleState = false;
  searchVisibleVerifyState = false;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(window.innerWidth)
    if (window.innerWidth >= 755) {
      this.searchVisibleState = true;
    } else if (window.innerWidth <= 754) {
      if (!this.searchVisibleVerifyState) {
        this.searchVisibleState = false;
      }
    }
  }

  @Output()
  slideEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private store: Store<{
    dealerBasicDetailsState: {
      accountType: string,
      avatar: string,
      dealerLevel: string,
      fullName: string,
      registerDate: Date | null,
      verifiedState: boolean
    }
  }>, private tokenService: TokenService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadUserName();
    if (window.innerWidth >= 755) {
      this.searchVisibleState = true;
    }
  }

  userName: string = '';
  avatar: string = 'https://firebasestorage.googleapis.com/v0/b/seekerscloud-official-website.appspot.com/o/e-dealers%2FE-Dealers%20(w)-01.jpg?alt=media&token=dc440e01-d093-4331-ba9a-ca84d136092f';

  private loadUserName() {
    this.store.select('dealerBasicDetailsState').subscribe(stateData => {
      if (!stateData?.verifiedState) {
        this.router.navigate(['/dashboard/loading-admin-panel']);
        return;
      }
      this.userName=stateData?.fullName;
      this.avatar=stateData?.avatar.toString().length>0?stateData?.avatar:this.avatar;
    });
  }

  slide() {
    this.slideEmitter.emit();
  }

  toggleSearch() {
    if (window.innerWidth <= 754) {
      this.searchVisibleState = !this.searchVisibleState;
      this.searchVisibleVerifyState = !this.searchVisibleVerifyState;
    }
  }

  signOut() {
    this.tokenService.removeDashBoardToken();
    location.reload();
  }
}
