import React from 'react';
import MyItem from '../components/My-items';
import Navbar from '../components/Navbar'
const MyRecipes = () =>{
    return(
        <>
            <Navbar/>
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