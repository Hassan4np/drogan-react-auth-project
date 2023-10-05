
import Marquee from "react-fast-marquee";
const Headline = () => {
    return (
        <div className="flex">
            <button className="btn btn-sm btn-success">lestes</button>
            <Marquee pauseOnHover={true} speed={100} className="text-green-500">
                I can be a React component, multiple React components, or just some text.
            </Marquee>

        </div>
    );
};

export default Headline;