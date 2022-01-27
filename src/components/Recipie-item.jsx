import React from 'react';
import { Link } from 'react-router-dom';

const Item =(props) =>{
    return(
        <div className='row mt-2 border rounded animate__animated animate__slideInUp'>
        <div className='col-lg-4 col-5' style={{"height":200+"px"}}>
            <img src={props.image} alt="noodle"  style={{"maxWidth":100+"%","maxHeight":100+"%","objectFit":"contain"}} />
        </div>
        <div className='col-lg-8 col-7 py-2'>
            <div className='h5 mt-1'>{props.name}</div>
            <div className='mt-2'> <i className='fas fa-user px-2'></i> {props.cook}</div>
            <div> <i className='fas fa-clock px-2'></i> Cooking time : {props.time}</div>
            <div>
                <Link to="/item-recipie"><button className='btn btn-dark mt-4'>I want to cook it! <i className='fas fa-arrow-right px-1'></i></button></Link>
            </div>
        </div>
    </div>
    )
}

export default Item