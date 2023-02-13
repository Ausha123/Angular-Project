import {Component, OnInit, ViewChild} from '@angular/core';
import {data} from "./data";
import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
};

@Component({
  selector: 'app-projects-server-cost',
  templateUrl: './projects-server-cost.component.html',
  styleUrls: ['./projects-server-cost.component.scss']
})
export class ProjectsServerCostComponent implements OnInit {

  @ViewChild("chart", {static: false}) chart: ChartComponent | any;
  public chartOptions!: Partial<ChartOptions> | any;
  public activeOptionButton = "all";
  public updateOptionsData: any = {
    "1m": {
      xaxis: {
        min: new Date("28 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "6m": {
      xaxis: {
        min: new Date("27 Sep 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1y": {
      xaxis: {
        min: new Date("27 Feb 2012").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    "1yd": {
      xaxis: {
        min: new Date("01 Jan 2013").getTime(),
        max: new Date("27 Feb 2013").getTime()
      }
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined
      }
    }
  };

  constructor() {
    this.initChart();
  }

  initChart(): void {
    this.chartOptions = {
      series: [
        {
          data: data as []
        }
      ],
      chart: {
        type: "area",
        height: 350
      },
      annotations: {
        yaxis: [
          {
            y: 30,
            borderColor: "red",
            label: {
              text: "Support",
              style: {
                color: "#fff",
                background: "red"
              }
            }
          }
        ],
        xaxis: [
          {
            x: new Date("14 Nov 2012").getTime(),
            borderColor: "white",
            label: {
              text: "Rally",
              style: {
                color: "#fff",
                background: "red"
              }
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime",
        min: new Date("01 Mar 2012").getTime(),
        tickAmount: 6
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      }
    };
  }

  horiRate = 7;
  vertRate = 1;
  squareRate = 3;
  movieRate = 2;
  customRate = 2;
  starRate = 4;

  public updateOptions(option: any): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }

  ngOnInit(): void {


  }

}
