import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-do-we-process',
  templateUrl: './how-do-we-process.component.html',
  styleUrls: ['./how-do-we-process.component.scss']
})
export class HowDoWeProcessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    scroll(element: any){
      window.scrollTo({
        behavior: 'smooth'
      })
    }

}
