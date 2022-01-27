import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyItem from '../components/My-items';
import Navbar from '../components/Navbar'

const MyRecipes = () =>{
    const navigate = useNavigate()
    const checkLogin = () =>{
        if(!localStorage.getItem('user')){
            navigate('/')
        }
    }
    checkLogin()
    return(
        <>
            <div className='py-2 px-3 h4'><b>My recipies</b></div>
            <div className='container'>
                <div className='row'>
                <MyItem/> 
                <MyItem/>   
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                <MyItem/> 
                </div>
            </div>
        </>
    )
}

export default MyRecipes