import { Link } from 'react-router-dom'
import login from '../imgs/login.svg'

const Login = ()=>{
    return (
        <div className="login">
        <div className="container-fluid">
        
           
            <div className="row starter">
                <div className="col-sm-6 ">
                <div className="row">
            <h1 className=" text-center my-5">Login</h1>
           </div>
                    <div className="f-holder">
                        <form>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Username</label>
                                <input className="form-control" placeholder="username"></input>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Password</label>
                                <input className="form-control"type='password' placeholder="password"></input>
                            </div>
                            <div className="f-holder">
                                <button className="btn btn-dark my-3">Login</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center py-3'>Don't have Account ? <Link to='/signup'>Sign-UP</Link></p>
                </div>
                <div className="col-sm-6 image-side">
                    <img className="img-fluid" src={login} />
                </div>
            </div>
        </div>




        </div>
    )
}
export default Login 