import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import Overlay from '../components/Overlay';
import Swal from 'sweetalert2';

const Home = () =>{

    const auth = getAuth(app)
    const navigate = useNavigate()
    const[invalid,setInvalid]=useState(false)
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[processing,setProcessing] = useState(false)

    function signIn(){
        setProcessing(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/main')
            setProcessing(false)
        })
        .catch(err=>{
            setInvalid(true)
            setProcessing(false)
            console.log(err)
        })
    }

    function googleSignIn(){
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then(result=>{
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/main')
        })
        .catch(err=>{
            console.log(err.message)
            new Swal("Cannot login","Google signin failed please try again later","error")
        })
    }

    return(
        <>
        {
            processing?<Overlay message={"Signing you in"} />:""
        }
        <div className='container'>
             <div className='row'>
                 <div className='col-lg-4'>&nbsp;</div>
                 <div className='col-lg-4 py-3'>
                     <div className='border rounded px-3 py-3 animate__animated animate__fadeIn'>
                        <div className='h2'><b>The CookBook</b></div>
                        <div className='text-center'>
                            <img alt="cook" src="https://image.freepik.com/free-vector/chef-concept-illustration_114360-1894.jpg" style={{"width":90+"%"}} />
                        </div>
                        <div>
                            <div>Sign in to The CookBook</div>
                            <div>
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className='form-control mt-2' placeholder='Email address' required/>
                                <input value={password} onChange={(e=>setPassword(e.target.value))} type="password" className='form-control mt-2' placeholder='Password' required/>
                                {
                                    invalid?
                                    <div className='border rounded py-2 px-2 mt-2 bg-danger text-light animate__animated animate__shakeX'>
                                        Invalid email or password ! 
                                    </div>
                                    :""
                                }
                                <button onClick={()=>signIn()} style={{"backgroundColor":"#D6FE78"}} className='form-control mt-2'><b>Sign in</b></button>
                                <div className='text-center py-2'>or</div>
                                <div onClick={()=>googleSignIn()} id="google-button" className='text-center form-control' style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
                                    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" style={{"width":10+"%"}} alt="googlelogo" />
                                    <span style={{"marginLeft":10+"px","fontSize":18+"px"}}>Continue with google</span>
                                </div>
                            </div>
                            <div className='text-center mt-3'><Link to="/signup" style={{"color":"black","textDecoration":"none"}}>I don't have an account</Link></div>
                        </div>
                     </div>
                 </div>
                 <div className='col-lg-4'>&nbsp;</div>
             </div>
         </div>
        </>
        
    )
}

export default Home