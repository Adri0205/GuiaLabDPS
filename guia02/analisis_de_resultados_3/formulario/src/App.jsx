import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [autenticado, setAutenticado] = useState(false)

  const credencialesValidas = {
    usuario: 'admin',
    contraseña: '1234'
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (usuario === credencialesValidas.usuario && contraseña === credencialesValidas.contraseña) {
      setAutenticado(true)
    } else {
      alert('Credenciales inválidas. Intenta con usuario: admin, contraseña: 1234')
      setUsuario('')
      setContraseña('')
    }
  }

  const handleLogout = () => {
    setAutenticado(false)
    setUsuario('')
    setContraseña('')
  }

  return (
    <div className="container">
      {autenticado ? (
        <div className="welcome-container">
          <h1>¡Bienvenido, {usuario}!</h1>
          <p>Ha iniciado sesión correctamente.</p>
          <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Iniciar Sesión</h1>
          
          <div className="form-group">
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresa tu usuario"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button type="submit" className="login-btn">Iniciar Sesión</button>
        </form>
      )}
    </div>
  )
}

export default App
