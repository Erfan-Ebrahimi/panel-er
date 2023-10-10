import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import Swal from "sweetalert2"

const ProductList = () => {

  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get("http://localhost:3000/products")
    .then((response) => {
      setProducts(response.data)
    })
    .catch(error => console.log(error))
  }

  const handleDelete = (id) => {

    Swal.fire({
      title: 'آیا از حذف محصول اطمینان دارید ؟',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/products/${id}`, {
        }).then((response) => {
          if (response.status == '200') {
            getProducts()
            Swal.fire('محصول با موفقیت حذف شد :))', '', 'success')
          }
        }).catch(error => {
          Swal.fire(`دوباره تلاش کنید !!!`, '', 'error')
          console.log(error);
        })
      }
    })

  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-zinc-500 font-semibold text-base', },
    {
      field: 'title', headerName: 'نام محصول', width: 260, renderCell: (params) => {
        return (
          <div className="flex items-center bg-slate-950 rounded-lg w-[250px]">
            <img className='w-11 h-11 rounded-md border border-red-500/20' src={params.row.image} alt="imgUser" />
            <p className='text-zinc-500 mr-2.5 font-Dana '>{(params.row.title)}</p>
          </div>
        );
      }, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base'
    },
    { field: 'category', headerName: 'دسته بندی', width: 150, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-zinc-500 font-Dana font-semibold text-base' },
    {
      field: 'price', headerName: 'قیمت', width: 110, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-zinc-500 font-semibold text-base', renderCell: (params) => {
        return (
          <p className='font-Dana'>{params.row.price.toLocaleString()} {' '}<span className='font-Dana text-xs'>تومان</span> {" "} </p>
        );
      }
    },
    {
      field: 'rate', headerName: 'امتیاز کاربران', width: 140, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "ce text-zinc-500 font-semibold text-base", renderCell: (params) => {
        return (
          <>
            {
              Array(5 - Number(params.row.rating.rate)).fill(0).map((item, index) => (
                <StarIcon key={index} className="w-4 h-4 md:w-6 md:h-6 stroke-orange-300 text-white/10" />
              ))
            }
            {
              Array(params.row.rating.rate).fill(0).map((item, index) => (
                <StarIcon key={index} className="w-4 h-4 md:w-6 md:h-6 text-amber-600" />
              ))
            }
          </>
        );
      }
    },
    {
      field: 'count', headerName: 'موجودی', width: 90, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "ce text-zinc-500 font-semibold text-base", renderCell: (params) => {
        return (<p className='font-Dana'>{params.row.rating.count}</p>);
      }
    },

    {
      field: 'action', headerName: 'ویرایش/حذف', width: 120, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-zinc-500 font-semibold text-base', renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={"/product/" + params.row.id}>
              <button className='bg-green-600 text-green-100 font-Dana text-xs border-none py-1 px-3.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-600 hover:text-white'>ویرایش</button>
            </Link>
            <DeleteOutlineIcon className='text-xl bg-none border-none text-red-400 cursor-pointer hover:text-red-600 transition-colors duration-300' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    },

  ];

  return (
    <div className='flex-grow bg-zinc-950'>
      {products.length ?
        (
          <div className='mx-auto flex flex-col w-[86%]'>
            <div className='flex items-center justify-between mx-auto w-[98%] '>
              <h1 className='text-2xl text-yellow-1 py-5  font-MorabbaB'>لیست محصولات</h1>
              <Link to='/newProduct' className='rounded-lg border border-red-100 text-zinc-200 px-2 py-1  font-Dana bg-green-700'>محصول جدید</Link>
            </div>
            <div className='w-[99%] mx-auto pb-10'>
              <DataGrid
                rows={products}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                sx={{
                  border: 1,
                  borderColor: '#b6a700',
                  '& .MuiDataGrid-cell:hover': {
                    color: '#fff',
                  },
                }}
              />
            </div>
          </div>

        )
        :
        (
          <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
            <p className='text-5xl text-red-400 text-center font-MorabbaB font-bold tracking-wider'>در حال بارگزاری . . .</p>
            <span className='text-xl text-purple-500 mt-5 font-Dana'>VPN را روشن کنید</span>
          </div>
        )
      }
    </div>
  )
}

export default ProductList;