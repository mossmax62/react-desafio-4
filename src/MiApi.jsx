import React, { useEffect, useState } from 'react';
const MiApi = ({data, setData} ) => {
    const url = "https://rickandmortyapi.com/api/character";
    useEffect(() => {
        consultarApi();
    },[])
    const consultarApi = async () => {
        const response = await fetch(url);
        const res = await response.json();
        console.log(res.results);
        setData(res.results);
    }
    return (
        <>
        <div>
        
        <div className='container'>
        <div className='row'>
            {data.map((item, index) => {
            return (
                <div key={item.name} className='col-sm'>
                <img className='img-thumbnail' src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                </div>
            );
            })}
        </div>
                </div>
        </div>    
        </>
    )
    }
export default MiApi;