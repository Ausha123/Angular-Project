import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-outer',
  templateUrl: './map-outer.component.html',
  styleUrls: ['./map-outer.component.scss']
})
export class MapOuterComponent implements OnInit {
  lat = 6.710454;
  lng = 79.903884;
  labelOptions = {
    color: '#2c3e50',
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'E-Dealers'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
