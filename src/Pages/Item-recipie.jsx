import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemRecipie = ()=>{
    const navigate = useNavigate()
    const checkLogin = () =>{
        if(!localStorage.getItem('user')){
            navigate('/')
        }
    }
    
    checkLogin()
    return(
        <div>
            <div className='container animate__animated animate__fadeIn'>
                <div className='text-center h3 py-3'>White sauce pasta</div>
                <div>
                    <p>
                    White sauce is the main ingredient in making white sauce pasta. White sauce is one of the mother sauces which is made using butter, milk and flour. It has a creamy, silky and smooth texture and bonuses with soothing flavor, it is not just perfectly cooked and combined with fusilli but also with colourful and crunchy veggies in White Sauce Pasta.Here we have an extremely creamy, cheesy and luscious recipe which will definitely give you a roller coaster ride of tastefulness that is white sauce pasta.Pasta in White Sauce is a quick recipe with colourful vegetables like capsicums, vibrant broccoli and crunchy baby corn which is is pretty to behold and tempting to bite into.
                    </p>
                </div>
                <div className='text-center'>
                    <img className='img-fluid' style={{"maxWidth":70+"%"}} src="https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg"alt="" />
                </div>
                <div className='row py-3'>
                    <div className='col-lg-4'>
                        <div className='border mt-3 px-3'>
                            <div className='py-3 h4'><b>Ingridients</b></div>
                            <div>
                                <ul>
                                    <li>Pasta</li>
                                    <li>White sauce</li>
                                    <li>Onions</li>
                                    <li>Tomatos</li>
                                    <li>Garlic paste</li>
                                    <li>Ginger paste</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='border px-3 mt-3 py-3'>
                            <div className='h4 mb-3'><b>Recipie</b></div>
                            <div>
                                <div className='mt-2'>
                                    1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur animi ea placeat inventore omnis perspiciatis corrupti qui similique magni rem, architecto est perferendis, aut voluptates vitae soluta itaque cumque.
                                </div>
                                <div className='mt-2'>
                                    1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur animi ea placeat inventore omnis perspiciatis corrupti qui similique magni rem, architecto est perferendis, aut voluptates vitae soluta itaque cumque.
                                </div>
                                <div className='mt-2'>
                                    1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur animi ea placeat inventore omnis perspiciatis corrupti qui similique magni rem, architecto est perferendis, aut voluptates vitae soluta itaque cumque.
                                </div>
                                <div className='mt-2'>
                                    1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur animi ea placeat inventore omnis perspiciatis corrupti qui similique magni rem, architecto est perferendis, aut voluptates vitae soluta itaque cumque.
                                </div>
                                <div className='mt-2'>
                                    1 . Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque pariatur animi ea placeat inventore omnis perspiciatis corrupti qui similique magni rem, architecto est perferendis, aut voluptates vitae soluta itaque cumque.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRecipie