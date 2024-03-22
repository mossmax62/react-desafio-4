const Buscador = ({ busqueda, setBusqueda }) => {
    return (
      <div>
        <input
        className="form-control"
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    );
  };
  
  export default Buscador;