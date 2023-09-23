
// ---------- COMPONENTS -----------//
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
// ---------- DATA -----------//
import { userData } from "../../dummyData"
// ---------- STYLE -----------//
import "./home.scss";

const Home = () => {
  return (
    <div className='home h-full'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey1="Active User" dataKey2="Deactive User" grid />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}

export default Home;