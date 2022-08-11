import { obtenerCaracteres } from "./charcounter.js";
import { getAllEpisodes } from "./getEpisodes.js";

async function getAllData(req, res) {

    try {
       let respuesta =  await  Promise.all([obtenerCaracteres(), getAllEpisodes() ])
      res.json(respuesta)
    } catch (error) {
        res.status(404).json({err : error.message})
    }
    

}
export { getAllData}