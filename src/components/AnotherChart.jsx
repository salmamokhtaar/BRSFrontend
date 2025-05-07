import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    Filler,
    Title
} from 'chart.js';

// Register the required components
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    Filler,
    Title
);

const AnotherChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sole Proprietorship',
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: 'rgba(76, 175, 80, 0.1)', // Green with transparency
                borderColor: 'rgba(76, 175, 80, 0.8)',
                borderWidth: 1.5,
                tension: 0.3,
                pointRadius: 2,
                pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                fill: true,
            },
            {
                label: 'Partnership',
                data: [2, 3, 20, 5, 1, 4, 8],
                backgroundColor: 'rgba(33, 150, 243, 0.1)', // Blue with transparency
                borderColor: 'rgba(33, 150, 243, 0.8)',
                borderWidth: 1.5,
                tension: 0.3,
                pointRadius: 2,
                pointBackgroundColor: 'rgba(33, 150, 243, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                fill: true,
            },
            {
                label: 'Limited Liability Company (LLC)',
                data: [3, 10, 13, 15, 22, 30, 25],
                backgroundColor: 'rgba(156, 39, 176, 0.1)', // Purple with transparency
                borderColor: 'rgba(156, 39, 176, 0.8)',
                borderWidth: 1.5,
                tension: 0.3,
                pointRadius: 2,
                pointBackgroundColor: 'rgba(156, 39, 176, 1)',
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                align: 'start',
                labels: {
                    boxWidth: 8,
                    padding: 8,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 10
                    },
                    color: '#666'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 11,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 10
                },
                padding: 8,
                cornerRadius: 4,
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false,
                },
                ticks: {
                    font: {
                        size: 9
                    },
                    color: '#666'
                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    font: {
                        size: 9
                    },
                    color: '#666'
                }
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        animation: {
            duration: 800
        }
    };

    return (
        <div className="h-full flex flex-col">
            <Line data={data} options={options} />
        </div>
    );
};

export default AnotherChart;