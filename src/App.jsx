import { useState, useEffect } from 'react'
import './App.css'
import MiApi from './MiApi'
import Buscador from './Buscador'

function App() {
  const [resultados, setResultados] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await MiApi.consultarApi();
      setResultados(data);
    };
    fetchData();
  }, []);
  
  const resultadosFiltrados = resultados.filter((resultado) =>
    resultado.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  const ordenarResultados = () => {
    // Puedes ordenar por nombre, precio o cualquier otro criterio
    console.log('Ordenar por nombre');
    setResultados(resultadosFiltrados.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const ordenOriginal = () => {
    setResultados(resultadosFiltrados.sort((a, b) => a.id - b.id));
  }

  return (
    <div className='container'>
      
      <div >
      <h1>Consumo de API con React</h1>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      <button className='btn btn-primary' onClick={ordenarResultados}>Ordenar por nombre</button>
      <button className='btn btn-primary' onClick={ordenOriginal}>Orden original</button>
        <div className='row'>
        {resultadosFiltrados.map((resultado) => (
          <div key={resultado.id} className='col col-sm'>
             <img src={resultado.image} className='img-thumbnail' ></img> 
             <h2>{resultado.name} </h2>
          </div>
        ))}
        </div>

      </div>
    </div>
  );
};

export default App
