import React from 'react';

import { useFormik } from 'formik';
import { basicSchema } from './Schema';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import "./newUser.scss";

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

  const onSubmit = async (values , actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => setTimeout(resolve , 2000));
    actions.resetForm();
    notifyS();
  }
  
  const {values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting } = useFormik({
    initialValues : {
      username : "",
      fullName : "",
      email : "",
      password : "",
      confirmPassword : "",
      phone : "",
      address : "",
      gender : "",
      active : "",
    },

    onSubmit,
    validationSchema : basicSchema,
  })


  const errorMes = JSON.stringify(errors);

  return (
    <div className='newUser'>
      <h1 className="nuTitle">New User</h1>

      <form  onSubmit={handleSubmit} autoComplete="off" >

        <div className="nuForm">
          <div className="nuItem">
            <label htmlFor="username">Username</label>
            <input 
            className={errors.username && touched.username ? "inputError" : ""}
            type="text" 
            id='username' 
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Erfan__es"
            />
            {errors.username && touched.username && <span className='error'>{errors.username}</span>}
          </div>
          <div className="nuItem">
            <label htmlFor="fullName">Full Name</label>
            <input 
            className={errors.fullName && touched.fullName ? "inputError" : ""}
            type="text" 
            id='fullName' 
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Erfan Ebrahimi"
            />
            {errors.fullName && touched.fullName && <span className='error'>{errors.fullName}</span>}

          </div>
          <div className="nuItem">
            <label htmlFor="email">Email</label>
            <input 
            className={errors.email && touched.email ? "inputError" : ""}
            type="email" 
            id='email' 
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="ebrahimi.erfan89@gmail.com"
            />
            {errors.email && touched.email && <span className='error'>{errors.email}</span>}

          </div>
          <div className="nuItem">
            <label htmlFor="password">Password</label>
            <input 
            className={errors.password && touched.password ? "inputError" : ""}
            type="password" 
            id='password' 
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="********"
            />
            {errors.password && touched.password && <span className='error'>{errors.password}</span>}

          </div>
          <div className="nuItem">
            <label htmlFor="confirmPassword">Confirm Passsword</label>
            <input 
            className={errors.confirmPassword && touched.confirmPassword ? "inputError" : ""}
            type="password" 
            id='confirmPassword' 
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="********"
            />
            {errors.confirmPassword && touched.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
          </div>
          <div className="nuItem">
            <label htmlFor="phone">Phone</label>
            <input 
            className={errors.phone && touched.phone ? "inputError" : ""}
            type="number" 
            id='phone' 
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="09918790969"
            />
            {errors.phone && touched.phone && <span className='error'>{errors.phone}</span>}

          </div>
        </div>

        <div className="nuItem ggg">

          <div className="btItem">
            <label>Gender</label>
            <select name="gender" id="gender" onChange={handleChange} value={values.gender}>
              <option className='fff' value="male">Male</option>
              <option className='fff' value="female">Female</option>
            </select>
          </div>

          <div className="btItem">
            <label>Active</label>
            <select  name="active" id="active"  onChange={handleChange} value={values.active}>
              <option className='fff' value="yes">Yes</option>
              <option className='fff' value="no">No</option>
            </select>
          </div>

        </div>
          
        <button className="nuButton" type='submit' disabled={isSubmitting} onClick={Object.keys(errors).length &&  notifyE }>Create</button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default NewUser;