import { useState } from 'react'
import './App.css'

function App(){
    const [color, setColor] = useState('')
    return (
    <div style={{backgroundColor: color}}
    className='relative flex justify-center h-screen w-full md:max-h-screen'>

        <div style={{backgroundColor: '#78787895'}} className='mt-5 md:absolute md:top-3/4 md:h-12 md:w-[68%] 
        rounded-full md:flex md:items-center md:justify-center'>

            <div className='flex gap-2 flex-wrap md:gap-4'>

                <button onClick={() => setColor('yellow')} 
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-yellow-400'>Yellow
                </button>
                <button onClick={() => setColor('green')} 
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-green-400'>Green
                </button>
                <button onClick={() => setColor('blue')}
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-blue-400'>Blue
                </button>
                <button onClick={() => setColor('gray')}
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-gray-400'>Gray
                </button>
                <button onClick={() => setColor('white')}
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-white'>White
                </button>
                <button onClick={() => setColor('black')}
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-black text-white'>Black
                </button>
                <button onClick={() => setColor('red')}
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-red-400'>Red
                </button>
                <button onClick={() => setColor('pink')}
                className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-pink-400'>Pink
                </button>
                <button onClick={() => setColor('orange')}
                 className='px-2 md:px-4 font-mono font-semibold rounded-full py-1 bg-orange-400'>Orange
                 </button>
            </div>
        </div>    
    </div>
    )
}
export default App