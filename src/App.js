import './App.css'
import './estilos/ItemListContainer.css'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailsContainer from './componentes/ItemDetailsContainer'
import { CartProvider } from './componentes/CartContext'
import Cart from './componentes/Cart'
import Checkout from './componentes/Checkout'


function App() {

  return (
    <CartProvider>
      <BrowserRouter className="App">
        <NavBar />
          <Routes>
            <Route path='/detalle/:itemId' element={ <ItemDetailsContainer /> } />
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/checkout' element={ <Checkout /> }/>
            {/* <Route path='/itemCount' element={ <ItemCount initial={0} stock={5} onAdd={onAdd}/> } />             */}
          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
