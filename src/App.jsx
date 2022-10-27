import { useState } from 'react'
import Navbar from './components/Navbar'
import airline from './airlines.json'
import Form from './components/Form'

function App() {
  const [option, setOption] = useState(airline[0].name)

  function changeOption(value) {
    setOption(value)
  }

  return (
   <>
   <Navbar changeOption={changeOption}/>
   <Form option={option}/>
   </>
  )
}

export default App
