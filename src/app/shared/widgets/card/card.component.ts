import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;

  Highcharts = Highcharts;
  chartOptions: {};

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      title: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      }, legend: {
        enabled: false
      },
      exporting: {
        enabled: true
      }, credits: {
        enabled: false
      }, xAxis: {
        label: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTrick: false,
        endOnTrick: false,
        trickOptions: []
      },
      series: [{
        data: [45, 66, 24, 71]
      }]
    };

    HC_exporting(this.Highcharts);
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resze')
      );
    }, 300);
  }

}
