import './App.css'
import './css/bag.css'
import './css/index.css'
import Header from './component/Header'
import Footer from './component/Footer'
import LoadingSpinner from './component/LoadingSpinner'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FetchItems from './component/FetchItems'


function App() {
  const fetchStatus=useSelector((state)=>state.fetchStatus)

  return (
    <>
      <Header/>
      <FetchItems/>
      {fetchStatus.currentlyfetching?<LoadingSpinner/>: <Outlet/>}
      <Footer/>
    </>
  )
}

export default App
