import "./topbar.scss";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import p1 from "../../asset/p1.jpg"
const Topbar = () => {
  return (
    <div className="topbar w-full h-[60px] fixed top-0 z-[999] py-2 px-3 bg-[#001404] ">
      <div className="h-full flex items-center justify-between">
        <div className="topLeft">
          <span className="font-bold text-2xl text-[#d7ff68] cursor-pointer hover:text-[#bbff00]">Admin-Panel.</span>
        </div>
        <div className="flex items-center">
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
          <img src={p1} alt="" className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#d7ff68] object-cover" />
        </div>
      </div>
  </div>
  )
}

export default Topbar;