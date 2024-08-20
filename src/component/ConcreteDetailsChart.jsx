import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import API from "../api";
import { useStores } from "../store/useStores";
import { observer } from "mobx-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function generateChartData(concreteDetails) {
    return {
        labels:
            concreteDetails.length > 0
                ? concreteDetails.map((item) => item.label)
                : null,
        datasets: [
            {
                label: "Min. cement content (kg/m³)",
                data:
                    concreteDetails.length > 0
                        ? concreteDetails.map((item) => item.value)
                        : [0],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };
}

const ConcreteDetailsChart = observer(() => {
    const [concreteDetails, setConcreteDetails] = useState([]);
    const { appStore } = useStores();
    const { concreteName } = appStore;

    useEffect(() => {
        if (concreteName) {
            API.getConcreteDetial(concreteName)
                .then((res) => {
                    setConcreteDetails(res.cementContents || []);
                })
                .catch((error) => {
                    console.error("getConcreteDetial", error);
                });
        } else {
            setConcreteDetails([]);
        }
    }, [concreteName]);

    const data = generateChartData(concreteDetails);

    const options = {
        indexAxis: "y",
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                title: {
                    display: true,
                    text: "Size",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw} kg/m³`;
                    },
                },
            },
        },
    };

    return (
        <div className="p-4 w-full h-96">
            <Bar data={data} options={options} />
        </div>
    );
});

export default ConcreteDetailsChart;
