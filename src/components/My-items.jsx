import React from 'react';
const MyItem=({name,image})=>{

    return(
            <div className='col-lg-4 py-2 px-2 animate__animated animate__slideInUp'>
               <div className='border border-dark'>
               <div className='row'>
                    <div className='col-lg-5 col-5' style={{"height":150+"px"}}>
                        <img className='img-fluid' src={image} alt={name} style={{"height":100+"%","width":100+"%","objectFit":"cover"}}  />
                    </div>
                    <div className='col-lg-7 py-3 col-7'>
                        <div>{name}</div>
                        <div>
                            <button className='btn btn-danger mt-3' style={{"fontSize":16+"px"}} onClick={()=>deleteData(name)}> <i className='fas fa-trash'></i> Remove</button>
                        </div>
                    </div>
                </div>
               </div>
            </div>
    )
}

export default MyItem