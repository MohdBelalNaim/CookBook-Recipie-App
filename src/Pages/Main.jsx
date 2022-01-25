import React from 'react';
import Navbar from '../components/Navbar';
import Css from './Main.css'
import Item from '../components/Recipie-item'
const Main = () =>{
    return(
        <div>
            <Navbar/>
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
                          <Item name={"Hakka noodles"} cook={"Mohd Belal Naim"} time={"1hr"} image={"https://www.whiskaffair.com/wp-content/uploads/2020/03/Hakka-Noodles-2-3.jpg"}/>   
                          <Item name={"White sauce pasta"} cook={"Asad eqbal"} time={"30min"} image={"https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg"}/>
                          <Item name={"Hakka noodles"} cook={"Mohd Belal Naim"} time={"1hr"} image={"https://www.whiskaffair.com/wp-content/uploads/2020/03/Hakka-Noodles-2-3.jpg"}/>   
                          <Item name={"White sauce pasta"} cook={"Asad eqbal"} time={"30min"} image={"https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg"}/>
                          <Item name={"Hakka noodles"} cook={"Mohd Belal Naim"} time={"1hr"} image={"https://www.whiskaffair.com/wp-content/uploads/2020/03/Hakka-Noodles-2-3.jpg"}/>   
                          <Item name={"White sauce pasta"} cook={"Asad eqbal"} time={"30min"} image={"https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg"}/>
                          <Item name={"Hakka noodles"} cook={"Mohd Belal Naim"} time={"1hr"} image={"https://www.whiskaffair.com/wp-content/uploads/2020/03/Hakka-Noodles-2-3.jpg"}/>   
                          <Item name={"White sauce pasta"} cook={"Asad eqbal"} time={"30min"} image={"https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg"}/>
                          <Item name={"Hakka noodles"} cook={"Mohd Belal Naim"} time={"1hr"} image={"https://www.whiskaffair.com/wp-content/uploads/2020/03/Hakka-Noodles-2-3.jpg"}/>   
                          <Item name={"White sauce pasta"} cook={"Asad eqbal"} time={"30min"} image={"https://parade.com/wp-content/uploads/2020/06/Best-pasta-recipes.jpg"}/>
                          
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main