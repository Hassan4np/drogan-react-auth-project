import { useEffect, useState } from "react";


const CagegoryNews = () => {
    const [category, setcategory] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(news => setcategory(news))
    }, [])
    return (
        <div>
            {category.slice(0, 3).map((categorys, idx) =>
                <div key={idx}>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={categorys.image_url}alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p>{categorys.title}</p>
                            
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default CagegoryNews;