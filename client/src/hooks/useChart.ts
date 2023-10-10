import { useEffect } from 'react';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';

export const useChart = (
  newData: string[],
  targetRef: React.RefObject<HTMLCanvasElement>,
) => {
  useEffect(() => {
    if (!targetRef) return;
    const canvas = targetRef.current as ChartItem;
    const data: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['Hp', 'Attack', 'Defense', 'Spattack', 'Spdefense', 'Speed'],
        datasets: [
          {
            label: 'status',
            data: newData.map(Number),
            backgroundColor: [
              '#d2381d',
              '#2b7fd3',
              '#d1a72a',
              '#5da042',
              '#8b457d',
              '#d2477f',
            ],
            hoverOffset: 30,
          },
        ],
      },
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    };
    const chart = new Chart(canvas, data);
    return () => chart.destroy();
  }, [targetRef, newData]);
};
