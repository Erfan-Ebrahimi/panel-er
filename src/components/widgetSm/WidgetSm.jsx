import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';


const WidgetSm = () => {

  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        setNewUsers(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div className='widgetSm flex-1 shadow-md shadow-green-400/40 p-5 mr-4 rounded-md bg-zinc-950'>
      <span className='text-xl font-MorabbaB text-yellow-1'>فعال ترین کاربران</span>
      <ul className='flex flex-col gap-y-4 mt-7'>
        {newUsers.slice(12, 16).map((user) => {
          return (
            <li className='flex items-center justify-between' key={user.id}>
              <div className='flex items-center'>
                <img className='w-10 h-10 rounded-md object-cover mr-2.5 border border-yellow-100/20' src={user.image} alt="imgUser" />
                <div className='flex flex-col gap-y-1 mr-2.5'>
                  <span className='text-yellow-1 font-Dana font-bold'>{user.firstName}{" "}{user.lastName}</span>
                  <span className='text-yellow-100 text-xs font-mono'>{user.title}</span>
                </div>
              </div>
              <Link to={`/user/${user.id}`} className='flex justify-center items-center cursor-pointer border-none text-orange-300 hover:text-orange-600 transition-colors duration-300'>
                <VisibilityIcon />
              </Link>
            </li>

          )
        })}
      </ul>
    </div>
  )
}

export default WidgetSm;