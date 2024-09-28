import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-800 text-white'>
      <h1 className='text-2xl py-5 text-center w-full font-bold '>{import.meta.env.VITE_APPWRITE_URL}</h1>
    </div>
  )
}

export default App
