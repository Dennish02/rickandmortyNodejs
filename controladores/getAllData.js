import  obtenerCaracteres  from "./charcounter.js";
import  getAllEpisodes  from "./getEpisodes.js";

export default async function getAllData(res) {

    try {
       let respuesta =  await  Promise.all([obtenerCaracteres(), getAllEpisodes() ])
      res.status(200).json(respuesta)
    } catch (error) {
        res.status(404).json({err : error.message})
    }
    

}
