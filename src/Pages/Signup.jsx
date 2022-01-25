import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Overlay from '../components/Overlay'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from '../firebase';
import Swal from 'sweetalert2'

const Signup = () =>{
    const navigate = useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[processing,setProcessing]=useState(false)

    const signup=(e)=>{
        setProcessing(true)
        e.preventDefault()
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            setProcessing(false)
            new Swal("Acccount created","Please login to conitnue","success")
            navigate('/')
        })
        .catch(err=>{
            setProcessing(false)
            if(err.message==="Firebase: Password should be at least 6 characters (auth/weak-password)."){
                new Swal("Cannot create account","The password length must be 6 digits or more","error")
            }
            else if(err.message==="Firebase: Error (auth/email-already-in-use)."){
                new Swal("Cannot create account",email+" is already in use!","error")
            }
        })
        
    }

    return(
         <>
         {
             processing?<Overlay message={"Signing you up!"}/>:""
         }
         <div className='container'>
             <div className='row'>
                 <div className='col-lg-4'>&nbsp;</div>
                 <div className='col-lg-4'>
                     <div className='border rounded px-3 py-3 mt-3 animate__animated animate__fadeIn'>
                        <div className='h2'><b>The CookBook</b></div>
                        <div className='text-center'>
                            <img alt="cook" src="https://image.freepik.com/free-vector/cooking-concept-illustration_114360-1396.jpg" style={{"width":90+"%"}} />
                        </div>
                        <div>
                            <div>Create your account</div>
                            <div>
                               <form onSubmit={signup}>
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className='form-control mt-2' placeholder='Email address' required/>
                                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className='form-control mt-2' placeholder='Create password' required/>
                                <button style={{"backgroundColor":"#f4525f","color":"white"}} className='form-control mt-2'><b>Sign up</b></button>
                               </form>
                            </div>
                            <div className='text-center mt-3'><Link to="/" style={{"color":"black","textDecoration":"none"}}>I have an account already</Link></div>
                        </div>
                     </div>
                 </div>
                 <div className='col-lg-4'>&nbsp;</div>
             </div>
         </div>
         </>
        
    )
}

export default Signup