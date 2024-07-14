import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/Usercontextprovider'
import './App.css'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
