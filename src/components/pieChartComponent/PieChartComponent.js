import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


function PieChartComponent({
    
  labels, //= ["2010", "2012", "2014", "2016", "2018"],
  datasets /*= [
    {
      data: [2000, 4000, 2300, 2222, 3333],
      backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"]
    }
  ]*/
}) {
  return (
    <Pie
      data={{
        labels: labels,
        datasets: datasets
      }}
    />
  );
}

export default PieChartComponent;
