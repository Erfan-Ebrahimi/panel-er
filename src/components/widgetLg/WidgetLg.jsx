/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from "axios"



const WidgetLg = () => {

  const [newUsers , setNewUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then((response) => {
      setNewUsers(response.data)
      console.log(response.data)
    })
    .catch(error => console.log(error))
}, [])

  return (
    <div className='flex-grow rounded-md shadow-md shadow-green-400/40 bg-zinc-950 p-5'>
      <h3 className="text-xl font-MorabbaB text-yellow-1">کاربران جدید</h3>
      <table className='w-full mt-7 ml-4'>
        <tbody className="">
          <tr className='text-yellow-1'>
            <th className='text-center font-Dana text-yellow-500'>نام و نام خانوادگی</th>
            <th className='text-center font-Dana text-yellow-500'>سن</th>
            <th className='text-center font-Dana text-yellow-500'>تلفن</th>
            <th className='text-center font-Dana text-yellow-500'>ایمیل</th>
          </tr>
          {newUsers.slice(5,9).map((user) => {
            return (
              <tr key={user.id}>
                <td className='text-white h-10 !pt-7 text-center font-Dana'>{user.firstName}{"  "}{user.lastName}</td>
                <td className='text-white h-10 !pt-7 text-center font-Dana'>{user.age}</td>
                <td className='text-white h-10 !pt-7 text-center font-Dana'>{user.phone}</td>
                <td className='text-white h-10 !pt-7 text-center font-mono'>{user.email}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  )
}

export default WidgetLg;