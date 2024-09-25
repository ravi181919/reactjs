import React from 'react'
import Loggin from './components/Loggin'
import Profile from './components/Profile'
import  UserContextProvider  from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
    <div className='w-full h-screen bg-zinc-900'>
      <h1 className='text-zinc-200 font-bold text-3xl text-center pt-10'>React Context API</h1>
      <Loggin />
      <Profile />
    </div>
    </UserContextProvider>
  )
}

export default App
