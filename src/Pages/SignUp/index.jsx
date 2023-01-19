import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'


const SignUp = () => {
  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  const { register } = useAuth()

  const handleRegister = () => {
    if(email === '' || password === ''){
      setError('Preencha todos os espaços')
      return
    }

    if(email !== emailConfirm){
      setError('Confirme seu email')
      return
    }

    const res = register(email, password)

    if(res){
      setError(res)
    }

    navigate('/')
  }

  return (
    <div className='container'>
      <h1>Cadastre-se</h1>
      <div className='content'>
        <input 
        type="text"
        placeholder='Digite seu email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />

        <input 
        type="text"
        placeholder='Confirme seu email'
        value={emailConfirm}
        onChange={e => setEmailConfirm(e.target.value)}
        />

        <input 
        type="password"
        placeholder='Digite sua senha'
        value={password}
        onChange={e => setPassword(e.target.value)}        
        />

        <label>{error}</label>

        <button onClick={handleRegister}>Acessar</button>

        <p>
          Já possui uma conta? <strong><Link to='/'>Login</Link></strong>
        </p>
      </div>
    </div>
  )
}

export default SignUp