import React from 'react'
import Card from './Components/Card'


const App = () => {
  return (
    <div className='parent'>
      <Card user='aman' age={18}/>
      <Card user='abhi' age={30}/>
      <Card user='naman' age={38}/>
      
    </div>
  )
}

export default App
