import {newMembers} from '../../dummyData'
import VisibilityIcon from '@mui/icons-material/Visibility';



const WidgetSm = () => {
  return (
    <div className='widgetSm flex-1 shadow-md shadow-green-400/40 p-5 mr-4 rounded-md bg-black/90'>
      <span className='text-xl font-semibold text-[#d7ff68]'>New Join Members</span>
      <ul className='flex flex-col gap-y-4 mt-7'>
        {newMembers.map((item) => {
          return(
            <li className='flex items-center justify-between' key={item.id}>
              <img className='w-10 h-10 rounded-full object-cover mr-2.5' src={item.img} alt="imgUser" />
              <div className='flex flex-col gap-y-1'>
                <span className='text-[#d7ff68] font-bold'>{item.userName}</span>
                <span className='text-[#c2cf9c] font-thin'>{item.title}</span>
              </div>
              <button className='flex justify-center items-center ml-auto cursor-pointer border-none text-orange-300 hover:text-orange-600 transition-colors duration-300'>
                <VisibilityIcon/>
              </button>
            </li>

          )
        })}
      </ul>
    </div>
  )
}

export default WidgetSm;