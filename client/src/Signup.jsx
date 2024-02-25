import {useState} from "react";
import {Link} from "react-router-dom";
import * as constants from "constants";
import axios from "axios";
import {createLogger} from "vite";
import {useNavigate} from "react-router-dom";
export default function Signup(){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/register",{name,email,password})
            .then(result=> {
                console.log(result);
                navigate('/login')
            })
            .catch(err=>console.log(err))

    }
    return(<div>
        <div className="container-fluid ">
            <div className="row main-content bg-success text-center">
                <div className="col-md-4 text-center company__info">
                    <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
                    <h4 className="company_title">happy</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <div className="row pt-2">
                            <h2>Register</h2>
                        </div>
                        <div className="row">
                            <form onSubmit={handleSubmit} control="" className="form-group">
                                <div className="row">

                                    <input type="text" name="name" value={name} id="name" className="form__input"
                                           placeholder="user name" onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="row">

                                    <input type="email" name="email" value={email} id="email" className="form__input"
                                           placeholder="user email" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="row">

                                    <input type="password" name="password" value={password} id="password" className="form__input"
                                           placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <input type="checkbox" name="remember_me" id="remember_me" className=""/>*/}
                                {/*        <label for="remember_me">Remember Me!</label>*/}
                                {/*</div>*/}
                                <div className="row">
                                    <div className="text-center mx-auto">
                                        <input type="submit" value="Register" className="btn px-1"/>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="row">
                            <p>already have an account
                            <Link to="/login"
                                className={"btn btn-outline-primary ms-2 w-25 bg-light rounded-3 text-decoration-none"}>
                                Login </Link> </p>
                            {/*<a href="#">Register Here</a></p>*/}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}