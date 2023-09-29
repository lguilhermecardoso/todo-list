import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Login from './screens/Login'
import GlobalStyle from './styles/global'
import { AuthProvider } from './contexts/authContext'
import PrivateRoute from './services/PrivateRoute'
import Dashboard from './screens/Dashboard'
import { CardProvider } from './contexts/cardContext'

function App() {

  return (
    <>
      <AuthProvider>
        <CardProvider>
          <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
          </BrowserRouter>
          <GlobalStyle />
          </DndProvider>
        </CardProvider>
      </AuthProvider>
    </>
  )
}

export default App
