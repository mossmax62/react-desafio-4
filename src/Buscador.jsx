import React, { useState } from 'react';
const Buscador = ({ setResultados, originalData }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (event) => {
    const value = event.target.value
    setSearchValue(value)

    if (value === '') {
      setResultados(originalData) // Si el valor del buscador se borra, restablece los resultados con los datos originales
    } else {
      const filteredData = originalData.filter(item => 
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setResultados(filteredData) // Establece los resultados con los datos filtrados
    }
  }

  return (
    <input type="text" value={searchValue} onChange={handleSearch} />
  )
  };
  
  export default Buscador;