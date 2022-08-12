import axios from 'axios';
import { endPoint } from '../utils/index.js';


const getAllEpisodes = async () => {
      //defino a las variables necesarias
      let arregloResultados = [];
      let apiUrl = endPoint(1, 'episode');

    let objetoFinal = {
          "exercise_name": "Episode locations",
          "time": "3s",
          "in_time": true,
      }
      let nombresFiltrados = []
      let nombres = [];
      let resultCharacters = []
      let rellamadoCharacters = []
    try {  
    
        // armo un bocle for para iterar sobre las paginas de la api
        for (let i = 1; i <= 3; i++) {
            // llamado a la api  
             let { data } = await axios.get(apiUrl)
           
            //  almacena la cantidad de paginas que tiene la api         
            //  itero sobre el resultado de la api        
            data.results.map(async elemento => {
                // agrego al resultado los nombres y los episodios para referencia
                arregloResultados= [...arregloResultados, ({
                    name: elemento.name,
                    episode: elemento.episode,
                })]
                // hago un promise.all a todos los character para traerme los nombres de las locatios  
                resultCharacters = [...resultCharacters, (Promise.all(elemento.characters.map(
                    async (enlaces) => (await axios.get(enlaces)
                    ))))]
            })            
            // tomo el siguiente enlace para la siguiente peticion
            apiUrl = data.info.next

        }//end for   
        // vuelvo a llamar a un promisse all porque tengo promesas pendientes 

        rellamadoCharacters = await Promise.all(resultCharacters)       
            rellamadoCharacters.map(r => {
                nombres = [...nombres, (r.map(t => (
                    t.data.location.name
                )))]
            })

              
        //Recorro el arreglo de nombres 
        nombres.map(data => {
            // cada data es un arreglo de nombres, que corresponde a un capitulo
            nombresFiltrados = [...nombresFiltrados, (data.filter((item, index) => {
                // hago un filtro para eliminar los nombres repetidos
                return data.indexOf(item) === index;
            }))]
        })
        // agrego los nombres a los resultados
        /** como fue un promise all el arreglo vuelve ordenado segun como se 
         * pidio, enctonces la posicion 1 corresponde al episodio uno */
        let y = 0
        // console.log(nombresFiltrados.length);
        for (let cap of arregloResultados) {
            cap.locations = nombresFiltrados[y]
            y++
        }  
        objetoFinal.results = arregloResultados 
        return objetoFinal
    } catch (error) {
        return (error.message)
    }
}
export { getAllEpisodes }