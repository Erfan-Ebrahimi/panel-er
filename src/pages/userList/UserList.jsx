import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Swal from 'sweetalert2';


const UserList = () => {

  const [users, setUsers] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data)
      })
      .catch(error => console.log(error))
  }, [])


  const handleDelete = (id) => {
    Swal.fire({
      title: 'آیا از حذف کاربر اطمینان دارید ؟',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'انصراف',
      denyButtonText: `حذف کاربر`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire('کاربر با موفقیت حذف شد !!!', '', 'success')
        setUsers(users.filter((item) => item.id !== id));
      } else if (result.isConfirmed) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 40, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-yellow-200 font-semibold text-base', },
    {
      field: 'username', headerName: 'نام و نام خانوادگی', width: 200, renderCell: (params) => {
        console.log('params =>', params);
        return (
          <div className="flex items-center flex-row">
            <img className='w-10 rounded-md bg-black border border-green-100/20' src={params.row.image} alt="imgUser" />
            <p className='mr-2 font-Dana font-thin '>{params.row.firstName}{" "}{params.row.lastName}</p>
          </div>
        );
      }, headerClassName: "text-yellow-200 text-base", cellClassName: 'text-yellow-200 font-semibold text-base'
    },
    {
      field: 'email', headerName: 'ایمیل', width: 220, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-yellow-200 font-semibold text-base',
      renderCell: (params) => {
        return <div className='font-mono'>{params.row.email}</div>;
      }
    },
    { field: 'phone', headerName: 'تلفن', width: 160, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "ce text-yellow-200 font-semibold text-base" },
    { field: 'age', headerName: 'سن', width: 90, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "ce text-yellow-200 font-semibold text-base" },
    {
      field: 'job', headerName: 'شغل', width: 100, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-yellow-200 font-semibold text-base',
      renderCell: (params) => {
        return <div className='font-Dana'>{params.row.job}</div>;
      }
    },
    {
      field: 'action', headerName: 'ویرایش/حذف', width: 150, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'ce text-yellow-200 font-semibold text-base', renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={`/user/${params.row.id}`}>
              <button className='border-none bg-[#a5f776] text-green-800 px-3 font-Dana text-sm py-px rounded-lg cursor-pointer  hover:bg-green-700 hover:text-yellow-100 transition-colors duration-300'>ویرایش</button>
            </Link>
            <DeleteOutlineIcon className='bg-none border-none cursor-pointer text-red-400 hover:text-red-700 transition-colors duration-300' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    },

  ];




  return (
    <div className='bg-zinc-950 flex-grow'>
      {users.length ? (
        <div className='mx-auto flex flex-col w-[92%]'>
          <div className='flex items-center justify-between mx-auto w-[91%] '>
            <h1 className='text-2xl text-yellow-1 py-5  font-MorabbaB'>لیست کاربران</h1>
            <button className='rounded-lg border border-red-100 text-zinc-200 px-2 py-1  font-Dana bg-green-700'>کاربر جدید</button>
          </div>
          <div className='w-[95%] mx-auto pb-10'>
            <DataGrid
              rows={users}
              columns={columns}
              pagination='false'
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
            <p className='text-5xl text-red-400 text-centerfont-bold tracking-wider font-MorabbaB'>در حال بارگذاری. . . </p>
            <span className='text-xl text-purple-500 mt-5'>turn on VPN</span>
          </div>
        )
      }
    </div>
  )
}

export default UserList;