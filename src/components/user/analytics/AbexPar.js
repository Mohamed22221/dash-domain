import React, { Component } from "react";
import Chart from "react-apexcharts";

class AbexPar extends Component {
  constructor(props) {
    super(props);

    this.state = {
     options : {
      chart: {
        type: 'bar'
      },
      plotOptions: {
       bar: {
         borderRadius: 10,
         distributed: true
         
       }
       
     },
     fill: {
      colors: ['#FBA30D' ,"#2A2E33" ,'#FBA30D' ,"#2A2E33",'#FBA30D' ,"#2A2E33"],
      opacity: 1,
      type: 'solid',
      pattern: {
          style: 'verticalLines',
          width: 2,
          height: 4,
          strokeWidth: 1,
      },
    },

      series: [{
        data: [{
          x: 'category A',
          y: 10
        }, {
          x: 'category B',
          y: 18
        }, {
          x: 'category C',
          y: 13
        }]
      }]
      
    },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="abex-par">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AbexPar;
