import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const FeaturedInfo = () => {
  return (
    <div className="featured w-full flex justify-between pt-2.5">
      <div className="flex-1 mx-5 p-[30px] rounded-xl cursor-pointer shadow-sm shadow-green-100/30 bg-black/90">
        <span className="text-green-100 font-bold ">Revanue</span>
        <div className="my-2.5 flex items-center text-[#d7ff68]">
          <span className="text-3xl font-semibold">$2,052</span>
          <span className="flex items-center ml-5">
            <span className="text-lg font-semibold">- 1.4 %</span><ArrowDownwardIcon  className="text-[25px] ml-1.5 text-red-600 border border-red-600 rounded-full negative"/>
          </span>
        </div>
        <span className="text-green-100">Compared to last month</span>
      </div>
      <div className="flex-1 mx-5 p-[30px] rounded-xl cursor-pointer shadow-sm shadow-green-100/30 bg-black/90">
        <span className="text-green-100 font-bold">Sales</span>
        <div className="my-2.5 flex items-center text-[#d7ff68]">
          <span className="text-3xl font-semibold">$3,415</span>
          <span className="flex items-center ml-5">
            <span className="text-lg font-semibold">- 2.7 %</span> <ArrowDownwardIcon className="text-[25px] ml-1.5 text-red-600 border border-red-600 rounded-full "/>
          </span>
        </div>
        <span className="text-green-100">Compared to last month</span>
      </div>
      <div className="flex-1 mx-5 p-[30px] rounded-xl cursor-pointer shadow-sm shadow-green-100/30 bg-black/90">
        <span className="text-green-100 font-bold">Cost</span>
        <div className="my-2.5 flex items-center text-[#d7ff68]">
          <span className="text-3xl font-semibold">$9,780 </span>
          <span className="flex items-center ml-5">
            <span className="text-lg font-semibold">+ 6.3 %</span><ArrowUpwardIcon className="text-[25px] ml-1.5 text-green-600 border border-green-600 rounded-full"/>
          </span>
        </div>
        <span className="text-green-100">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo;
