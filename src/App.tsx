import './App.css'
import Lpage from './components/auth/Login'
import Rpage from './components/auth/register'

function App() {

  return (
    <>
    {localStorage.getItem("Email") === null ? <Rpage /> : <Lpage />}
    </>
  )
}

export default App
