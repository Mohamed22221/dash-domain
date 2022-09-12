import React from 'react'
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
 CategoryScale,
 LinearScale,
 BarElement,
 Title,
 Tooltip,
 Legend
);

export const options = {
 responsive: true,
 plugins: {
   legend: {
     position: 'top' ,
   },

 },
};

const labels = ['01:00 pm', '03:00 pm', '06:00 pm', '08:00 pm', '12:00 am'];

export const data = {
 labels,
 datasets: [
   {
     label: 'Dataset 1',
     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
     backgroundColor: '#FBA30D',
   },
   {
     label: 'Dataset 2',
     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
     backgroundColor: '2A2E33',
   },
 ],
};
const BarChart = () => {
 
  return (
   <Bar options={options} data={data} />
  )
}

export default BarChart