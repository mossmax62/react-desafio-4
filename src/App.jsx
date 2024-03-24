import { useState, useEffect } from 'react'

import MiApi from './MiApi'
import Buscador from './Buscador'
import Ordenador from './Ordenador'

function App() {
  const [resultados, setResultados] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await MiApi.consultarApi();
      setResultados(data);
      setOriginalData(data); // Guarda los datos originales
    };
    fetchData();
  }, []);
  
  

  

  return (
    <div className='container'>
      
      <div >
      <h1>Consumo de API con React</h1>
      <h2>Personajes de Rick and Morty</h2>
      <Buscador setResultados={setResultados} originalData={originalData}/>
      <Ordenador resultados={resultados} setResultados={setResultados} originalData={originalData}/> {/* Pasa resultados, setResultados y originalData a Ordenador */}

        <div className='row'>
        {resultados.map((resultado) => (
          <div key={resultado.id} className='col col-sm lila_border'>
             <img src={resultado.image} className='img-thumbnail img-fluid' ></img> 
             <h2>{resultado.name} </h2>
             <h3>{resultado.species} </h3>
             <h3>{resultado.status} </h3>
             <h3>{resultado.origin.name} </h3>
          </div>
        ))}
        </div>

      </div>
    </div>
  );
};

export default App
