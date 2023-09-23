/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title,grid,data,dataKey1}) => {

  return (
    <div className='m-5 p-5 shadow-md shadow-green-400/40 bg-black/90 rounded-md'>
        <h3 className='mb-5 font-semibold text-xl text-[#d7ff68]' >{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1 }>
        <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
          {grid && <CartesianGrid strokeDasharray="5 5"  stroke="#fefefe"/>}
          <XAxis dataKey="name" stroke='#efff5c' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey1} stroke="#4949da" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart