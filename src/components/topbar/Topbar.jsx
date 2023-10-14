import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';
import me from "../../asset/ME.gif"
import Swal from 'sweetalert2';
const Topbar = () => {

  const showMe = () => {
    Swal.fire({
      title:'زنگ بزن گپی بزنیم :)',
      text:"09918790969"

    })
  }

  const logout = () => {
    Swal.fire({
      icon:"error", 
      title:'در حال حاضر به علت آماده نشدن بک اند این بخش توسعه داده نشده است',
    })
  }
  return (
    <div className="topbar w-full h-[60px] fixed top-0 z-[999] py-2 px-3 bg-zinc-900 ">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <img src={me} alt="me logo" onClick={showMe} className="w-10 h-10 rounded-lg cursor-pointer border-[1px] border-yellow-1 object-cover" />
          <div className="relative cursor-pointer mr-2.5 text-[#d7ff68]">
            <NotificationsIcon />
            <span className="absolute -top-[5px] right-0 w-[15px] h-[15px] bg-red-500 text-white rounded-full flex items-center justify-center text-[10px]">2</span>
          </div>
          <div className="relative cursor-pointer mr-2.5 text-[#d7ff68]">
            <LanguageIcon />
            <span className="absolute -top-[5px] right-0 w-[15px] h-[15px] bg-red-500 text-white rounded-full flex items-center justify-center text-[10px]">2</span>
          </div>
          <div className="relative cursor-pointer mr-2.5 text-[#d7ff68]">
            <SettingsIcon />
          </div>
        </div>
        <div className="topLeft">
          <button onClick={logout} className="flex justify-center items-center gap-x-2 border border-red-500  px-3 rounded-md  text-[#ff4343] cursor-pointer hover:text-[#ff6565] hover:bg-red-900 transition-colors duration-500">
            <span className='text-lg font-DanaB'>خروج</span>
            <LogoutIcon className=' rotate-180' />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Topbar;