import { useState } from 'react'
import { Link } from 'react-router-dom'
import signup from '../imgs/signup.svg'

export default function SignUP (){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userName,setUserName]=useState('')
    const submitRegister=(e)=>{
        e.preventDefault()
            const body ={
                email:email,
                password:password
            }
            let header = new Headers()
            header.append('Content-Type','application/json');
            let requestOption={
                method:'POST',
                body:JSON.stringify(body),
                headers:header
            }
            let apiUrl = process.env.REACT_APP_BASE_API_URL
            fetch(`${apiUrl}/register`,requestOption).then(response=>{
                return response.json()
            }).then(result=>{
                localStorage.setItem('token',result.token)
                console.log(result)
            }).catch(err=>{
                console.log(err)
            })
    }
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
                        <form onSubmit={submitRegister}>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Username</label>
                                <input className="form-control" placeholder="username"
                                value={userName}
                                onChange={(e)=>setUserName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" placeholder="Email" type='email'
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Password</label>
                                <input className="form-control"type='password' placeholder="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                            <div className="f-holder">
                                <button className="btn btn-dark my-3" type='submit'>Create</button>
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