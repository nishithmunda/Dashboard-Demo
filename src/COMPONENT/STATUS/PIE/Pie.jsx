import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
//   labels: ['Purple', 'Blue', 'Yellow', 'Green', 'Red', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [30,50,70],
      backgroundColor: [
        '#9871ef',
        '#2d9cfc',
        '#fb515f',
      ],
      borderColor: [
        '#9871ef',
        '#2d9cfc',
        '#fb515f',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (

    <Doughnut data={data} options={{ maintainAspectRatio: false }} />

);

export default DoughnutChart;