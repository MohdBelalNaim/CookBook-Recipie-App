import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Swal from 'sweetalert2';
import { auth, db } from '../firebase';
import {useNavigate} from 'react-router-dom'
import Overlay from '../components/Overlay'

const AddRecipie = () =>{

    const checkLogin = () =>{
        if(!localStorage.getItem('user')){
            navigate('/')
        }
    }
    
    checkLogin()

    const[posting,setPosting]=useState(false)

    const navigate = useNavigate()

    const[Items,setItems]=useState([])
    const[ingridient,setIngridient]=useState("")
    const[steps,setSteps]=useState([])
    const[step,setStep]=useState("")

    const[name,setName]=useState("")
    const[time,setTime]=useState("")
    const[about,setAbout]=useState("")
    const[image,setImage]=useState("")

    const pushItems=(item)=>{
        if(item!==""){
            if(Items.find(x=>x===item)){
                alert("Same item cannot be added twice")
            }
            else{
                setItems(prev=>[...prev,item])
                setIngridient("")
            }
        }
        else{
            alert("Please enter item name")
        }
    }

    const pushStep=(item)=>{
        if(item!==""){
            setSteps(prev=>[...prev,item])
            setStep("")
        }
        else{
            alert("Step cannot be empty")
        }
    }

    const removeFromIngridients=(item)=>{
        setItems(prev=>prev.filter(rest=>rest!==item))
    }

    const removeStep=(item)=>{
        setSteps(prev=>prev.filter(rest=>rest!==item))
    }

    const recipieRef = collection(db,"recipies")
    const pushRecipie = async() =>{
        if(!name ||!time ||!about ||!image ||!Items ||!steps){
            new Swal({
                title:"Error",
                text:"All feilds are required",
                icon:"error"
            })
        }
        else{
            setPosting(true)
        await addDoc(recipieRef,{
            name,
            time,
            about,
            image,
            steps,
            Items,
            user:{
                name:auth.currentUser.displayName,
                id:auth.currentUser.uid,
            }
        })
        .then(created=>{
            setPosting(false)
            new Swal({
                title:"Recipie added successsfully",
                text:"Your recipie has been published",
                icon:"Success"
            })
            navigate('/main')
        })
        .catch(err=>{
            setPosting(false)
            console.log(err)
        })
        }
    }
    return(
        <>
            {
                posting && <Overlay message={"Posting your recipie"}/> 
            }
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div>
                            <div className='border px-2 py-2 mt-3'>
                                <div><b>Ingridients added</b></div>
                                {
                                    Items!=0?
                                    <ul className='mt-3'>
                                    {
                                        Items.map(item=>{
                                            return(
                                                <li className='animate__animated animate__slideInUp'>{item} <i onClick={()=>removeFromIngridients(item)} className='fas fa-times' style={{"float":"right"}}></i></li>
                                            )
                                        })
                                    }
                                </ul>
                                :<div className='bg-danger text-light px-2 py-2 mt-3'>No items have been added yet !</div>
                                }
                            </div>
                            <div className='border px-2 py-2 mt-3'>
                                <div><b>Recipie steps added</b></div>
                                {
                                    steps!=0?
                                    <ul className='mt-3'>
                                        {
                                            steps.map(item=>{
                                                return(
                                                    <li className='animate__animated animate__slideInUp'>{item} <i onClick={()=>removeStep(item)} className='fas fa-times' style={{"float":"right"}}></i></li>
                                                )
                                            })
                                        }
                                    </ul>
                                    :<div className='bg-danger text-light px-2 py-2 mt-3'>No steps have been added yet !</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='border mt-3 px-2 py-2'>
                            <div><b>Add recipie info</b></div>
                            <div>
                                <label className='mt-2'>Recipie name</label>
                                <input value={name} onChange={e=>setName(e.target.value)} type="text" className='form-control' />
                                
                                <label className='mt-2'>Cookng time</label>
                                <input value={time} onChange={e=>setTime(e.target.value)} type="text" className='form-control' />

                                <label className='mt-2'>Image link</label>
                                <input value={image} onChange={e=>setImage(e.target.value)} type="text" className='form-control' />

                                <label className='mt-2'>About dish</label>
                                <textarea value={about} onChange={e=>setAbout(e.target.value)} rows={3} type="text" className='form-control' />
                                
                                <label  className='mt-2'>Ingridient</label>
                                <input id="inginp" value={ingridient} onChange={e=>setIngridient(e.target.value)} type="text" className='form-control' />
                                <div onClick={()=>{pushItems(ingridient)}}>
                                    <button className='btn btn-dark mt-2'>Add <i className='fas fa-plus px-1'></i> </button>
                                </div>
                                
                                <label className='mt-2'>Recipie step</label>
                                <textarea value={step} onChange={e=>setStep(e.target.value)} rows={3} type="text" className='form-control' />
                                <button onClick={()=>{pushStep(step)}} className='btn btn-dark mt-2'>Add <i className='fas fa-plus px-1'></i> </button>

                                <button onClick={()=>pushRecipie()} className='form-control mt-3 btn btn-dark'>Post my recipie</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecipie