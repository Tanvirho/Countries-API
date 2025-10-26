import React, { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

export const NotFound = () => {

    const [isDark] = useContext(ThemeContext)

  return (
    <><main className={`notfound ${isDark ? 'dark' : ' '}`}>Page Not Found</main></>
  )
}
