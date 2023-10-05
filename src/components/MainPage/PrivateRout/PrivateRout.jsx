import { useContext } from "react";
import { AuthContext } from "../AurthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const loc = useLocation();
    console.log(loc)
    if (loading) {
        return <h1 className="text-2xl"> Loading...</h1>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate state={loc.pathname} to="/login"></Navigate>
    }

};

export default PrivateRout;