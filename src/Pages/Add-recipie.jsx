import React from 'react';
import { useState } from 'react/cjs/react.development';
import Navbar from '../components/Navbar'

const AddRecipie = () =>{

    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });

    const[Items,setItems]=useState([])
    const[ingridient,setIngridient]=useState("")
    const[steps,setSteps]=useState([])
    const[step,setStep]=useState("")

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
    
    return(
        <>
            <Navbar/>
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
                                <input type="text" className='form-control' />
                                
                                <label className='mt-2'>Cookng time</label>
                                <input type="text" className='form-control' />
                                
                                <label  className='mt-2'>Ingridient</label>
                                <input id="inginp" value={ingridient} onChange={e=>setIngridient(e.target.value)} type="text" className='form-control' />
                                <div onClick={()=>{pushItems(ingridient)}}>
                                    <button className='btn btn-dark mt-2'>Add <i className='fas fa-plus px-1'></i> </button>
                                </div>
                                
                                <label className='mt-2'>Recipie step</label>
                                <textarea value={step} onChange={e=>setStep(e.target.value)} rows={3} type="text" className='form-control' />
                                <button onClick={()=>{pushStep(step)}} className='btn btn-dark mt-2'>Add <i className='fas fa-plus px-1'></i> </button>

                                <button className='form-control mt-3 btn btn-dark'>Post my recipie</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecipie