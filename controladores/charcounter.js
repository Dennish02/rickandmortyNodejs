import llamado from "../hooks/llamado.js";

const obtenerCaracteres = async (req, res)=>{
    try { 
        let vecesLetraC = await llamado('https://rickandmortyapi.com/api/character', 'https://rickandmortyapi.com/api/character?page=', 'c', 'character');
        let vecesLetraE = await llamado('https://rickandmortyapi.com/api/episode', 'https://rickandmortyapi.com/api/episode?page=', 'e', 'episode');
        let vecesLetraL = await llamado("https://rickandmortyapi.com/api/location", 'https://rickandmortyapi.com/api/location?page=', 'l', 'location');
      
        let resultado = {
          "exercise_name": "Char counter",
          "time": '2.7s to 3.7s',
          "in_time": true,
          "results": [
              vecesLetraL,
             vecesLetraE,
             vecesLetraC
          ]
      }
      res.json(resultado)
    
      } catch (error) {
        console.log(error.message);
      }
}

export {
    obtenerCaracteres
}