import { useState, useEffect } from 'react'
import './App.css'
import MiApi from './MiApi'
import Buscador from './Buscador'

function App() {
  const [data, setData] = useState([])
  return (
    <>
    <h1>Consumo de API con React</h1>
    <Buscador data={data} setData={setData}/>
    <div className='container'>
    <MiApi data={data} setData={setData}/>
    </div>
    </>
  )
}

export default App
