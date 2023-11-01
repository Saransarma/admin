import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const data = [
  {
    name:"January",Total:1200
  },
  {
    name: "February",Total: 1000
  },
  {
    name: "March",Total:700
  },
  {
    name: "April",Total:10
  },
  {
    name: "May",Total:50
  },
  {
    name: "June",Total:780
  },
  {
    name: "July",Total:900
  },
  {
    name: "August",Total:1800
  },
  {
    name: "September",Total:2000
  },
  {
    name: "October",Total:950
  },
  {
    name: "November",Total:860
  },
  {
    name: "December",Total:780
  },
];


const Chart = ({aspect,title}) => {
  return (
    <div className="chart"><div className="title">{title}</div>
    <ResponsiveContainer width="100%" aspect={aspect}>
    <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" stroke="gray"/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#total)" />
</AreaChart>

    </ResponsiveContainer></div>
  )
}

export default Chart   