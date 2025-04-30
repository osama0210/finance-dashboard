// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid} from "recharts";
import {useState, useEffect} from "react";

const CoinChart = ({ coinId }) => {
    const [days, setDays] = useState(7);
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`)
            .then(res => res.json())
            .then(data => {
                const formatted = data.prices
                    .filter((_, index) => index % 24 === 0)
                    .map(([timestamp, price]) => {
                    const date = new Date(timestamp);
                    const label = days === 1
                        ? date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
                        : date.toLocaleDateString("en-GB", { weekday: "short" });

                    return { date: label, price };
                });
                setChartData(formatted);
            });
    }, [coinId, days]);

    return (
        <div className="coin-chart-container">
            <div className="chart-controls">
                <button
                    className={days === 1 ? "chart-btn active" : "chart-btn"}
                    onClick={() => setDays(1)}>
                    1D</button>
                <button
                    className={days === 7 ? "chart-btn active" : "chart-btn"}
                    onClick={() => setDays(7)}>
                    7D</button>
                <button
                    className={days === 30 ? "chart-btn active" : "chart-btn"}
                    onClick={() => setDays(30)}>
                    30D</button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#7a5af9" stopOpacity={0.5} />
                            <stop offset="95%" stopColor="#7a5af9" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#7a5af9"
                        fill="url(#priceGradient)"
                        strokeWidth={2}
                        dot={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CoinChart;