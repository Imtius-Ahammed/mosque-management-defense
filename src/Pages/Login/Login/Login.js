import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { ToastContainer, toast } from 'react-toastify';
import login from "../../../1_images/login.jpg"
import useToken from '../../../hooks/useToken';
import scolarbanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import bsml from "../../../1_images/1_home/2_bsml-txt.png"
import { toast } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser); // token

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading) {
        return <Loading></Loading>
    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }


    if (error) {
        errorElement = <div>
            <p className='text-danger'> Error: {error.message}</p>
        </div>
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        // if (user.emailVerified) {
        //     navigate(from, { replace: true })
        // }
        // else {
        //     toast.error("Your Email is Not verified! Please verify your mail First")
        // }


    }
    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (

        <div className='text-white text-start ' style={{
            backgroundImage: `url(${scolarbanner})`, backgroundRepeat: 'no-repeat', height: "1000px", paddingTop: "5%",
        }}>
            <div className="container mx-auto " >
                <div className="row content justify-content-center ">

                    <div className="col-md-6 " id='sdw'>
                        <div className="mb-3 w-full pt-5 d-flex justify-content-center ">
                            <img className="" src={bsml} alt="" />
                        </div>
                        <h3 className="text-center mb-3"> Sign In</h3>

                        <form style={{ width: '80%', marginLeft: "10%", marginTop: "10%" }} onSubmit={handleSubmit}>
                            <div className=" mb-3 ">
                                <label for="email">Email</label>
                                <input ref={emailRef} type="email" name="email" className="form-control" />
                            </div>
                            <div className=" mb-3">
                                <label for="password">Password</label>
                                <input ref={passwordRef} type="password" name="password" className="form-control " />
                            </div>
                            <div className=" mb-3 form-check">
                                <input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
                                <label className="form-check-label" for="checkbox">Remember Me</label>
                            </div>
                            <button className="btn btn-warning">Login</button>
                        </form>
                        <div style={{ width: '80%', marginLeft: "10%", marginTop: "10%", paddingBottom: "10%" }} >
                            {errorElement}
                            <p className='text-light'>You don't have an account? <Link to='/register' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>

                            <p className='text-light'>Forget your password?

                                <button className='btn btn-link text-danger pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button></p>

                            <button onClick={() => signInWithGoogle()} className="btn btn-success ">Continue With Google</button>
                            {/* <SocialLogin></SocialLogin> */}
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className='container '>
        //     <div className="card m-3 border-0 justify-content-center" >
        //         <div className="row g-0 ">
        //             <div className="col-md-6">
        //                 <img src={login} className="img-fluid rounded-start" alt="..." />
        //             </div>



        //             <div className="col-md-6 bg-dark border  pt- align-items-center  ">
        //                 <div className='rounded-5 ' >
        //                     <div className='  mx-auto my-4   '>
        //                         <h2 className='text-center text-danger m-4 '>Please Login</h2>
        //                         <Form onSubmit={handleSubmit}>
        //                             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                                 <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        //                             </Form.Group>

        //                             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                                 <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        //                             </Form.Group>
        //                             <Button variant="danger w-50 mx-auto d-block mb-2" type="submit">
        //                                 Login
        //                             </Button>
        //                         </Form>
        //                         {errorElement}
        //                         <p className='text-light'>You don't have an account? <Link to='/register' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>

        //                         <p className='text-light'>Forget your password? <button to='/register ' className='btn btn-link text-danger pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button></p>

        //                         <button onClick={() => signInWithGoogle()} className="btn btn-success">Continue With Google</button>
        //                         {/* <SocialLogin></SocialLogin> */}
        //                         <ToastContainer />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    );
};
export default Login;