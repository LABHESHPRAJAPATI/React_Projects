import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")
  const passworRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@$%^&_-+="

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
        1
      }
      setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

  const passwordcopy = useCallback(
    () => {
      passworRef.current?.select()
      window.navigator.clipboard.writeText(Password)
    }, [Password]
  )

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-cyan-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passworRef}
        />
        <button
          onClick={passwordcopy}
          className='outline-none bg-blue-700
        text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-1'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={8}
            max={64}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setlength(e.target.value) }} />
          <label >length :{length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numinput'
            onChange={() => { setNumberAllowed((prev) => !prev) }} />
          <label htmlFor="numinput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            id='charinput'
            onChange={() => { setcharAllowed((prev) => !prev) }} />
          <label htmlFor="charinput">Characters</label>
        </div>
      </div>
    </div>


  )
}

export default App
