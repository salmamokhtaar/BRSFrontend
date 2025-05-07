import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const BusinessChart = () => {
    const data = {
        labels: [
            'Sole Proprietorship',
            'Partnership',
            'Limited Liability Company (LLC)',
            'Corporation',
            'Non-Profit Organization'
        ],
        datasets: [
            {
                data: [30, 20, 25, 15, 10], // Example percentages
                backgroundColor: [
                    'rgba(76, 175, 80, 0.8)',  // Green
                    'rgba(244, 67, 54, 0.8)',  // Red
                    'rgba(33, 150, 243, 0.8)',  // Blue
                    'rgba(156, 39, 176, 0.8)',  // Purple
                    'rgba(255, 152, 0, 0.8)',  // Orange
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(244, 67, 54, 1)',
                    'rgba(33, 150, 243, 1)',
                    'rgba(156, 39, 176, 1)',
                    'rgba(255, 152, 0, 1)',
                ],
                borderWidth: 1,
                hoverOffset: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10,
                    padding: 10,
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
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 800
        }
    };

    return (
        <div className="h-full flex flex-col">
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default BusinessChart;
