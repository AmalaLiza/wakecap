import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react';

const data = [
  { name: 'A', hours: 4000, zone: 2400, amt: 2400 },
  { name: 'B', hours: 3000, zone: 1398, amt: 2210 },
  { name: 'C', hours: 2000, zone: 9800, amt: 2290 },
  { name: 'D', hours: 2780, zone: 3908, amt: 2000 },
  { name: 'E', hours: 1890, zone: 4800, amt: 2181 },
  { name: 'F', hours: 2390, zone: 3800, amt: 2500 },
  { name: 'G', hours: 3490, zone: 4300, amt: 2100 },
];
const SimpleBarChart = () => (
  <BarChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="hours" fill="#ee8b44" />
    <Bar dataKey="zone" fill="#82ca9d" />
  </BarChart>
);

export default SimpleBarChart;
