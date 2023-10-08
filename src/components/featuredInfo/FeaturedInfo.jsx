import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const FeaturedInfo = () => {
  return (
    <div className="featured w-full flex justify-between pt-2.5">
      <div className="flex-1 mx-5 p-[30px] rounded-xl cursor-pointer shadow-sm shadow-green-100/20 bg-zinc-950 hover:scale-105 transition-transform duration-300">
        <span className="text-green-100 font-bold font-Dana ">پیش فروش</span>
        <div className="my-2.5 flex items-center justify-between text-yellow-1">
          <span className="text-2xl font-semibold font-Dana">20,000,000 <span className='text-lg font-Dana'>ریال</span></span>
          <span className="flex items-center">
            <ArrowDownwardIcon  className="text-[25px] ml-2 text-red-600 border border-red-600 rounded-full negative"/><span className="pt-1.5 text-lg font-semibold font-Dana">1.4 - %</span>
          </span>
        </div>
        <span className="text-green-100 font-DanaM">تغییرات در یک ماه</span>
      </div>
      <div className="flex-1 mx-5 p-[30px] rounded-xl cursor-pointer shadow-sm shadow-green-100/20 bg-zinc-950 hover:scale-105 transition-transform duration-300">
        <span className="text-green-100 font-bold font-Dana ">فروش</span>
        <div className="my-2.5 flex items-center justify-between text-yellow-1">
          <span className="text-2xl font-semibold font-Dana">142,000,000 <span className='text-lg font-Dana'>ریال</span></span>
          <span className="flex items-center">
            <ArrowUpwardIcon  className="text-[25px] ml-2 text-green-600 border border-green-600 rounded-full negative"/><span className="pt-1.5 text-lg font-semibold font-Dana">%25.2</span>
          </span>
        </div>
        <span className="text-green-100 font-DanaM">تغییرات در یک ماه</span>
      </div>
      <div className="flex-1 mx-5 p-[30px] rounded-xl cursor-pointer shadow-sm shadow-green-100/20 bg-zinc-950 hover:scale-105 transition-transform duration-300">
        <span className="text-green-100 font-bold font-Dana ">سود</span>
        <div className="my-2.5 flex items-center justify-between text-yellow-1">
          <span className="text-2xl font-semibold font-Dana">75,600,000 <span className='text-lg font-Dana'>ریال</span></span>
          <span className="flex items-center">
            <ArrowUpwardIcon  className="text-[25px] ml-2 text-green-600 border border-green-600 rounded-full negative"/><span className="pt-1.5 text-lg font-semibold font-Dana">%45</span>
          </span>
        </div>
        <span className="text-green-100 font-DanaM">تغییرات در یک ماه</span>
      </div>
      
     
    </div>
  )
}

export default FeaturedInfo;
