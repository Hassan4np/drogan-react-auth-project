import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../Router/firebase.config";
import { useLocation } from "react-router-dom";

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState({});
    const [loading, setloading] = useState(true)


    //Signup----------->
    const UserSignup = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login------>
    const UserLogin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Logout-------->
    const UserLogOut = () => {
        setloading(true)
        return signOut(auth)
    }

    //On state Change objarbe the state------>
    useEffect(() => {
        const unscribe = onAuthStateChanged(auth, (current) => {
            setuser(current)
            setloading(false)
        });
        return () => {
            unscribe()
        };
    }, []);

    const Authinfo = {
        UserSignup,
        UserLogin,
        UserLogOut,
        user,
        loading
    }
    console.log(user)
    return (
        <div>
            <AuthContext.Provider value={Authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;