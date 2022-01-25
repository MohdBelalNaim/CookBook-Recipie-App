import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <div class="container-fluid">
            <Link class="navbar-brand" to="/main">The CookBook</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                <Link target='_blank' class="nav-link" to="/add-recipie">Post a recipie</Link>
                <Link class="nav-link" to="/my-recipies">My recipies</Link>
                <Link class="nav-link" to="/">Logout</Link>
              </div>
            </div>
           </div>
        </nav>  
        
    )
}

export default Navbar