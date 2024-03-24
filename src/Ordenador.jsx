function Ordenador({ resultados, setResultados, originalData }) {
    const ordenarResultados = () => {
        // Ordenar por nombre, precio o cualquier otro criterio
        console.log('Ordenar por nombre');
        const sortedResults = [...resultados].sort((a, b) => a.name.localeCompare(b.name));
        setResultados(sortedResults);
    };

    const ordenarPorOrigin = () => {
        console.log('Ordenar por origin');
        const sortedByOrigin = [...resultados].sort((a, b) => a.origin.name.localeCompare(b.origin.name));
        setResultados(sortedByOrigin);
    };

    const ordenOriginal = () => {
        const sortedOriginal = [...originalData].sort((a, b) => a.id - b.id);
        setResultados(sortedOriginal);
    }

    return (
        <>
        <div style={{ margin: '20px' }}>
            <button className="btn btn-primary" onClick={ordenarResultados}>Ordenar por nombre</button>
            <button className="btn btn-primary" onClick={ordenOriginal}>Orden original</button>
            <button className="btn btn-primary" onClick={ordenarPorOrigin}>Ordenar por origen</button>
        </div>
        </>
    )
}

export default Ordenador