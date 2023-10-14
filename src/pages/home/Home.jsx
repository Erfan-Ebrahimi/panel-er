// ---------- COMPONENTS -----------//
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
// ---------- DATA -----------//
import { userData } from "../../components/chart/dummyData"
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Home = () => {

  useEffect(() => {
    Swal.fire({
      title: 'در حال حاضر بخش محصولات ، کاربران و نظرات توسعه داده شده است.',
      text: '/* ریسپانسیو نشده است. */',
      icon: "info",
    })
  },[])


  return (
    <div className='h-full w-[100%] mx-auto bg-gradient-to-b from-green-900 to-slate-900'>
      <FeaturedInfo />
      <Chart data={userData} title="تغییرات کاربران" dataKey1="کاربران فعال" dataKey2="کاربران غیرفعال" grid />
      <div className='flex flex-row gap-x-2 mx-auto p-2 justify-between'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;