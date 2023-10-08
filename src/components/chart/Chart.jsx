/* eslint-disable react/prop-types */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title,grid,data,dataKey1,dataKey2}) => {

  return (
    <div className='m-5 p-5 shadow-md shadow-green-400/40 bg-zinc-950 rounded-md'>
        <h3 className='mb-5 font-semibold text-xl font-Dana text-[#d7ff68]'>{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1 }>
          <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
          
            {grid && <CartesianGrid strokeDasharray="1 10"  stroke="#d6ee"/>}
            <XAxis dataKey="name" stroke='#d6ee93 ' />
            <YAxis  stroke='#d6ee93 '/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={dataKey1} stroke="#31f700" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey={dataKey2} stroke="#ff6459" />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart