import React , { useState , useEffect} from 'react';
import axios from 'axios';
import "./userList.scss";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const UserList = () => {

    const [pep , setPep] = useState({});

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((response) => {
                setPep(response.data.users)
                console.log(response.data.users)
            })
            .catch(error => console.log(error))
    },[])


    const handleDelete = (id) => {
      setPep(pep.filter((item) => item.id !== id ));
      console.log("dddddddddd")
    };
  
    const columns= [
      {field: 'id', headerName: 'ID', width: 40,headerClassName:"fi",cellClassName: 'fe', },
      {field: 'username',headerName: 'Username',width: 140, renderCell: (params) => {
        return (
          <div className="list">
            <img className='listImg' src={params.row.image} alt="imgUser"/>
            <p className='listTitle'>{params.row.username}</p>
            {console.log(params)}
          </div>
        );
      },headerClassName:"fi",cellClassName: 'fe'},
      {field: 'email', headerName: 'Email', width: 200 , headerClassName:"fi",cellClassName: 'fe'},
      {field: 'phone',headerName: 'Phone', width: 160,headerClassName:"fi" ,cellClassName:"fe"},
      {field: 'age',headerName: 'age', width: 90,headerClassName:"fi" ,cellClassName:"fe"},
      {field: 'title',headerName: 'Position',width: 220,headerClassName:"fi" ,cellClassName: 'fe',
      renderCell: (params) => {
        return <div>{params.row.company.title}</div>;
      }},
      {field: 'action',headerName: 'Action', width: 90,headerClassName:"fi" ,cellClassName: 'fe', renderCell:(params) => {
        return (
          <div className='actionList'>
            <Link to={`/user/${params.row.id}`}>
              <button className='alButton'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='alIcon' onClick={() => handleDelete(params.row.id)}/>
          </div>
        )
      }},
  
    ];


    

  return (
    <div className='ali'>
        <DataGrid
        rows={pep}
        columns={columns}
        pageSize={8 }
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList;