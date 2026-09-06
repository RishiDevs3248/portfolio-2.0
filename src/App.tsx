import './App.css'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import Shutter from './Components/Shutter/Shutter'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)

    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
    }

  }, [])

  return (
    <>
      <Shutter></Shutter>
      <Nav></Nav>
      <Home></Home>
    </>
  )
}

export default App