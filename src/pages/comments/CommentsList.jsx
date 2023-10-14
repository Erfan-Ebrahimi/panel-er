import axios from "axios";
import { useEffect, useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import Swal from "sweetalert2";
import HashLoader from "react-spinners/HashLoader";



const CommentsList = () => {

    const [comments, setComments] = useState([])
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    async function getUsers() {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
    }

    async function getProducts() {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
    }

    async function getComments() {
        const response = await axios.get("http://localhost:3000/comments");
        setComments(response.data);
    }

    useEffect(() => {
        async function getData() {
            await getUsers();
            await getProducts();
            await getComments();
            setIsLoading(false);
        }

        getData();
    }, []);



    const showBody = (cmBody) => {
        Swal.fire({
            title: cmBody
        })
    }


    const answer = (commentID, commentBody, commentRate, commentproductId, commentuserId) => {
        Swal.fire({
            title: commentBody,
            input: 'text',
            inputLabel: 'پاسخ را وارد کنید...',
            icon: 'info',
            customClass: 'swal-wide',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'ارسال',
            cancelButtonText: 'بستن',
            cancelButtonColor: '#d33',
            inputValidator: (value) => {
                if (!value) {
                    return 'پاسخ را بنویسید'
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put(`http://localhost:3000/comments/${commentID}`, {
                    cmBody: commentBody,
                    answerText: result.value,
                    isAnswer: true,
                    cmRate: commentRate,
                    productId: commentproductId,
                    userId: commentuserId
                }).then(res => {
                    if (res.status == '200') {
                        getComments()

                        Swal.fire({
                            icon: 'success',
                            title: 'پاسخ با موفقیت ارسال شد',
                            showConfirmButton: true,
                            timer: 1500
                        })
                    }
                }).catch((err) => {
                    Swal.fire(`دوباره تلاش کنید !!!`, '', 'error')
                    console.log(err);
                })
            }
        })
    }

    const remove = (commentID) => {
        Swal.fire({
            title: 'آیا از حذف کامنت اطمینان دارید ؟',
            icon: "question",
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/comments/${commentID}`, {
                }).then((response) => {
                    if (response.status == '200') {
                        getComments()
                        Swal.fire('کامنت با موفقیت حذف شد :))', '', 'success')
                    }
                }).catch(error => {
                    Swal.fire(`دوباره تلاش کنید !!!`, '', 'error')
                    console.log(error);
                })
            }
        })
    }


    if (isLoading) {
        return (
            <div className='flex flex-col justify-center items-center w-full h-[100vh] bg-zinc-950'>
            <p className='flex items-center text-5xl text-yellow-1 text-centerfont-bold tracking-wider font-MorabbaB'>در حال بارگذاری</p>
            <span className='text-xl text-purple-500 my-5'>turn on VPN</span>
            <HashLoader
              color="#b6a740"
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        );
    }

    return (

        (comments && users && products) ?
            (
                <div className="bg-zinc-800">
                    <h3 className=" font-MorabbaB text-2xl text-yellow-1 pr-10 pt-5">لیست نظرات</h3>
                    <div className="flex p-5 mx-auto justify-center">
                        <table className="text-center bg-zinc-800">
                            <thead className="border-b font-medium">
                                <tr >
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">شناسه</th>
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">کاربر</th>
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">محصول</th>
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">متن</th>
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">امتیاز</th>
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">پاسخ</th>
                                    <th scope="col" className="px-6 py-4 font-MorabbaB text-yellow-1">حذف</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comments.map((comment, index) => (
                                        <>
                                            <tr key={comment.id} className={`border-b transition duration-300 ease-in-out hover:bg-zinc-700 ${comment.isAnswer ? "bg-green-950" : "bg-yellow-900"}`}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana text-white">{index + 1}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana text-white">{users[comment.userId].firstName}{" "}{users[comment.userId].lastName}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana text-white">{products[comment.productId].title}</td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana">
                                                    <button
                                                        onClick={() => {
                                                            showBody(comment.cmBody)
                                                        }}
                                                        className="px-2 py-1 text-sm bg-sky-900 rounded-lg hover:bg-sky-700 text-zinc-100"
                                                    >
                                                        مشاهده متن
                                                    </button>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana">
                                                    {
                                                        Array(5 - Number(comment.cmRate)).fill(0).map((item, index) => (
                                                            <StarIcon key={index} className="w-4 h-4 md:w-6 md:h-6 stroke-orange-300 text-white/10" />
                                                        ))
                                                    }
                                                    {
                                                        Array(Number(comment.cmRate)).fill(0).map((item, index) => (
                                                            <StarIcon key={index} className="w-4 h-4 md:w-6 md:h-6 text-amber-600" />
                                                        ))
                                                    }
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana">
                                                    <button
                                                        onClick={() => {
                                                            answer(comment.id, comment.cmBody, comment.cmRate, comment.productId, comment.userId)
                                                        }}
                                                        className="px-2 py-1 text-sm bg-green-900 rounded-lg hover:bg-green-800 text-zinc-100"
                                                    >
                                                        پاسخ
                                                    </button>
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium font-Dana">
                                                    <button
                                                        onClick={() => {
                                                            remove(comment.id)
                                                        }}
                                                        className="px-2 py-1 text-sm bg-rose-900 rounded-lg hover:bg-rose-800 text-zinc-100"
                                                    >
                                                        حذف
                                                    </button>
                                                </td>

                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )
            :
            (<p className="flex justify-center items-center bg-red-300 w-full h-full">در حال بارگزاری</p>)

    )
}

export default CommentsList;