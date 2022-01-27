import {signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Navbar = ({isAuth,setAuth}) =>{
  
  const navigate = useNavigate()

  function logOut(){
    signOut(auth).then(res=>{
      localStorage.clear()
      setAuth(false)
      navigate('/')
    })
  }

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
           <div class="container-fluid">
            <Link class="navbar-brand" to="/main">The CookBook</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                {isAuth &&<Link class="nav-link active" aria-current="page" to="/main">Home</Link>}
                {isAuth &&<Link class="nav-link active" to="/add-recipie">Post a recipie</Link>}
                {isAuth &&<Link class="nav-link active" to="/my-recipies">My recipies</Link>}
                {isAuth?
                <button className='btn text-light' onClick={()=>logOut()}>Log out</button>:
                <Link class="nav-link" to="/">Login</Link>
                }
              </div>
            </div>
           </div>
        </nav>  
        
    )
}

export default Navbar