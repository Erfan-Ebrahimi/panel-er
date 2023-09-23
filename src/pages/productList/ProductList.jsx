import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import "./productList.scss";

import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// import {productRows} from "../../dummyData"; //rows hara az dummy gereftim v anra dar data  set kardim v be datagrid dadim
import axios from 'axios';



const ProductList = () => {

  const[data , setData] = useState({});
  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    },[])
  
  const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id ));
      console.log("dddddddddd")
    };

    const shorten = (title) => {
      const splitedTitle = title.split(" ");
      const newTitle = `${splitedTitle[0]}  ${splitedTitle[1]}`;
      return newTitle;
    }
  
    const columns= [
      {field: 'id', headerName: 'ID', width: 70,headerClassName:"fi",cellClassName: 'fe', },
      {field: 'title',headerName: 'Product',width: 170, renderCell: (params) => {
        return (
          <div className="list">
            <img className='listImg' src={params.row.image} alt="imgUser"/>
            <p className='listTitle'>{shorten(params.row.title)}</p>
          </div>
        );
      },headerClassName:"fi",cellClassName: 'fe'},
      {field: 'category', headerName: 'Category', width: 150 , headerClassName:"fi",cellClassName: 'fe'},
      {field: 'price',headerName: 'Price',width: 110,headerClassName:"fi" ,cellClassName: 'fe',renderCell: (params) => {
        return (
          <div className="list">
            <p className='listTitle'>{params.row.price} $</p>
          </div>
        );
      }},
      {field: 'rate',headerName: 'Rate', width: 90,headerClassName:"fi" ,cellClassName:"fe",renderCell: (params) => {
        return (
          <div className="list">
            <p className='listTitle'>{params.row.rating.rate}</p>
          </div>
        );
      }},
      {field: 'count',headerName: 'Count', width: 90,headerClassName:"fi" ,cellClassName:"fe",renderCell: (params) => {
        return (
          <div className="list">
            <p className='listTitle'>{params.row.rating.count}</p>
          </div>
        );
      }},
      
      {field: 'action',headerName: 'Action', width: 90,headerClassName:"fi" ,cellClassName: 'fe', renderCell:(params) => {
        return (
          <div className='actionList'>
            <Link to={"/product/"+params.row.id}>
              <button className='alButton'>More</button>
            </Link>
            <DeleteOutlineIcon className='alIcon' onClick={() => handleDelete(params.row.id)}/>
          </div>
        )
      }},
  
    ];  

  return (
    <div className='productList'>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      /> 
    </div>
  )
}

export default ProductList;