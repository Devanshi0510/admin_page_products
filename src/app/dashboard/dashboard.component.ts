import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

cards=[{
  title:"Sales",
  value:"2.382",
  below_val:"-3.65%",
  icon:"truck",
  text:"danger",
},
{

  title:"Earnings",
  value:"$21.300",
  below_val:"6.65%",
  icon:"users",
  text:"success",
},
{
  title:"Visitors",
  value:"14.212",
  below_val:"5.25%",
  icon:"dollar-sign",
  text:"success",
},
{

  title:"Orders",
  value:"64",
  below_val:"-2.25%",
  icon:"shopping-cart",
  text:"danger",}];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 1000, 2000, 3000,4000],
        label: 'Series C',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
