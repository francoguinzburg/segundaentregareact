import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemListContainer from '../componentes/ItemListContainer'
import NavBar from '../componentes/NavBar'
import ItemDetailsContainer from '../componentes/ItemDetailsContainer'
import Cart from '../componentes/Cart'
import Checkout from '../componentes/Checkout'
import LoginScreen from '../componentes/LoginScreen'
import { LoginContext } from '../componentes/LoginContext'
import RegisterScreen from '../componentes/RegisterScreen'

const AppRouter = () => {
const { user } = useContext(LoginContext)

  return (
    <>
        <BrowserRouter className="App">
        {
            user.logged
            ? <>
                <NavBar />
                  <Routes>
                    <Route path='/detalle/:itemId' element={ <ItemDetailsContainer /> } />
                    <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
                    <Route path='/' element={ <ItemListContainer /> } />
                    <Route path='*' element={ <Navigate to='/' /> } />
                    <Route path='/cart' element={ <Cart /> } />
                    <Route path='/checkout' element={ <Checkout /> }/>
                  </Routes> 
              </>
            :
            <Routes>
              <Route path='/login' element={ <LoginScreen /> } />
              <Route path='/register' element={ <RegisterScreen /> } />
              <Route path='*' element={ <Navigate to='/login' /> } />
            </Routes>         
          }   
        </BrowserRouter>
    </>
  )
}

export default AppRouter