
const axios = require("axios");

console.log("YO SOY EL PRIMERO SALIR");

const bringLocations = async () => {

    console.log("AHORA LLAMO A LA API");

    let resultado = await axios.get("https://rickandmortyapi.com/api/location?page=2");
    
    console.log(resultado.data.results);

}

bringLocations();

setTimeout(()=>{
    console.log("TODO HA SALIDO MAL");

},2000)