import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="sliders">
    <div className="slide">
    <div className="head">
      <p>coventic</p>
      <button className='btn'> Sign up</button>
    </div>
    <div className="center">
      <div className="left">
        <h5>Welcome to our</h5>
        <h1>Creative <br /> Studio</h1>
        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Dignissimos quos eos possimus <br /> nam maiores? Aliquam ex voluptas a delectus <br /> voluptate eos illum porro nulla accusantium <br /></p> <br /> <br />
        <button className='btn2'>Take a tour</button>
        </div>
        <div className="right">
        <h2>Meet our Team</h2> <br />
         <img src="data:image/png;base64,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" alt="" />
        </div>
    
    </div>
    <div className="border">
      <hr />
      <ul>
        Data Analists
        <li>Salam</li>
        <li>Salam</li>
        <li>Salam</li>
      </ul>
    </div>
    </div>
  
  
     
    </div>
  
    </>
  )
}

export default App
