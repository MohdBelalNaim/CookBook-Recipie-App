import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import AddRecipie from './Pages/Add-recipie';
import Home from './Pages/Home';
import ItemRecipie from './Pages/Item-recipie';
import Main from './Pages/Main';
import MyRecipes from './Pages/My-recipies';
import Signup from './Pages/Signup';

function App() {

  const[isAuth,setAuth]=useState(false)

  return (
    <Router>
      <Navbar isAuth={isAuth} setAuth={setAuth}/>
      <Routes>
        <Route path="/" element={<Home setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/item-recipie" element={<ItemRecipie />} />
        <Route path="/add-recipie" element={<AddRecipie />} />
        <Route path="/my-recipies" element={<MyRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
