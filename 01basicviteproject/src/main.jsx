import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
function Hello()
{
     return (
          <h1>hello ravi 79 </h1>
     )
}
*/


const domElement = {
     type: 'a',
     props: {
         href: 'https://google.com',
         target: '_blank'
     },
     children: 'click me to vist google'
 }


 // 
 const anotherElement = (
     <a href="https://google.com" target='_blank'>click me</a>
 )

// 
const any = 'light and night'

 // creat a element by react 
 const reactElement = React.createElement(
     'a',
     {href: 'https://google.com', target:'_blank'},
     'click me to visit google',
     any
 )

ReactDOM.createRoot(document.getElementById('root')).render(
     <App />
     // <Hello />
     // reactElement
     // anotherElement
     
     // <domElement />   or,  domElement ,  or,   domElement()  // not working 
     // <reactElement />  // not working 
     // <anotherElement /> // not working
)
