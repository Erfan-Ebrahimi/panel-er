import axios from 'axios';
import { useFormik } from 'formik';
import { basicSchemaP } from '../newProduct/SchemaP';
import Swal from 'sweetalert2';


const NewProduct = () => {


  const onSubmit = (values, actions) => {
    Swal.fire({
      title: 'آیا از ثبت اطلاعات اطمینان دارید ؟',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`http://localhost:3000/products`, {
          title: values.title,
          price: values.price,
          description: values.description,
          category: values.category,
          cover: values.cover,
          rate: values.rate,
          count: values.count,
        }).then((response) => {
          console.log(response);
          if (response.status == '201') {
            Swal.fire('محصول با موفقیت ثبت شد :))', '', 'success')
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
      title: "",
      price: "",
      description: "",
      category: "",
      cover: "",
      rate: "",
      count: "",
    },
    onSubmit,
    validationSchema: basicSchemaP,
  })

  return (
    <div className='newUser h-[100vh] bg-zinc-950 p-5'>
      <h1 className="text-2xl text-yellow-300 font-bold font-MorabbaB">ثبت محصول جدید</h1>

      <form onSubmit={handleSubmit} autoComplete="off" >

        <div className="flex flex-wrap mt-10">
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="title">نام محصول</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.title && touched.title ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='title'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.title && touched.title && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.title}</span>}
          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="category">دسته بندی</label>
            <select
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.category && touched.category ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='category'
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="{productInfo.category}
"            >
              <option value="لباس مردانه">لباس مردانه</option>
              <option value="لباس زنانه">لباس زنانه</option>
              <option value="الکترونیک">الکترونیک</option>
              <option value="جواهرات">جواهرات</option>
            </select>
            {errors.category && touched.category && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.category}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="price">قیمت</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.price && touched.price ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='price'
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="هزار تومان"
            />
            {errors.price && touched.price && <span className='text-red-500 w-[250px] pt-2 font-Dana text-xs'>{errors.price}</span>}

          </div>





          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="rate">امتیاز</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.rate && touched.rate ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='rate'
              value={values.rate}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.rate && touched.rate && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.rate}</span>}
          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="count">تعداد</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.count && touched.count ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='count'
              value={values.count}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.count && touched.count && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.count}</span>}
            <div className='w-20 h-20 mx-auto mt-5'>
            </div>
          </div>
          <div className="flex flex-col m-5 mt-1 h-[150px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="description">توضیحات محصول</label>
            <textarea
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.description && touched.description ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              rows={10}
              cols={20}
              type="textarea"
              id='description'
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && touched.description && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.description}</span>}

          </div>
          <div className="flex flex-col m-5 mt-1 h-[80px]">
            <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="cover">کاور محصول</label>
            <input
              className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.cover && touched.cover ? "border border-red-700 bg-red-700 outline-none" : ""}`}
              type="text"
              id='cover'
              value={values.cover}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="لینک عکس را کپی کنید !!"
            />
            {errors.cover && touched.cover && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.cover}</span>}
            <img src={values.cover} alt="هیچ لینکی ارسال نشده است" className='color-red rounded-lg object-cover mx-auto mt-5 w-20 h-20' />

          </div>

        </div>
        <button className="w-[180px] bg-green-500 font-Dana py-1.5 outline-none px-5 rounded-md text-black text-xl font-bold mt-10 mx-auto block cursor-pointer border-none text-center hover:bg-green-900 hover:text-white transition-colors duration-300 disabled:text-zinc-900 disabled:bg-red-500" type='submit' disabled={Object.keys(errors).length} >ثبت محصول</button>

      </form>
    </div>
  )
}

export default NewProduct;