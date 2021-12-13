import Headerlog from './components/LoginComp/Headerlogin'
import Login from './components/LoginComp/Login'
import Headerreg from './components/RegisterComp/HeaderReg'
import Register from './components/RegisterComp/Register'

const App = () => {
  return (
    <div className = "container">
      <Headerlog />
      <Login />
      <Headerreg />
      <Register />
    </div>
    
  )
}

export default App
