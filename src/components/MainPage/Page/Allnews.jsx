import { useEffect, useState } from "react";


const Allnews = () => {
    const [category, setcategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(news => setcategory(news))
    }, [])


    return (
        <div className="space-y-3 text-lg font-medium">
            {category.map((category, idx) =>
             <div className="" key={idx}>
                <h5>{category.name}</h5>
            </div>)}
        </div>
    );
};

export default Allnews;