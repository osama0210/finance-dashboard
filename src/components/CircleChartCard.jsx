import {Chart as ChartJS} from 'chart.js/auto'
import {PolarArea} from "react-chartjs-2";


const data = {
    datasets: [{
        data: [10, 20, 30, 50]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Purple',
        'Blue',
        'Orange',
    ],
};

const circleChartCard = () => {
    return (
        <div className="circle-chart-card-container">
            <div className="polarArea-chart">
                <PolarArea data={data}/>
            </div>
        </div>
    );
}

export default circleChartCard;