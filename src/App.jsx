import React from 'react'
import Head from './Components/Head'
import Inpbox from './Components/Inpbox'

const App = () => {
  return (
    <div className='h-screen w-[100%] flex-col justify-around items-center'>
      <Head/>
      
      <Inpbox/>
      
    </div>
  )
}

export default App