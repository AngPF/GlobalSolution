import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useUserContext } from '../UserContext.jsx'

const GraficoMedicoes = ({ medicoes }) => {
    const { userData } = useUserContext();
    const [porcentagemDentro, setPorcentagemDentro] = useState(0);
    const [porcentagemFora, setPorcentagemFora] = useState(0);
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const limiteMaximo = userData.valorMaxGlicemia;
        const limiteMinimo = userData.valorMinGlicemia;

        const dentroDoAlvo = medicoes.filter((m) => m > limiteMinimo && m <= limiteMaximo).length;
        const foraDoAlvo = medicoes.filter((m) => m <= limiteMinimo || m > limiteMaximo).length;
        const totalMedicoes = medicoes.length;

        const porcentagemD = (dentroDoAlvo / totalMedicoes) * 100 || 0;
        const porcentagemF = (foraDoAlvo / totalMedicoes) * 100 || 0;

        setPorcentagemDentro(porcentagemD);
        setPorcentagemFora(porcentagemF);

        if (chartInstance.current === null && chartContainer.current) {
            chartInstance.current = new Chart(chartContainer.current, {
                type: 'line',
                data: {
                    labels: Array.from(Array(totalMedicoes).keys()),
                    datasets: [
                        {
                            label: 'Medições',
                            data: medicoes,
                            borderColor: 'blue',
                            borderWidth: 1,
                            fill: false,
                        },
                        {
                            label: 'Limite Mínimo',
                            data: Array(totalMedicoes).fill(limiteMinimo),
                            borderColor: 'red',
                            borderWidth: 1,
                            fill: false,
                        },
                        {
                            label: 'Limite Máximo',
                            data: Array(totalMedicoes).fill(limiteMaximo),
                            borderColor: 'green',
                            borderWidth: 1,
                            fill: false,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            suggestedMin: 0,
                            suggestedMax: 200,
                        },
                    },
                },
            });
        } else if (chartInstance.current && chartContainer.current) {
            chartInstance.current.data.datasets[0].data = medicoes;
            chartInstance.current.update();
        }
    }, [medicoes]);

    return (
        <div>
            <canvas ref={chartContainer} width="400" height="200"></canvas>
            <p>Porcentagem de medições dentro do alvo: {porcentagemDentro.toFixed(2)}%</p>
            <p>Porcentagem de medições fora do alvo: {porcentagemFora.toFixed(2)}%</p>
        </div>
    );
};

export default GraficoMedicoes;
