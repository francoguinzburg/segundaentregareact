import './App.css'
import './estilos/ItemListContainer.css'
import { CartProvider } from './componentes/CartContext'
import { LoginProvider } from './componentes/LoginContext'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <LoginProvider>
      <CartProvider>
          <AppRouter />
      </CartProvider>
    </LoginProvider>
  )
}

export default App
