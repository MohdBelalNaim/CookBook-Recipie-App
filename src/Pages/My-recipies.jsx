import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MyItem from '../components/My-items';
import {collection,query,getDocs,where} from 'firebase/firestore'
import {db,auth} from '../firebase'

const MyRecipes = () =>{
    const navigate = useNavigate()
    const checkLogin = () =>{
        if(!localStorage.getItem('user')){
            navigate('/')
        }
    }
    checkLogin()

    
    const[myItems,setMyItems]=useState([])

    const ref = collection(db,"recipies")
    const q = query(ref,where("user.id","==",auth.currentUser.uid))
    useEffect(()=>{
        const getData = async() =>{
            const data = await getDocs(q)
            setMyItems(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        getData()
    })



    return(
        <>
            <div className='py-2 px-3 h4'><b>My recipies</b></div>
            <div className='container'>
                <div className='row'>
                {
                    myItems.map(item=>{
                        return(
                            <MyItem name={item.name} image={item.image} />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}

export default MyRecipes