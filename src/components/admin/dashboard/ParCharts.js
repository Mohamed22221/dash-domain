import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";


export class ParCharts extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
    
   
     series: [{
       name: 'Net Profit',
       data: [44, 55, 57, 56, 61, 58, 63, 60, 66] ,


     }, {
       name: 'Revenue',
       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],

     }],

     options: {
       chart: {
         type: 'bar',
         height: 350
       },
       plotOptions: {
         bar: {
           horizontal: false,
           columnWidth: '50%',
           endingShape: 'rounded'
         },
       },
       dataLabels: {
         enabled: false
       },
       stroke: {
         show: true,
         width: 2,
         colors: ['transparent']
       },
       xaxis: {
         categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
       },
       yaxis: {
         title: {
           text: '$ (thousands)'
         }
       },
       fill: {
        colors: ['#FBA30D' ,"#2A2E33" ,'#FBA30D' ,"#2A2E33",'#FBA30D' ,"#2A2E33"],
        opacity: 1,

      },
       tooltip: {
         y: {
           formatter: function (val) {
             return "$ " + val + " thousands"
           }
         }
       }
     },
     title: {
      text: 'Color '
    },
   
   
   };
 }



 render() {
   return (
     

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={270}  />
</div>


   );
 }
}

