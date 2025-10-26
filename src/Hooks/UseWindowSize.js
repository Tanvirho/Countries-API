import { useEffect, useState } from "react"


export const UseWindowSize = () => {
 
    const [windowSize , setWindowSize] = useState({width: window.innerWidth , height: window.innerHeight})
  // const [windowHeight , setWindowHeight] = useState(window.innerHeight)

  useEffect(()=>{
    window.addEventListener('resize', () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      // setWindowSize(window.innerWidth)
      // setWindowHeight(window.innerHeight)
    })
  }, [])

  return windowSize

}
