import './App.css'
import ItemCount from './componentes/ItemCount'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'

function App() {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemCount initial={0} stock={5} onAdd={onAdd}/>
      <ItemListContainer greeting={'hola'} />
    </div>
  )
}

export default App
