import './App.css'
import { Routes, Route } from 'react-router-dom';
//---- COMPONENTS ----------//
import Topbar from "./components/topbar/Topbar";
import Sidebar from './components/sidebar/Sidebar';
//------- PAGES  ---------//
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
//------- STYLE  ---------//

function App() {

  return (
    <div className='w-full'>
      <Topbar />
      <div className='w-full mt-[60px] flex flex-row'>
        <Sidebar />
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/userList' element={<UserList />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/productList' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default App
