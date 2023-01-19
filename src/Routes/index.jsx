import { BrowserRouter, Routes, Route} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

const Private = ({ Item }) => {
    const { signed } = useAuth()

    return signed > 0 ? <Item /> : <SignIn />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Private Item={Home} />} />
        <Route path='/' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp />}/>

        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
