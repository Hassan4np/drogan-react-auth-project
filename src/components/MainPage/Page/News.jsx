import { useParams } from "react-router-dom";


const News = () => {
    const {id} = useParams()
    return (
        <div>
            <p>{id}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, nobis.</p>
        </div>
    );
};

export default News;