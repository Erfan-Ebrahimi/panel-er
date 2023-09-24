// ---------- COMPONENTS -----------//
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
// ---------- DATA -----------//
import { userData } from "../../dummyData"

const Home = () => {
  return (
    <div className='h-full w-full bg-gradient-to-b from-green-900 to-slate-900'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey1="Active User" dataKey2="Deactive User" grid />
      <div className='flex flex-row mx-auto p-2 justify-between'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;