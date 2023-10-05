import { useContext } from "react";
import Navbar from "../Page/Navbar";
import { AuthContext } from "../AurthProvider/AuthProvider";


const Signup = () => {
    const { UserSignup } = useContext(AuthContext)

    const hendleSignup = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        console.log(form)
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name')
        UserSignup(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(erroe => {
                console.log(erroe)
            })


    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;