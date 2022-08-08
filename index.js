import express  from "express";
import charRoute from "./routes/charRoute.js";
import episodeRoutes from './routes/episodeRoutes.js'


const app = express();
app.use(express.json());


//rutas

app.use("/charcounter", charRoute);
app.use("/episode", episodeRoutes);


//puerto
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server en ${PORT}`);
  });