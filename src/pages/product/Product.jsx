/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ChartP from '../../components/chart/ChartP';
import { productData } from "../../components/chart/dummyData";
import { useFormik } from 'formik';
import { basicSchemaP } from '../newProduct/SchemaP';
import Swal from 'sweetalert2';

const Product = () => {

  const params = useParams();

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getProduct()
    console.log(params.productId);
  }, [])

  const getProduct = () => {
    axios.get(`https://panel-er.iran.liara.run/products/${params.productId}`)
      .then((response) => {
        setProductInfo(response.data)
      })
      .catch(error => console.log(error))
  }

  const onSubmit = (values, actions) => {
    Swal.fire({
      title: 'آیا از ویرایش اطمینان دارید ؟',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.put(`https://panel-er.iran.liara.run/products/${(params.productId)}`, {
          title: values.title,
          price: values.price,
          description: values.description,
          category: values.category,
          cover: values.cover,
          rate: values.rate,
          count: values.count,
        }).then((response) => {
          console.log(response);
          if (response.status == '200') {
            Swal.fire('محصول با موفقیت ویرایش شد :))', '', 'success')
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
    <div className="product p-3 bg-zinc-950 ">
      <div className='flex justify-between border-b border-yellow-700 pb-5'>
        <h1 className=' font-MorabbaB text-yellow-1 text-2xl mr-5'>اطلاعات محصول</h1>
        <Link to="/newproduct">
          <button className=" border-none p-2 text-white rounded-md text-base font-Dana cursor-pointer hover:bg-white hover:text-teal-700 transition-colors duration-300 font-bold bg-teal-600">محصول جدید</button>
        </Link>
      </div>
      <div className="flex flex-row justify-between p-4">
        <div className="flex flex-col gap-y-2 ml-4">
          <h1 className="text-3xl text-yellow-600 font-DanaB">{productInfo.title}</h1>
          <p className="w-[80%] text-lg/5 text-yellow-200 font-DanaM">{productInfo.description}</p>
          <div className="flex flex-row mt-5">
            <span className="text-yellow-600 font-DanaM">قیمت : </span>
            <span className="text-yellow-600 pl-2 font-DanaM mr-3">{Number(productInfo.price).toLocaleString()} تومان</span>
          </div>
        </div>
        <div className='shrink-0 overflow-hidden flex items-center'>
          <img src={productInfo.cover} alt="" className="w-[200px] h-[200px] rounded" />
        </div>

      </div>
      <div className='border-b border-yellow-600 pb-5'>
        <ChartP data={productData} dataKey1="تعداد" title="فروش در ۶ ماه" />
      </div>

      {/*----------------------------------- form ---------------------------------------------------- */}
      <div className='newUser h-[100vh] bg-zinc-950 p-5'>
        <h1 className="text-2xl text-yellow-300 font-bold font-MorabbaB">ویرایش محصول</h1>

        <form onSubmit={handleSubmit} autoComplete="off" >

          <div className="flex flex-wrap mt-10">
            <div className="flex flex-col m-5 mt-1 h-[80px]">
              <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="title">نام</label>
              <input
                className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2 ${errors.title && touched.title ? "border border-red-700 bg-red-700 outline-none" : ""}`}
                type="text"
                id='title'
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={productInfo.title}
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
                placeholder={productInfo.price}
              />
              {errors.price && touched.price && <span className='text-red-500 w-[240px] pt-2 font-Dana text-xs'>{errors.price}</span>}

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
                placeholder={productInfo.rate}
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
                placeholder={productInfo.count} />
              {errors.count && touched.count && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.count}</span>}
              <div className='w-20 h-20 mx-auto mt-5'>
              </div>
            </div>
            <div className="flex flex-col m-5 mt-1 h-[150px]">
              <label className='text-yellow-300 mb-1 font-MorabbaB' htmlFor="description">توضیحات</label>
              <textarea
                className={`w-[250px] font-Dana outline-none py-1 px-2 bg-black rounded-md border-b border-sky-400 outline text-yellow-100 focus:bg-sky-950 focus:border focus:border-sky-400 mt-2  ${errors.description && touched.description ? "border border-red-700 bg-red-700 outline-none" : ""}`}
                rows={10}
                cols={20}
                type="textarea"
                id='description'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={productInfo.description}
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
                placeholder={productInfo.cover}
              />
              {errors.cover && touched.cover && <span className='text-red-500 w-[240px] pt-2 font-Dana text-sm'>{errors.cover}</span>}
              <img src={values.cover} alt="هیچ لینکی ارسال نشده است" className='color-red rounded-lg object-cover' />

            </div>

          </div>
          <button className="w-[180px] bg-green-500 font-Dana py-1.5 outline-none px-5 rounded-md text-black text-xl font-bold mt-10 mx-auto block cursor-pointer border-none text-center hover:bg-green-900 hover:text-white transition-colors duration-300 disabled:text-zinc-900 disabled:bg-red-500" type='submit' disabled={Object.keys(errors).length} >ثبت تغییرات</button>

        </form>
      </div>

    </div>
  )
}

export default Product;