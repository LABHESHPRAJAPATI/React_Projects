import { useEffect, useState } from 'react'
import { Themeprovider } from './contexts/Theme'

import './App.css'
import ThemeBtn from './components/Themebtn'
import Card from './components/card'

function App() {
  const [ThemeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector("html").classList.add(ThemeMode)
  })
  return (
    <Themeprovider value={{ ThemeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />

          </div>
        </div>
      </div>

    </Themeprovider>
  )
}

export default App
