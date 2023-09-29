import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import api  from '../services/api'

interface AutContextProps {
  signIn: (login: string, password: string) => void,
  signOut: () => void,
  isLogin: boolean
}

const AuthContext = createContext<AutContextProps>({
  signIn: () => {},
  signOut: () => {},
  isLogin: false
})

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [isLogin, setIsLogin] = useState(false)

  const signOut = () => {
    localStorage.removeItem('token')
    setIsLogin(false)
  }
  async function signIn(login: string, password: string) {
    try {
      const response = await api.post('/login', {
        login,
        senha: password
      })
      if (response.data !== '') {
        await localStorage.setItem('token', response.data)
      } else {
        await localStorage.removeItem('token')
      }
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    async function getIsLoggedIn() {
      const token = await localStorage.getItem('token')
      if (token) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    }

    getIsLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{
      signIn,
      isLogin,
      signOut
     }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Cannot use a OccurenceContext here');
  }

  return context
}