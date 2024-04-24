import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login.js';
import Search from './search.js';
import Signup from './signup.js';
import Details from './details.js';
import Navbar from './navbar.js';
import Cart from './cart.js';
import Order from './orders.js';

function App() {
  return (
    <div>      
      <BrowserRouter>
      <div className='flex'>
      <div className='w-60'>
      <Navbar/>
      </div> 
      <div className='w-full'>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='search' element={<Search/>}/> */}
        <Route path='/product/:id' element={<Details/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/search/:product' element={<Search/>}/>
        <Route path='/order/:user' element={<Order/>}/>
      </Routes>
      </div>
      </div>
      
      </BrowserRouter>
      
    </div>

  );
}

export default App;