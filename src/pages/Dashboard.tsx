import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const data = [
  { month: 'Jan', sales: 42 },
  { month: 'Feb', sales: 55 },
  { month: 'Mar', sales: 38 },
  { month: 'Apr', sales: 61 },
  { month: 'May', sales: 74 },
  { month: 'Jun', sales: 68 },
  { month: 'Jul', sales: 90 },
]

export default function Dashboard(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Sales (demo)</h2>
      <div className="w-full overflow-x-auto">
        <LineChart width={800} height={300} data={data}>
          <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={2} dot={false} />
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  )
}