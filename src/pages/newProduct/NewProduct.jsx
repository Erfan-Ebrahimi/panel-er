
const NewProduct = () => {
  return (
    <div className='h-[100vh] p-5 bg-slate-950'>
      <div className="newProduct">
      <h1 className="text-yellow-200 font-bold text-2xl">New Product</h1>
      <form className="mt-2.5">
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-yellow-300 font-semibold mb-2.5">Image</label>
          <input className="p-1.5 border-b border-sky-600 bg-slate-950 text-yellow-200 outline-none focus:border-b focus:border-orange-300" type="file" id="file" />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-yellow-300 font-semibold mb-2.5">Name</label>
          <input className="p-1.5 border-b border-sky-600 bg-slate-950 text-yellow-200 outline-none focus:border-b focus:border-orange-300" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-yellow-300 font-semibold mb-2.5">Price</label>
          <input className="p-1.5 border-b border-sky-600 bg-slate-950 text-yellow-200 outline-none focus:border-b focus:border-orange-300" type="text" placeholder="123 $" />
        </div>
        <div className="w-[250px] flex flex-col mb-2.5">
          <label className="text-yellow-300 font-semibold mb-2.5">Description</label>
          <input className="p-1.5 border-b border-sky-600 bg-slate-950 text-yellow-200 outline-none focus:border-b focus:border-orange-300" type="text" placeholder="type description for product ..." />
        </div>
        <button className="w-[150px] mt-2.5 border-none py-2 px-3 bg-sky-800 text-white font-bold cursor-pointer text-lg hover:bg-white hover:text-sky-800 transition-colors duration-300 ">Create</button>
      </form>
    </div>
    </div>
  )
}

export default NewProduct;