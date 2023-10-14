import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Swal from 'sweetalert2';
import HashLoader from "react-spinners/HashLoader";

const UserList = () => {

  const [users, setUsers] = useState({});

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {

    axios.get("https://panel-er.iran.liara.run/users")
      .then((response) => {
        setUsers(response.data)
      })
      .catch(error => console.log(error))
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'آیا از حذف کاربر اطمینان دارید ؟',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`https://panel-er.iran.liara.run/users/${id}`)
          .then((response) => {
            if (response.status == '200') {
              Swal.fire('کاربر با موفقیت حذف شد !!!', '', 'success')
              getUsers()
            }
          })
          .catch(error => {
            console.log(error)
            Swal.fire('کاربر حذف نشد دوباره تلاش کنید ):', '', 'error')

          })
      }
    });
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 40, cellClassName: 'ce text-zinc-400 text-base font-semibold', },
    {
      field: 'username', headerName: 'نام و نام خانوادگی', width: 240, renderCell: (params) => {
        console.log('params =>', params);
        return (
          <div className="flex items-center bg-slate-950 rounded-lg w-[250px]">
            <img className='w-11 h-11 rounded-md border border-red-500/20' src={params.row.image} alt="imgUser" />
            <p className='text-zinc-400 mr-2.5 font-Dana '>{params.row.firstName}{" "}{params.row.lastName}</p>
          </div>
        );
      }, cellClassName: 'text-blue-300 font-semibold text-base'
    },
    {
      field: 'email', headerName: 'ایمیل', width: 220, cellClassName: 'ce text-zinc-400 text-base font-semibold',
      renderCell: (params) => {
        return <div className='font-mono'>{params.row.email}</div>;
      }
    },
    { field: 'phone', headerName: 'تلفن', width: 140, cellClassName: "ce text-zinc-400 text-base font-semibold" },
    { field: 'age', headerName: 'سن', width: 80, cellClassName: "ce text-zinc-400 text-base font-semibold" },
    {
      field: 'job', headerName: 'شغل', width: 100, cellClassName: 'ce text-zinc-400 text-base font-semibold',
      renderCell: (params) => {
        return <div className='font-Dana'>{params.row.job}</div>;
      }
    },
    {
      field: 'action', headerName: 'ویرایش/حذف', width: 150, cellClassName: 'ce text-zinc-400 text-base font-semibold', renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={`/user/${params.row.id}`}>
              <button className='border-none bg-green-700 text-green-200 px-3 font-Dana text-sm py-px rounded-lg cursor-pointer  hover:bg-green-600 hover:text-yellow-100 transition-colors duration-300'>ویرایش</button>
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
            <Link to='/newUser' className='rounded-lg border border-red-100 text-zinc-200 px-2 py-1  font-Dana bg-green-700'>کاربر جدید</Link>
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
            <p className='flex items-center text-5xl text-yellow-1 text-centerfont-bold tracking-wider font-MorabbaB'>در حال بارگذاری</p>
            <span className='text-xl text-purple-500 my-5'>turn on VPN</span>
            <HashLoader
              color="#b6a740"
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )
      }
    </div>
  )
}

export default UserList;