import { useFormik } from 'formik';
import { basicSchema } from './Schema';
import axios from 'axios';
import Swal from 'sweetalert2';

const NewUser = () => {

  const onSubmit = (values, actions) => {
    Swal.fire({
      title: 'آیا از ثبت کاربر جدید اطمینان دارید ؟',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("https://panel-er.iran.liara.run/users", {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          username: values.username,
          phone: values.phone,
          age: values.age,
          image: values.image,
          job: values.job,
          gender: values.gender,
        }).then((response) => {
          if (response.status == '201') {
            Swal.fire('کاربر با موفقیت ثبت شد :))', '', 'success')
            actions.resetForm();

          }
        }).catch(error => {
          Swal.fire(`دوباره تلاش کنید !!!`, '', 'error')
          console.log(error);
          actions.resetForm();
        })
      }
    })
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      phone: "",
      age: "",
      image: "",
      job: "",
      gender: "",
    },
    onSubmit,
    validationSchema: basicSchema,
  })

  return (
    <div className='newUser h-[100vh] bg-zinc-950 p-5'>
      <h1 className="text-2xl text-yellow-300 font-bold font-MorabbaB">کاربر جدید</h1>

      <form onSubmit={handleSubmit} autoComplete="off" >

        <div className="flex flex-wrap mt-10">
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="firstName">نام</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.firstName && touched.firstName ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='firstName'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="نام را وارد کنید"
            />
            {errors.firstName && touched.firstName && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.firstName}</span>}
          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="lastName">نام خانوادگی</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.lastName && touched.lastName ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='lastName'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="نام خانوادگی کاربر را وارد کنید"
            />
            {errors.lastName && touched.lastName && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.lastName}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="email">ایمیل</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.email && touched.email ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="email"
              id='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="ایمیل کاربر را وارد کنید"
            />
            {errors.email && touched.email && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.email}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="username">نام کاربری</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.username && touched.username ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="نام کاربری را وارد کنید"
            />
            {errors.username && touched.username && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.username}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="phone">شماره تلفن</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.phone && touched.phone ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='phone'
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="شماره همراه کاربر را وارد کنید"
            />
            {errors.phone && touched.phone && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.phone}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="age">سن</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.age && touched.age ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='age'
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="سن کاربر را وارد کنید"
            />
            {errors.age && touched.age && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.age}</span>}
          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="image">کاور پروفایل</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.image && touched.image ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='image'
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="لینک عکس را کپی کنید :)"
            />
            {errors.image && touched.image && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.image}</span>}
            <div className='w-44 h-44 mx-auto mt-5'>
              <img src={values.image} alt="هیچ لینکی ارسال نشده است" className='color-red rounded-lg object-cover' />
            </div>
          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="job">شغل</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.job && touched.job ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='job'
              value={values.job}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="شغل کاربر را وارد کنید"
            />
            {errors.job && touched.job && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.job}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB'>جنسیت</label>
            <select className='w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ' name="gender" id="gender" onChange={handleChange} value={values.gender}>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
          </div>
        </div>
        <button className="w-[180px] bg-green-500 font-Dana py-1.5 outline-none px-5 rounded-md text-black text-xl font-bold mt-10 mx-auto block cursor-pointer border-none text-center hover:bg-green-900 hover:text-white transition-colors duration-300 disabled:text-zinc-900 disabled:bg-red-500" type='submit' disabled={Object.keys(errors).length}>ثبت کاربر جدید</button>

      </form>
    </div>
  )
}

export default NewUser;