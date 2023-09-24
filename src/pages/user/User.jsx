import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ElderlyIcon from '@mui/icons-material/Elderly';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';


const User = () => {

    const [pep, setPep] = useState({});
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [img, setImg] = useState("");

    const para = useParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${(para.id)}`)
            .then((response) => {
                // setPep(response.data.users[Object.values(para)-1])
                setPep(response.data)
            })
            .catch(error => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        axios.patch(`https://dummyjson.com/users/${para.id}`, {
            firstName: first,
            lastName: last,
            username: username,
            email: email,
            phone: phone,
            age: age,
            image: img,
        }).then((response) => {
            setPep(response.data)
            console.log(response.data)
        }).catch(error => console.log(error))



    }
    return (
        <>
            <div className='h-[100vh] bg-slate-950 pt-10 px-5 '>
                <div className="flex items-center justify-between">
                    <h1 className="text-yellow-300 text-2xl font-bold">Edit User</h1>
                    <Link to="/newUser">
                        <button className='w-24 cursor-pointer border-none bg-teal-600 text-white py-1.5 rounded-md font-bold hover:bg-teal-100 hover:text-teal-800 transition-colors duration-300'>Create New</button>
                    </Link>
                </div>
                <div className="flex mt-5">
                    <div className="bg-slate-800 flex-1 p-5 rounded-md ">
                        <div className="flex items-center">
                            <img src={pep.image} alt="uImg" className="w-10 h-10 object-cover rounded-full bg-black border border-yellow-300" />
                            <div className="flex flex-col ml-1 text-yellow-300">
                                <span className="font-bold">{pep.firstName}</span>
                                <span className="font-semibold">{pep.lastName}</span>

                            </div>
                        </div>
                        <div className="mt-5">
                            <span className="text-xl text-green-600 font-bold">Account Details</span>
                            <div className="flex items-center m-2.5">
                                <PermIdentityIcon className='text-2xl text-orange-400' />
                                <span className="text-yellow-300 ml-1">{pep.username}</span>
                            </div>
                            <div className="flex items-center m-2.5">
                                <CalendarTodayIcon className='text-2xl text-orange-400' />
                                <span className="text-yellow-300 ml-1">{pep.birthDate}</span>
                            </div>
                            <span className="text-xl text-green-600 font-bold">Contact Details</span>
                            <div className="flex items-center m-2.5">
                                <PhoneAndroidIcon className='text-2xl text-orange-400' />
                                <span className="text-yellow-300 ml-1">{pep.phone}</span>
                            </div>
                            <div className="flex items-center m-2.5">
                                <MailOutlineIcon className='text-2xl text-orange-400' />
                                <span className="text-yellow-300 ml-1">{pep.email}</span>
                            </div>
                            <div className="flex items-center m-2.5">
                                <ElderlyIcon className='text-2xl text-orange-400' />
                                <span className="text-yellow-300 ml-1">{pep.age} y.o</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow p-5 rounded-md bg-[#0f6e2dfb]">
                        <span className="text-2xl text-yellow-300 font-bold">Edit</span>
                        <form action='#' className="flex justify-between mt-2.5">
                            <div className="uuLeft">
                                <div className="flex flex-col mt-2">
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="">First Name</label>
                                    <input type="text" placeholder={pep.firstName} className='border-b border-sky-500 bg-black w-[250px] h-8 px-2 rounded-md text-yellow-200 focus:border-2 focus:bg-sky-950 outline-none' value={first} onChange={changerFirst} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="">Last Name</label>
                                    <input type="text" placeholder={pep.lastName} className='border-b border-sky-500 bg-black w-[250px] h-8 px-2 rounded-md text-yellow-200 focus:border-2 focus:bg-sky-950 outline-none' value={last} onChange={changerLast} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="">Username</label>
                                    <input type="text" placeholder={pep.username} className='border-b border-sky-500 bg-black w-[250px] h-8 px-2 rounded-md text-yellow-200 focus:border-2 focus:bg-sky-950 outline-none' value={username} onChange={changerUsername} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="">Phone</label>
                                    <input type="number" placeholder={pep.phone} className='border-b border-sky-500 bg-black w-[250px] h-8 px-2 rounded-md text-yellow-200 focus:border-2 focus:bg-sky-950 outline-none' value={phone} onChange={changerPhone} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="">Email</label>
                                    <input type="email" placeholder={pep.email} className='border-b border-sky-500 bg-black w-[250px] h-8 px-2 rounded-md text-yellow-200 focus:border-2 focus:bg-sky-950 outline-none' value={email} onChange={changerEmail} />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="">Age</label>
                                    <input type="number" placeholder={pep.age} className='border-b border-sky-500 bg-black w-[250px] h-8 px-2 rounded-md text-yellow-200 focus:border-2 focus:bg-sky-950 outline-none' value={age} onChange={changerAge} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div className="flex items-center">
                                    <img src={pep.image} alt="" className="w-28 h-28 rounded-full object-cover mr-2.5 bg-black border border-yellow-300" />
                                    <label className='text-yellow-200 mb-1.5 font-semibold' htmlFor="file"><PublishOutlinedIcon className='text-orange-300' /></label>
                                    <input type="file" id='file' style={{ display: "none" }} value={img} onChange={changerImg} />
                                </div>
                                <button className="border-none cursor-pointer p-2 bg-yellow-300 font-bold rounded-md hover:bg-black hover:text-yellow-300 transition-colors duration-300" onClick={sender}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;