import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart() {
    return [{
      name: 'Asia',
      data: [500, 345, 234, 45, 345, 234, 546]
    },
    {
      name: 'USA',
      data: [500, 345, 234, 45, 345, 234, 546]
    },
    {
      name: 'Canada',
      data: [500, 345, 234, 45, 345, 234, 546]
    },
    {
      name: 'Sweden',
      data: [500, 345, 234, 45, 345, 234, 546]
    }];



  }

  cards() {
    return [71, 23, 56, 19];
  }

  pie(){
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }];
  }
}
