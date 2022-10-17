import React from 'react';
import {
  ArcElement,
  Tooltip,
  LinearScale,
  PointElement,
  Chart as ChartJS,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, LinearScale, PointElement);

const PieChart = ({ country, setCountry, chosenCountry, setChosenCountry }) => {
  const labels = ['Population', 'Cases', 'Recovered', 'Deaths'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: chosenCountry.response
          ? chosenCountry.response[0].country
          : 'USA',
        data: [
          chosenCountry.response
            ? chosenCountry.response[0].population
            : 'Population',
          chosenCountry.response
            ? chosenCountry.response[0].cases.total
            : 'Cases',
          chosenCountry.response
            ? chosenCountry.response[0].cases.recovered
            : 'Recovered',
          chosenCountry.response
            ? chosenCountry.response[0].deaths.total
            : 'Deaths',
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    legend: {
      labels: {
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div>
      <Pie options={options} height={400} width={600} data={data} />
    </div>
  );
};

export default PieChart;
