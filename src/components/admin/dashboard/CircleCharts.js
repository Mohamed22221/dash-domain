import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

export class CircleCharts extends React.Component {
 constructor(props) {
  super(props);

  this.state = {

   series: [44, 55, 30],
   options: {
    chart: {

     type: 'pie',

    },
    labels: ['Shared host', 'Decatied host', 'VPS host'],
    responsive: [{
     breakpoint: 580,
     options: {
      chart: {
       width: 300,

      },
      
      legend: {
       position: 'bottom'
       
      }
     }
    },
    {
     breakpoint: 1300,
     options: {
      chart: {
       width: 370,

      },
      
      legend: {
       position: 'bottom'
       
      }
     }
    }],
    colors:["#FBA30D", "#2A2E33", "#E4857F"]

   },


  };
 }



 render() {
  return (


   <div id="chart" className="circle">
    <ReactApexChart  options={this.state.options} series={this.state.series} type="pie" width={440}  />
   </div>


  );
 }
}