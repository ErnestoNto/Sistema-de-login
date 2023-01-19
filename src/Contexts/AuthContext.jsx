import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        const userStorage = localStorage.getItem('users_db')
        const userToken = localStorage.getItem('user-token')

        if(userStorage && userToken){
            const hasUser = JSON.parse(userStorage)?.filter(user => user.email === JSON.parse(userToken).email)
            if(hasUser) setUser(hasUser[0])
        }
    }, [])

    const login = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter(user => user.email === email)

        if(hasUser[0]?.email){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.floor(Math.random() * 1000)
                localStorage.setItem('user-token', JSON.stringify({email, token}))
                setUser({email, password})
            }else{
                return 'Usuário ou senha incorretos'
            }
        }else{
            return 'Essa conta não existe'
        }
    }

    const register = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'))

        const hasUser = userStorage?.filter(user => user.email === email)

        if(hasUser?.length){
            return 'Este email já foi utilizado'
        }

        let newUser

        if(userStorage){
            newUser = [...userStorage, {email, password}]
        }else{
            newUser = [{email, password}]
        }

        localStorage.setItem('users_db', JSON.stringify(newUser))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user-token')
    }

    return(
        <AuthContext.Provider value={{user, signed: !!user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider