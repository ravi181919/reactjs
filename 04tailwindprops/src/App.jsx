
import './App.css'
import Card from './components/Card'

function App() {
  const myObj = {
    username: 'raviKrGupta',
    age: 20
  }
  const myArr = [1,2,3]
  return (
    <>
    <div className='w-100  flex items-center justify-center mb-3'>
        <h1 className='text-white  font-mono text-xl p-4 bg-black 
        rounded-md shadow-2xl shadow-slate-400 w-fit'>
        Hello Taiwind And Props</h1>
    </div>
    <div className='flex gap-1'>
        <Card  userName = {myObj.username} btnText = 'Click me' text = "Hello I am" id = {myArr[0]}/>
        <Card  userName = "AR79" text = "Hello myself" id = {myArr[1]} />
    </div>
    </>
  )
}

export default App
