import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import CartContainer from "./components/CartContainer/CartContainer"
import ItemDetailCotainer from "./components/ItemDetailContainer/ItemDetailCotainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"
import { CartContext, CartContextProvider } from './context/CartContext'

function App() {

  return (
    
    <BrowserRouter>
    <CartContextProvider>
      <>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:cid' element={<ItemListContainer/>}/>
          <Route path='/detail/:pid' element={<ItemDetailCotainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route parth='*' element={<Navigate to ='/'/>}/>
          
        </Routes>      
      </>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
