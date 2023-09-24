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
    <div className="w-[20%] bg-green-950">
      <div className="sidebarWrapper sticky top-12 p-5 text-slate-300">
        <div className="mb-2.5">
          <h3 className="text-[#d7ff68] text-xl font-bold">Dashboard</h3>
          <ul className="list-none px-1 py-1.5">
            <NavLink className="link" to="/">
              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <HomeIcon className="mr-1.5 text-lg" />
                Home
              </li>
            </NavLink>
            <NavLink className="link" to="/userList">
              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <PermIdentityIcon className="mr-1.5 text-lg" />
                Users
              </li>
            </NavLink>
            <NavLink to="/productList" className="link">
              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <StorefrontIcon className="mr-1.5 text-lg" />
                Products
              </li>
            </NavLink>

          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className="text-[#d7ff68] text-xl font-bold">Quick Menu</h3>
          <ul className="list-none px-1 py-1.5">
            <NavLink to='/notDeveloped'>
              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <TrendingUpIcon className="mr-1.5 text-lg" />
                Sales
              </li>
            </NavLink>
            
            <NavLink to='/notDeveloped'>

              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <BarChartIcon className="mr-1.5 text-lg" />
                Reports
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className="text-[#d7ff68] text-xl font-bold">Notifications</h3>
          <ul className="list-none px-1 py-1.5">
            <NavLink to='/notDeveloped'>
              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <MailOutlineIcon className="mr-1.5 text-lg" />
                Mail
              </li>

            </NavLink>
            <NavLink to='/notDeveloped'>
              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <DynamicFeedIcon className="mr-1.5 text-lg" />
                Feedback
              </li>

            </NavLink>
            <NavLink to='/notDeveloped'>

              <li className="sidebarListItem p-1.5 cursor-pointer flex items-center rounded-md mt-1 transition-colors duration-300 text-lg font-semibold ">
                <ChatBubbleOutlineIcon className="mr-1.5 text-lg" />
                Messages
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
