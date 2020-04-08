import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Growth by Region'
      },
     
      tooltip: {
        split: true,
        outside: true
      },legend:{
        enabled:false
      },
      exporting: {
        enabled: true
      }, credits: {
        enabled: false
      },

      series: [{
        data: [71, 66, 44, 71]
      }]
    };

    HC_exporting(this.Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resze')
      )
    }, 300);
  }

}
