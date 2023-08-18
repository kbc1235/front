import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function CustomLineChart() {
    const chartData = [
        { label: "a", value: 12 },
        { label: "b", value: 19 },
        { label: "c", value: 56 },
        { label: "d", value: 52 },
        { label: "e", value: 25 },
        { label: "f", value: 36 },
        { label: "g", value: 31 },
        { label: "h", value: 23 },
        { label: "i", value: 73 },
        { label: "j", value: 43 },
        { label: "k", value: 83 },
    ];

    const chartValue = { names: [] as string[], values: [] as number[] };

    const { names, values } = chartData.reduce((data, item) => {
        data.names.push(item.label);
        data.values.push(item.value);
        return data;
    }, chartValue);

    return (
        <div style={{ width: 300 }}>
            <Line
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                            display: false,
                        },
                        title: {
                            display: true,
                            text: "Bar Chart 샘플",
                        },
                    },
                }}
                data={{
                    labels: names,
                    datasets: [
                        {
                            data: values,
                            backgroundColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                            ],
                        },
                    ],
                }}
            ></Line>
        </div>
    );
}
