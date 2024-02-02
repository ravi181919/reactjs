import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [password, setpassword] = useState("")
  const [allowedNumber, setallowedNumber] = useState(false)
  const [allowedChar, setallowedChar] = useState(false)

  // useRef Hook 
  const passwordRef = useRef(null)

  //useCallback Hook 
  const copyPasswordRef = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(allowedChar) str += '~!@#$%^&*()<>?|/{}[]-=+_.,'
    if(allowedNumber) str += '0123456789'

    for (let i = 1; i <= length; i++) 
    { 
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

  setpassword(pass)

  },[allowedChar, allowedNumber, setpassword, length])

  // useEffect Hook

  useEffect(() => {
    passwordGenerator()
  }, [length, allowedChar, allowedNumber, passwordGenerator])

return (
<div className='max-w-md bg-gray-500 text-white shadow-md rounded-lg flex items-center 
  justify-center px-4 mx-auto mt-32 h-32 py-3 flex-col'>

      <h1 className='text-xl text-orange-300 font-[Poppins] font-medium'>
      Password Generator</h1>

  <div className='bg-gray-600 w-full flex overflow-hidden mt-2 rounded-lg'>
      <input type="text" readOnly placeholder='Password' value={password} ref={passwordRef}
      className='outline-none py-1 px-3 w-full bg-slate-100  text-black
      placeholder:text-orange-400 placeholder:font-[Poppins] placeholder:font-medium'/>
      <button onClick={copyPasswordRef}
      className='bg-black-600 px-3 font-sans font-semibold text-orange-300 
      outline-none shrink-0'>COPY</button>
  </div>

  <div className='flex gap-x-5 text-sm mt-4'>
    <div className='flex items-center justify-center  gap-x-1'>
      <input type="range" value={length} min={6} max={100} 
      className='cursor-pointer w-14 shrink-0' 
      onChange={(e) => {setlength(e.target.value)}}/>
      <label className='text-[11px] text-orange-300 font-[Poppins]'> 
      Lenght <span className='text-white text-[15px]'>{length}</span></label>
    </div>

    <div className='flex items-center justify-center  gap-x-0.5'>
      <input type="checkbox" defaultChecked={allowedNumber} onChange={() => {
      setallowedNumber((prev) => !prev)}} />
      <label className='text-[11px] text-orange-300 font-[Poppins]'>Numbers</label>
    </div>

    <div className='flex items-center justify-center gap-x-0.5'>
      <input type="checkbox" defaultChecked={allowedChar} onChange={() => {
      setallowedChar((prev) => !prev)}}/>
      <label className='text-[11px] text-orange-300 font-[Poppins]'>Charactors</label>
    </div>
  </div>
</div>
)}
export default App
