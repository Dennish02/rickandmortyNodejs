import express  from "express";
import getCharactersEpisodes from './routes/getCharactersEpisodes.js'

const app = express();
app.use(express.json());


//rutas
app.use("/getdata", getCharactersEpisodes);

//puerto
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server en ${PORT}`);
  });