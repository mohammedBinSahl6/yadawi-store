import { Link } from 'react-router-dom'
import signup from '../imgs/signup.svg'

export default function SignUP (){
    return(
        <div className="sign-up">
        <div className="container-fluid">
        
           
            <div className="row starter">
            <div className="col-sm-6 image-side">
                    <img className="img-fluid si-img" src={signup}  />
                </div>
                <div className="col-sm-6 ">
                <div className="row">
            <h1 className=" text-center my-5">Sign-UP</h1>
           </div>
                    <div className="f-holder">
                        <form>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Username</label>
                                <input className="form-control" placeholder="username"></input>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" placeholder="Email" type='email'></input>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Password</label>
                                <input className="form-control"type='password' placeholder="password"></input>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Confirm Password</label>
                                <input className="form-control"type='password' placeholder="password"></input>
                            </div>
                            <div className="f-holder">
                                <button className="btn btn-dark my-3">Create</button>
                            </div>
                        </form>
                       
                    </div>
                    <p className='text-center'>Already have account?<Link to='/login'>Login</Link></p>
                </div>
               
            </div>
        </div>




        </div>
    )
}