import React, { useState } from 'react';

const Logins = ({login,error}) => {
    const [details,setDetails]=useState({email:"", password:""});
    const submitHandle=e=>{
        e.preventDefault();
        login(details);
    }

    return (
        <>
            <div>
                <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                            <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form className="user" onSubmit={submitHandle}>
                                <div className="form-group">
                                    {(error !="") ? <h6>{error}</h6> : ""}
                                    <input type="email" 
                                    className="form-control form-control-user" 
                                    id="exampleInputEmail" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter Email Address..."
                                    onChange={e=>setDetails({...details,email: e.target.value})}
                                    value={details.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" 
                                    className="form-control form-control-user" 
                                    id="exampleInputPassword" 
                                    placeholder="Password" 
                                    onChange={e=>setDetails({...details,password: e.target.value})}
                                    value={details.password}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                        Me</label>
                                    </div>
                                </div>
                                <div className="btnContainer">
                                <button className="btn btn-primary btn-user btn-block" type="submit">Logins</button>
                                {/* {hasAccount ? (
                                    <>  
                                        <button className="btn btn-primary btn-user btn-block" onClick={onHandleSignUp}>Sign up</button>
                                        <hr />
                                        <p>
                                            Have an account ? 
                                            <a onClick={() => setHasAccount(hasAccount)}> Sign in</a>
                                        </p>
                                    </>      
                                ):(
                                    <>
                                        <button className="btn btn-primary btn-user btn-block" onClick={onHandleLogin}>Sign in</button>
                                        <hr />
                                        <p>
                                            Don't have an account ?
                                            <a onClick={() => setHasAccount(hasAccount)}> Sign up</a>
                                        </p>
                                    </>    
                                )} */}
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Logins
