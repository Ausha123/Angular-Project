import {Component, OnInit} from '@angular/core';
import ProvideDataSource from "../../../../../../share/data/local/ProvideDataSource";
import ProvidedSoftwareDTO from "../../../../../../share/dto/core/ProvidedSoftwareDTO";

@Component({
  selector: 'app-provided-applications',
  templateUrl: './provided-applications.component.html',
  styleUrls: ['./provided-applications.component.scss']
})
export class ProvidedApplicationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  dataSet: ProvidedSoftwareDTO[] = new ProvideDataSource().getAllData();

  myCarouselOptions = {
    items: 5,
    dots: true,
    nav: false,
    navText: "",
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      430: {
        items: 2,
        nav: true
      },
      645: {
        items: 3,
        nav: true
      },
      860: {
        items: 4,
        nav: true
      },
      1075: {
        items: 5,
        nav: true
      },
      1300: {
        items: 6,
        nav: true
      }
    }
  };


  openYoutube() {
    window.open("https://www.youtube.com/channel/UCEPAuwKVNX9nO3A3xYXdHPg", "_blank");
  }

  navigateToUrl(link: any) {
    window.open(link, "_blank");
  }
}
