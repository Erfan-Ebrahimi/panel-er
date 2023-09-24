import { useFormik } from 'formik';
import { basicSchema } from './Schema';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




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

    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    notifyS();
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      gender: "",
      active: "",
    },

    onSubmit,
    validationSchema: basicSchema,
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
              id='username'
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
              id='fullName'
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