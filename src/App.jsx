
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import Pnf from './pages/Pnf'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import View from './pages/View'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>

    {/* footer */}
    <Footer/>
   
    </>
  )
}

export default App
