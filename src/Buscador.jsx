import React, { useState } from 'react';

const Buscador = ({ data, setData }) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const result = e.target.value
            ? data.filter((dato) =>
            JSON.stringify(dato).toLowerCase().includes(e.target.value.toLowerCase())
              )
            : data;
        setData(result);
    };
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder='Buscar'
                    value={search}
                    onChange={handleSearch}
                />
            </form>
        </div>
    );
};

export default Buscador;