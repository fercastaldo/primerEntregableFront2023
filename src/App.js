import { useState } from 'react';
import './App.css';
import Card from './Componentes/Card';


function App() {

  const [user, setUser] = useState({
    nombre: '',
    auto: '',
    colorAuto: ''
  })
 
  const [valido, setValido] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.nombre.length >= 3 && user.nombre.indexOf(' ') !== 0 && user.auto.length >= 6){
      setValido(true)
      setError(false)
    } else {
      setValido(false)
      setError(true)
    }
}


  return (

    <div className="App">
      <h1>Elige un auto</h1>
      
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingresa tu nombre' value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/> 
          <input type="text" placeholder='Ingresá tu auto favorito' value={user.auto} onChange={(e) => setUser({...user, auto: e.target.value})}/>  
          <input type="text" placeholder='Ingresá el color de auto' value={user.colorAuto} onChange={(e) => setUser({...user, colorAuto: e.target.value})}/> 
          <button>Enviar</button>
      </form>

      {error ? <p className='error' >Por favor chequea que la información sea correcta </p> : null }
      {valido &&  <Card nombre={user.nombre} auto={user.auto} colorAuto={user.colorAuto} />}

    </div>

  );
}

export default App;
