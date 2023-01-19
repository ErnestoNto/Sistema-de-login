import { useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = () => {
    if(email === '' || password === ''){
      setError('Preencha todos os espaços')
    }

    const res = login(email, password)

    if(res){
      return setError(res)
    }

    navigate('/home')
  }

  return (
    <div className='container'>
      <h1>Sistema de login</h1>
      <div className='content'>
        <input 
        type="text"
        placeholder='Digite seu email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <input 
        type="password"
        placeholder='Digite sua senha'
        value={password}
        onChange={e => setPassword(e.target.value)}        
        />

        <label>{error}</label>

        <button onClick={handleLogin}>Acessar</button>

        <p>
          Não possui uma conta? <strong><Link to='/signup'>Registre-se</Link></strong>
        </p>
      </div>
    </div>
  )
}

export default SignIn
