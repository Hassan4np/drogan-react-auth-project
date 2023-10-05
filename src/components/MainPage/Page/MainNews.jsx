
import { useEffect, useState } from "react";
import { BsBookmark, BsFillShareFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
const MainNews = () => {
    const [categorys, setcategory] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(news => setcategory(news))
    }, [])
    console.log(categorys)
    return (
        <div className="">
            {
                categorys.slice(0, 4).map((category, idx) =>
                    <div className="mb-5 border py-4" key={idx}>
                        <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <div className="flex justify-between px-5 mb-5 ">
                                <div className="flex space-x-5">
                                    <img className="w-[50px] rounded-full" src={category.author.img} alt="" />
                                    <div>
                                        <h5 className="text-start">{category.author.name}</h5>
                                        <p>{category.author.published_date}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <span><BsBookmark></BsBookmark></span>
                                    <span><BsFillShareFill></BsFillShareFill></span>
                                </div>
                            </div>
                            <h1 className="text-start px-5">{category.title}</h1>
                            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">

                                <img  className="w-full"
                                     src={category.thumbnail_url}
                                    alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                                <button
                                    className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="p-6">

                                <p className=" text-start font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                                    {category.details.length>200 ? <p>{category.details.slice(0,200)}<Link className="text-green-400 font-bold text-xl" to={`/news/${category._id}`}>See more..</Link></p>:<p>{category.details}</p>}
                                </p>
                                <div className="mb-3 flex items-center justify-between mt-5">
                                    <div className="flex "> 
                                        <div className="rating">
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                            <input type="radio" name="rating-1" className="mask mask-star" />
                                        </div>
                                        <p className="ml-5">{category.rating.number}</p>
                                    </div>
                                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                       <span className="text-2xl"><AiFillEye></AiFillEye></span>
                                       <span>{category.total_view}</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MainNews;