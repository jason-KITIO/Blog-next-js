// components/CustomChart.tsx

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CustomChart: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<Chart | null>(null); // Référence pour stocker l'instance du graphique

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            const gradient = ctx!.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#D9D9D9');
            gradient.addColorStop(1, '#060416');

            // Si une instance de graphique existe déjà, la détruire
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            // Créer une nouvelle instance de graphique
            chartRef.current = new Chart(ctx!, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Post',
                        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                        backgroundColor: gradient,
                        borderWidth: 1,
                        borderRadius: 8,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Nettoyage lors du démontage du composant
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <canvas ref={canvasRef} width="500" height="220"></canvas>
        </div>
    );
};

export default CustomChart;
