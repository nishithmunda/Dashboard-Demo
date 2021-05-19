import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
  datasets: [
    {
      label: 'Application Received',
      data: [12, 19, 3, 5, 2, 5],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
   maintainAspectRatio: false 
};

const MultiAxisLine = () => (

    <Line data={data} options={options} />

);

export default MultiAxisLine;