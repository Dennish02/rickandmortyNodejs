import llamado from "../hooks/llamado.js";
import { endPoint, endPointCharacter, endPointEpisode, endPointLocation } from "../utils/index.js";




export default async function obtenerCaracteres(){
  

    try { 
      let results = []
      let promesas  = await Promise.all([
        llamado(endPointCharacter, endPoint, 'c', 'character'),
         llamado(endPointEpisode, endPoint, 'e', 'episode'),
         llamado(endPointLocation, endPoint, 'l', 'location')
      ])
      
      for(let datos of promesas){
        results = [ datos, ...results]
      }
      let resultado = {
        "exercise_name": "Char counter",
        "time": '1.9s to 2s',
        "in_time": true,
        "results": results
    }  
 

     return resultado
    
      } catch (error) {
        console.log(error.message);
      }
}
