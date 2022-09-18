import ReactApexChart from "react-apexcharts";
import React from "react";
class RedialBar extends React.Component {
 constructor(props) {
  super(props);

  this.state = {

   series:[props.percentage] ,
   options: {chart: { height: 150,type: 'radialBar',},
     plotOptions: {
     radialBar: {
      hollow: {
       size: '60%',
       width: '100%'
      }
     },
    },
    labels: [props.name],
    colors: [ '#FF9800']
   },


  };
 }



 render() {
  return (


   <div id="chart" className="redial-bar">
    <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
   </div>


  );
 }
}
export default RedialBar