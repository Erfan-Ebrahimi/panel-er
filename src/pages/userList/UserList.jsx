import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const UserList = () => {

  const [pep, setPep] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((response) => {
        setPep(response.data.users)
        console.log(response.data.users)
      })
      .catch(error => console.log(error))
  }, [])


  const handleDelete = (id) => {
    setPep(pep.filter((item) => item.id !== id));
    console.log("dddddddddd")
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 40, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base', },
    {
      field: 'username', headerName: 'Username', width: 140, renderCell: (params) => {
        return (
          <div className="flex items-center flex-row">
            <img className='w-10 rounded-full bg-black border border-green-400' src={params.row.image} alt="imgUser" />
            <p className='ml-2.5'>{params.row.username}</p>
          </div>
        );
      }, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base'
    },
    { field: 'email', headerName: 'Email', width: 200, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base' },
    { field: 'phone', headerName: 'Phone', width: 160, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "text-yellow-200 font-semibold text-base" },
    { field: 'age', headerName: 'age', width: 90, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: "text-yellow-200 font-semibold text-base" },
    {
      field: 'title', headerName: 'Position', width: 220, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base',
      renderCell: (params) => {
        return <div>{params.row.company.title}</div>;
      }
    },
    {
      field: 'action', headerName: 'Action', width: 90, headerClassName: "text-yellow-200 font-semibold text-base", cellClassName: 'text-yellow-200 font-semibold text-base', renderCell: (params) => {
        return (
          <div className='flex items-center'>
            <Link to={`/user/${params.row.id}`}>
              <button className='border-none bg-[#a5f776] text-green-800 px-3 py-px rounded-lg cursor-pointer font-bold hover:bg-green-700 hover:text-yellow-100 transition-colors duration-300'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='bg-none border-none cursor-pointer text-red-400 hover:text-red-700 transition-colors duration-300' onClick={() => handleDelete(params.row.id)} />
          </div>
        )
      }
    },

  ];




  return (
    <div className='bg-slate-950'>
      {pep.length ? (
        <DataGrid
          rows={pep}
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

export default UserList;