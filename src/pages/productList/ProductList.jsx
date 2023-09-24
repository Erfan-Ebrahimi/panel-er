import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// import {productRows} from "../../dummyData"; //rows hara az dummy gereftim v anra dar data  set kardim v be datagrid dadim
import axios from 'axios';



const ProductList = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]}  ${splitedTitle[1]}`;
    return newTitle;
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base', },
    {
      field: 'title', headerName: 'Product-Name', width: 200, renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img className='w-10 h-10 rounded-md border-4 border-green-500' src={params.row.image} alt="imgUser" />
            <p className='ml-2.5'>{shorten(params.row.title)}</p>
          </div>
        );
      }, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base'
    },
    { field: 'category', headerName: 'Category', width: 150, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base' },
    {
      field: 'price', headerName: 'Price', width: 110, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base', renderCell: (params) => {
        return (
          <div className="flex items-center">
            <p className='ml-2.5'>{params.row.price} $</p>
          </div>
        );
      }
    },
    {
      field: 'rate', headerName: 'Rate', width: 90, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "text-yellow-200 font-semibold text-base", renderCell: (params) => {
        return (
          <div className="flex items-center">
            <p className='ml-2.5'>{params.row.rating.rate}</p>
          </div>
        );
      }
    },
    {
      field: 'count', headerName: 'Count', width: 90, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "text-yellow-200 font-semibold text-base", renderCell: (params) => {
        return (
          <div className="flex items-center">
            <p className='ml-2.5'>{params.row.rating.count}</p>
          </div>
        );
      }
    },

    {
      field: 'action', headerName: 'Action', width: 120, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base', renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={"/product/" + params.row.id}>
              <button className='bg-green-600 border-none py-0.5 px-3.5 rounded-md font-bold cursor-pointer transition-colors duration-300 hover:bg-orange-600 hover:text-white'>More</button>
            </Link>
            <DeleteOutlineIcon className='text-xl bg-none border-none text-red-400 cursor-pointer hover:text-red-600 transition-colors duration-300' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    },

  ];

  return (
    <div className='flex-grow bg-gray-950'>
      {data.length ?
        (
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
            disableSelectionOnClick
          />

        )
        :
        (
          <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
            <p className='text-5xl text-red-400 text-center font-mono font-bold tracking-wider'>loading....</p>
            <span className='text-xl text-purple-500 mt-5'>turn on VPN</span>
          </div>
        )
      }
    </div>
  )
}

export default ProductList;