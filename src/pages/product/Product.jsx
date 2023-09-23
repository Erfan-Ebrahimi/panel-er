import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./product.scss";
import { Link } from 'react-router-dom';
import ChartP from '../../components/chart/ChartP';
import {productData} from "../../dummyData";

const Product = () => {

  const para = useParams();

  const[pro , setPro] = useState({});
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${para.productId}`)
        .then((response) => {
            setPro(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
  return (
    <div className="product">
      <div className="top">
        <h1 className="productTitle">{pro.title}</h1>
        <Link to="/newproduct">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className='bottom'>
        <div className="info1">

                <div className="InfoTop">
                    <img src={pro.image}alt="" className="productInfoImg" />
                </div>

                <div className="InfoBottom">
                    <div className="ba">
                      
                      <div className="InfoItem">
                          <p className="InfoValue a1">{pro.title}</p>
                      </div>
                      <div className="InfoItem">
                          <p className="InfoValue a2">{pro.description  }</p>
                      </div>
                    </div>
                      <div className="da">
                        <div className="InfoItem">
                            <span className="InfoKey">id : </span>
                            <span className="InfoValue">{pro.id}</span>
                        </div>
                        <div className="InfoItem">
                            <span className="InfoKey">rate : </span>
                            <span className="InfoValue">{Object(pro.rating).rate}</span>
                        </div>
                        <div className="InfoItem">
                            <span className="InfoKey">price : </span>
                            <span className="InfoValue">{pro.price} $</span>
                        </div>
                        <div className="InfoItem">
                            <span className="InfoKey">count : </span>
                            <span className="InfoValue">{Object(pro.rating).count}</span>
                        </div>
                    </div>
                </div>
        </div>
      </div>
      <div className="chart1">
        <ChartP data={productData} dataKey1="Sales" title="Sales Performance"/>
      </div>
    </div>
  )
}

export default Product;