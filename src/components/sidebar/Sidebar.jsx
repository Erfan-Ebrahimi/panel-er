import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[20%] bg-zinc-950">
      <div className="sidebarWrapper sticky top-12 p-5 text-slate-300">
        <div className="mb-2.5">
          <h3 className=" text-yellow-1 font-MorabbaB tracking-wide text-2xl font-extrabold">پنل ادمین</h3>
          <ul className="list-none px-1 py-1.5">
            <NavLink className="link" to="/">
              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300">
                <HomeIcon  className="!text-[28px]" />
                <span className='font-DanaB font-semibold pt-1 h-full text-[17px] tracking-wider '>خانه</span>
              </li>
            </NavLink>
            <NavLink className="link" to="/userList">
              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <PermIdentityIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>کاربران</span>
              </li>
            </NavLink>
            <NavLink to="/productList" className="link">
              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <StorefrontIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>محصولات</span>
              </li>
            </NavLink>

          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className=" text-yellow-1 font-MorabbaB tracking-wide text-2xl font-extrabold">فروش</h3>
          <ul className="list-none px-1 py-1.5">
            <NavLink to='/notDeveloped'>
              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <TrendingUpIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>فروش ماهیانه</span>
              </li>
            </NavLink>

            <NavLink to='/notDeveloped'>

              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <BarChartIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>گزارشات</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className=" text-yellow-1 font-MorabbaB tracking-wide text-2xl font-extrabold">اعلانات</h3>
          <ul className="list-none px-1 py-1.5">
            <NavLink to='/notDeveloped'>
              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <MailOutlineIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>ایمیل ها</span>
              </li>

            </NavLink>
            <NavLink to='/notDeveloped'>
              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <DynamicFeedIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>نظرات کاربران</span>
              </li>

            </NavLink>
            <NavLink to='/notDeveloped'>

              <li className="sidebarListItem p-0.5 cursor-pointer flex items-center gap-x-2 rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <ChatBubbleOutlineIcon className="!text-[28px]" />
                <span className=' font-Dana pt-1 h-full text-[17px] tracking-wider '>پیام کاربران</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
