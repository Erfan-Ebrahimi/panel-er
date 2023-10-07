import { useFormik } from 'formik';
// import { basicSchema } from './Schema';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




const NewUser = () => {

  const notifyS = () => {
    toast.success('success', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const notifyE = () => {
    toast.error(errorMes, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      className: 'toast-message'
    });
  }

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    
    axios.post(`http://localhost:3000/users`, {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      age: "",
      image: "data:image/jpeg;base64,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",
    }).then((response) => {
      console.log(response.data)
    }).catch(error => console.log(error))


    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    notifyS();
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      age: "",
      image: "",
      active: "",
    },

    onSubmit,
    // validationSchema: basicSchema,
  })


  const errorMes = JSON.stringify(errors);

  return (
    <div className='newUser h-[100vh] bg-slate-950 p-5'>
      <h1 className="text-2xl text-yellow-300 font-bold">New User</h1>

      <form onSubmit={handleSubmit} autoComplete="off" >

        <div className="flex flex-wrap">
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="username">Username</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2 ${errors.username && touched.username ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='firstName'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Erfan__es"
            />
            {errors.username && touched.username && <span className='text-red-500 w-[300px]'>{errors.username}</span>}
          </div>
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="fullName">Full Name</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2 ${errors.fullName && touched.fullName ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='lastName'
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Erfan Ebrahimi"
            />
            {errors.fullName && touched.fullName && <span className='text-red-500 w-[300px]'>{errors.fullName}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="email">Email</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2  ${errors.email && touched.email ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="email"
              id='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="ebrahimi.erfan89@gmail.com"
            />
            {errors.email && touched.email && <span className='text-red-500 w-[300px]'>{errors.email}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="email">Address</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2  ${errors.address && touched.address ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='address'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Arak-Shazand"
            />
            {errors.address && touched.address && <span className='text-red-500 w-[300px]'>{errors.address}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="password">Password</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2 ${errors.password && touched.password ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="password"
              id='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="********"
            />
            {errors.password && touched.password && <span className='text-red-500 w-[300px]'>{errors.password}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="confirmPassword">Confirm Passsword</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2  ${errors.confirmPassword && touched.confirmPassword ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="password"
              id='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="********"
            />
            {errors.confirmPassword && touched.confirmPassword && <span className='text-red-500 w-[300px]'>{errors.confirmPassword}</span>}
          </div>
          <div className="flex flex-col m-5 mt-1">
            <label className='text-yellow-300 text-lg mb-1' htmlFor="phone">Phone</label>
            <input
              className={`w-[350px] outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-xl text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mb-2  ${errors.phone && touched.phone ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="number"
              id='phone'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="09918790969"
            />
            {errors.phone && touched.phone && <span className='text-red-500 w-[300px]'>{errors.phone}</span>}

          </div>
        </div>

        <div className="flex flex-col m-5 mt-1">

          <div className="flex flex-col mt-2.5">
            <label className='text-yellow-300 text-lg mb-1'>Gender</label>
            <select className='w-[150px] p-1 mt-1 bg-black outline-none border-b border-sky-400 rounded-md text-white' name="gender" id="gender" onChange={handleChange} value={values.gender}>
              <option className='fff' value="male">Male</option>
              <option className='fff' value="female">Female</option>
            </select>
          </div>

          <div className="flex flex-col mt-2.5">
            <label className='text-yellow-300 text-lg mb-1'>Active</label>
            <select className='w-[150px] p-1 mt-1 bg-black outline-none border-b border-sky-400 rounded-md text-white' name="active" id="active" onChange={handleChange} value={values.active}>
              <option className='fff' value="yes">Yes</option>
              <option className='fff' value="no">No</option>
            </select>
          </div>

        </div>

        <button className="w-[180px] bg-yellow-500 py-1.5 outline-none px-5 rounded-md text-black text-xl font-bold mt-10 mx-auto block cursor-pointer border-none text-center disabled:bg-red-700" type='submit' disabled={isSubmitting} onClick={Object.keys(errors).length && notifyE}>Create</button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default NewUser;