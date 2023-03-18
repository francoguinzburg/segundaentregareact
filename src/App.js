import './App.css'
import ItemCount from './componentes/ItemCount'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemDetailsContainer from './componentes/ItemDetailsContainer'

function App() {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`)
  }

  return (
    <BrowserRouter className="App">
        <NavBar />
          <Routes>
            <Route path='/detalle/:itemId' element={ <ItemDetailsContainer /> } />
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> } />
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
            {/* <Route path='/itemCount' element={ <ItemCount initial={0} stock={5} onAdd={onAdd}/> } />             */}
          </Routes>
    </BrowserRouter>
  )
}

export default App
