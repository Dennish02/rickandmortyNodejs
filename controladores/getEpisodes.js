import axios from 'axios';


const getAllEpisodes = async (req, res) => {
    try {
        //defino a las variables necesarias
        let arregloResultados = [];
        let apiUrl = 'https://rickandmortyapi.com/api/episode';
        let num = 1
        let objetoFinal = {
            "exercise_name": "Episode locations",
            "time": "3s",
            "in_time": true,          
        }
        let nombresFiltrados = []
        let nombres = [];
       

        //armo un bocle for para iterar sobre las paginas de la api
        for (let i = 0; i < num; i++) {
             // llamado a la api   
            let { data } = await axios.get(apiUrl)
            //  almacena la cantidad de paginas que tiene la api
             num === 1 &&  (num = data.info.pages)
            //  itero sobre el resultado de la api
            data.results.map(elemento => {
                // agrego al resultado los nombres y los episodios para referencia
                arregloResultados.push({
                    name: elemento.name,
                    episode: elemento.episode,
                })
                // hago un promise.all a todos los character para traerme los nombres de las locatios  
                Promise.all(elemento.characters.map(enlaces => (axios.get(enlaces))))
                    .then(valores => {  
                        // itero sobre la respuesta y me almaceno arreglos con cada nombre de las locations   
                        nombres.push(valores.map(loca => (loca.data.location.name)))
                    })
                //Recorro el arreglo de nombres   
                nombres.forEach(data => {
                    // cada data es un arreglo de nombres, que corresponde a un capitulo
                    nombresFiltrados.push(data.filter((item, index) => {
                        // hago un filtro para eliminar los nombres repetidos
                        return data.indexOf(item) === index;
                    }))
                   
                })
                // agrego los nombres a los resultados
                /** como fue un promise all el arreglo vuelve ordenado segun como se 
                 * pidio, enctonces la posicion 1 corresponde al episodio uno */ 
                 let y = 0
                for(let cap of arregloResultados){                  
                    cap.locations = nombresFiltrados[y]
                    y++
                }
               
            })
            // tomo el siguiente enlace para la siguiente peticion
            apiUrl = data.info.next;
        }
        objetoFinal.results = arregloResultados
      return objetoFinal

    } catch (error) {
        console.log(error);
    }
}
export { getAllEpisodes }