/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./widgetLg.scss";
import { transactions } from "../../dummyData"



const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={"wlButton border-none cursor-pointer rounded-md px-1.5 py-0.5 w-20 text-sm font-bold text-white  " + type}>{type}</button>    //chera bayad yek fasele bezarim baray inke class ha anjam beshavad
  }

  return (
    <div className='widgetLg flex-grow rounded-md shadow-md shadow-green-400/40 bg-black/90 p-5'>
      <h3 className="text-xl font-semibold text-[#d7ff68]">Lates transactions</h3>
      <table className='w-full mt-5 ml-4'>
        <tbody>
          <tr className='text-[#dfff68]'>
            <th className='text-left'>Customer</th>
            <th className='text-left'>Date</th>
            <th className='text-left'>Amount</th>
            <th className='text-left'>Status</th>
          </tr>
          {transactions.map((item) => {
            return (
              <tr>
                <td className='flex items-center'>
                  <img className='w-10 h-10 rounded-full object-cover mt-3' src={item.img} alt="userImg" />
                  <span className='ml-2.5 font-medium text-[#d7ff68] pt-[10px]'>{item.customer}</span>
                </td>
                <td className='text-[#d7ff68] mt-3'>{item.date}</td>
                <td className='text-[#d7ff68] mt-3'>$ {item.amount}</td>
                <td className='wlStatus mt-3'><Button type={item.status} /></td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default WidgetLg;