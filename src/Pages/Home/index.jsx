import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const { logout } = useAuth()
  const navigate = useNavigate()
  
  const handleLogout = () => {
  
    logout()

    navigate('/')
  }

  return (
    <div className='container'>
      <h1>Home</h1>
      <button onClick={handleLogout}>Sair</button>
    </div>
  )
}

export default Home
