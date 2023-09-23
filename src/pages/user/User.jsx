import React , { useState , useEffect} from 'react';
import axios from 'axios';
import "./user.scss";

import { useParams , Link } from 'react-router-dom';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';


const User = () => {
  
    const [pep , setPep] = useState({});
    const [first , setFirst] = useState("");
    const [last , setLast] = useState("");
    const [username , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [phone , setPhone] = useState("");
    const [age , setAge] = useState("");
    const [img , setImg] = useState("");
    
    const para = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${(para.id)}`)
            .then((response) => {
                // setPep(response.data.users[Object.values(para)-1])
                setPep(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const changerFirst = (event) => {
        setFirst(event.target.value)
    }
    const changerLast = (event) => {
        setLast(event.target.value)
    }
    const changerUsername = (event) => {
        setUsername(event.target.value)
    }
    const changerEmail = (event) => {
        setEmail(event.target.value)
    }
    const changerPhone = (event) => {
        setPhone(event.target.value)
    }
    const changerAge = (event) => {
        setAge(event.target.value)
    }
    const changerImg = (event) => {
        setImg(event.target.value)
    }

    const sender = () => {
        axios.patch(`https://dummyjson.com/users/${para.id}`,{
            firstName : first,
            lastName : last,
            username : username,
            email : email,
            phone : phone,
            age : age,
            image: img,
        }).then((response) =>{
            setPep(response.data)
            console.log(response.data)
        }).catch(error => console.log(error))
        
        
    
    }
    return (
        <>
            <div className='user'>
                <div className="uHeader">
                    <h1 className="uTitle">Edit User</h1>
                    <Link to="/newUser">
                    <button className='uAddButton'>Create</button> 
                    </Link>
                </div>
                <div className="uContainer">
                    <div className="uShow">
                        <div className="uShowTop">
                            <img src={pep.image} alt="uImg" className="uShowImg" />
                            <div className="uTopTitle">
                            <span className="uShowUsername">{pep.firstName}</span>
                            <span className="uShowUsername">{pep.lastName}</span>
                            
                            </div>
                        </div>
                        <div className="uShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">{pep.username}</span>
                            </div>
                            <div className="userShowInfo">
                            <CalendarTodayIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">{pep.birthDate}</span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                            <PhoneAndroidIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">{pep.phone}</span>
                            </div>
                            <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">{pep.email}</span>
                            </div>
                            <div className="userShowInfo">
                            <ElderlyIcon className='userShowIcon'/>
                            <span className="userShowInfoTitle">{pep.age} y.o</span>
                            </div>
                        </div>
                    </div>    
                    <div className="uUpdate">
                        <span className="uuTitle">Edit</span>
                        <form action='#'  className="uuForm">
                            <div className="uuLeft">
                            <div className="uuItem">
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder={pep.firstName} className='uuInput' value={first} onChange={changerFirst}/>
                            </div>
                            <div className="uuItem">
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder={pep.lastName} className='uuInput' value={last} onChange={changerLast}/>
                            </div>  
                            <div className="uuItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder={pep.username} className='uuInput' value={username} onChange={changerUsername}/>
                            </div>
                            <div className="uuItem">
                                <label htmlFor="">Phone</label>
                                <input type="number" placeholder={pep.phone} className='uuInput' value={phone} onChange={changerPhone}/>
                            </div>
                            <div className="uuItem">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder={pep.email} className='uuInput' value={email} onChange={changerEmail}/>
                            </div>    
                            <div className="uuItem">
                                <label htmlFor="">Age</label>
                                <input type="number" placeholder={pep.age} className='uuInput'  value={age} onChange={changerAge}/>
                            </div>    
                            </div>  
                            <div className="uuRight">
                            <div className="uuUpload">
                                <img src={pep.image} alt="" className="uuImg" />
                                <label htmlFor="file"><PublishOutlinedIcon className='uuIcon'/></label>
                                <input type="file" id='file' style={{display:"none"}} value={img} onChange={changerImg}/>
                            </div>
                            <button className="uuButton" onClick={sender}>Update</button>
                            </div>
                        </form>  
                    </div>    
                </div>
            </div>
        </>
  )
}

export default User;