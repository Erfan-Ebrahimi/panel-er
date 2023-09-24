import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChartP from '../../components/chart/ChartP';
import { productData } from "../../dummyData";

const Product = () => {

  const para = useParams();

  const [pro, setPro] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${para.productId}`)
      .then((response) => {
        setPro(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="product p-3 bg-slate-950">
      <div className="flex flex-row justify-between p-4">

        <div className='shrink-0'>
          <img src={pro.image} alt="" className="w-[200px] rounded-xl" />
        </div>

        <div className="flex flex-col gap-y-2 ml-4">
          <h1 className="text-2xl  text-yellow-600">{pro.title}</h1>
          <p className="w-[60%] text-lg/5 text-yellow-200">{pro.description}</p>
          <div className=''>
            <div className="flex flex-row">
              <span className="text-yellow-300">id : </span>
              <span className="text-yellow-600 pl-2">{pro.id}</span>
            </div>
            <div className="flex flex-row">
              <span className="text-yellow-300">rate : </span>
              <span className="text-yellow-600 pl-2">{Object(pro.rating).rate}</span>
            </div>
            <div className="flex flex-row">
              <span className="text-yellow-300">price : </span>
              <span className="text-yellow-600 pl-2">{pro.price} $</span>
            </div>
            <div className="flex flex-row">
              <span className="text-yellow-300">count : </span>
              <span className="text-yellow-600 pl-2">{Object(pro.rating).count}</span>
            </div>
          </div>
        </div>
        <Link to="/newproduct">
          <button className="w-24 border-none p-2 text-white rounded-md text-base cursor-pointer hover:bg-white hover:text-teal-700 transition-colors duration-300 font-bold bg-teal-600">Create new</button>
        </Link>

      </div>
      <div className=''>
        <ChartP data={productData} dataKey1="Sales" title="Sales Performance" />
      </div>
    </div>
  )
}

export default Product;