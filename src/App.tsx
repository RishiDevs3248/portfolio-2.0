// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Home/Home'
import Shutter from './Components/Shutter/Shutter'

function App() {
  // const [showShutter, setShowShutter] = useState(true)

  // useEffect(()=>{
  //   const shuttertimer = setTimeout(()=>{
  //     setShowShutter(false)
  //   },5250)
  //   return () => clearTimeout(shuttertimer);
  // },[])

  return (
    <>
      {/* {showShutter && <Shutter></Shutter>} */}
      <Shutter></Shutter>
      <Home></Home>
    </>
  )
}

export default App
