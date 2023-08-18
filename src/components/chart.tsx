import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CustomDougnutChart() {
    // 1. chartData 재가공 해서 데이터 넣어주기
    // 2. 라인, 바 , 도넛 차트 그리기
    const chartData = [
        { label: "Red", value: 12 },
        { label: "Blue", value: 19 },
        { label: "Yellow", value: 3 },
        { label: "Green", value: 5 },
        { label: "Purple", value: 2 },
        { label: "Orange", value: 3 },
    ];
    const chartValue = { names: [] as string[], values: [] as number[] };
    const { names, values } = chartData.reduce((data, item) => {
        data.names.push(item.label);
        data.values.push(item.value);
        return data;
    }, chartValue);

    return (
        <div style={{ width: 200 }}>
            <Doughnut
                options={{
                    layout: {
                        padding: 2,
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
                data={{
                    labels: names,
                    datasets: [
                        {
                            data: values,
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.2)",
                                "rgba(54, 162, 235, 0.2)",
                                "rgba(255, 206, 86, 0.2)",
                                "rgba(75, 192, 192, 0.2)",
                                "rgba(153, 102, 255, 0.2)",
                                "rgba(255, 159, 64, 0.2)",
                            ],
                            borderColor: [
                                "rgba(255, 99, 132, 1)",
                                "rgba(54, 162, 235, 1)",
                                "rgba(255, 206, 86, 1)",
                                "rgba(75, 192, 192, 1)",
                                "rgba(153, 102, 255, 1)",
                                "rgba(255, 159, 64, 1)",
                            ],
                            borderWidth: 1,
                        },
                    ],
                }}
            />
        </div>
    );
}
