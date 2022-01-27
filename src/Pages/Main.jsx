import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Css from './Main.css'
import Item from '../components/Recipie-item'
import { useState } from 'react/cjs/react.development';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
const Main = () =>{

    const navigate = useNavigate()
    const checkLogin = () =>{
        if(!localStorage.getItem('user')){
            navigate('/')
        }
    }
    
    checkLogin()

    const[items,setItems]=useState([])
    const[loading,setLoading]=useState(false)

    const recipieCollectionRef = collection(db,"recipies")

    useEffect(()=>{
        
        const getData = async() =>{
            setLoading(true)
            const data  = await getDocs(recipieCollectionRef)
            setItems(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            setLoading(false)
        }
        
        getData()
        
    },[])

    const Loader = () =>{
        return(
            <div className='py-5 text-center'>
                Loading your delicacies
            </div>
        )
    }

    return(
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6' id="banner">
                        <div className='row'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-10 py-4'>
                                <div className=' bg-light py-3 px-3 mt-5'>
                                    <div className='h4 text-center '><b>Try soulful pastas</b></div>
                                    <div className='text-center'>
                                        Tired of eating Red Tomato Pasta? Try this White Sauce Pasta! With its silky smooth and aromatic sauce made from butter, milk and all purpose flour (maida), it’s a guaranteed way to delight your taste buds
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-dark mt-3' id="button">Show me how</button>
                                    </div>
                                    <div className='text-center py-2'>or</div>
                                    <div>
                                        <input type="text" className='form-control' placeholder='Search something else'/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-1'></div>
                        </div>
                    </div>
                    <div className='col-lg-6 px-4' id="element-container">
                        <div className='h4 mt-3'><b>Top recipies</b></div>
                        <div className='py-2'>

                            {
                                !loading?
                                items.map(item=>{
                                    return(
                                        <Item name={item.name} cook={item.user.name} time={item.time} image={item.image}/>   

                                    )
                                })
                                :<Loader/>
                            }
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main