const url = "https://rickandmortyapi.com/api/character";
const MiApi =  {
    async consultarApi()   {
        const response = await fetch(url);
        const res = await response.json();
        return res.results;
    }

    
}
export default MiApi;