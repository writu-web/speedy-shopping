import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './shared/components/header/header'
function App() {

  return (
   <>
    <Header/>
    <Outlet/>
   </>
  )
}

export default App
