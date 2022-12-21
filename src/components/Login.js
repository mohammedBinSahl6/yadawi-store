import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login from '../imgs/login.svg'
import axios from 'axios';
export let apiUrl = process.env.REACT_APP_BASE_API_URL

const Login = ()=>{
    const navigate = useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')



    const submitLogin=(e)=>{
        e.preventDefault()
        const body ={
            email:email,
            password:password
        }
        axios.post(`${apiUrl}/login`,body)
          .then(function (response) {
            console.log(response);
            navigate('/shop')
          })
          .catch(function (error) {
            console.log(error);
            alert('failed to login')
          });
            // let header = new Headers()
            // header.append('Content-Type','application/json');
            // header.append('Access-Control-Allow-Origin','*')
            // let requestOption={
            //     method:'POST',
            //     body:JSON.stringify(body),
            //     headers:header
            // }
            // let apiUrl = process.env.REACT_APP_BASE_API_URL
            // fetch(`${apiUrl}/login`,requestOption).then(response=>{
            //     return response.json()
            // }).then(result=>{
            //     console.log(result)
            //     navigate('/')
            // }).catch(err=>{
            //     console.log(err)
            //     alert(err?.error||'invalid user')
            // })
    }
    return (
        <div className="login">
        <div className="container-fluid">
        
           
            <div className="row ">
                <div className="col-sm-6 ">
                <div className="row">
            <h1 className=" text-center my-5">Login</h1>
           </div>
                    <div className="f-holder">
                        <form onSubmit={submitLogin}>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Username</label>
                                <input className="form-control" placeholder="username" value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Password</label>
                                <input className="form-control"type='password' placeholder="password"
                                value={password}
                                onChange={
                                    (e)=>setPassword(e.target.value)
                                }
                                />
                            </div>
                            <div className="f-holder">
                                <button className="btn btn-dark my-3" type=''>Login</button>
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