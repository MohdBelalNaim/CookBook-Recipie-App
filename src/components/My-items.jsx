import React from 'react';

const MyItem=()=>{
    return(
            <div className='col-lg-4 py-2 px-2 animate__animated animate__slideInUp'>
               <div className='border border-dark'>
               <div className='row'>
                    <div className='col-lg-5 col-5'>
                        <img className='img-fluid' src="https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg" alt="" />
                    </div>
                    <div className='col-lg-7 py-3 col-7'>
                        <div>White sauce pasta</div>
                        <div>
                            <button className='btn btn-danger mt-3' style={{"fontSize":16+"px"}}> <i className='fas fa-trash'></i> Remove</button>
                        </div>
                    </div>
                </div>
               </div>
            </div>
    )
}

export default MyItem