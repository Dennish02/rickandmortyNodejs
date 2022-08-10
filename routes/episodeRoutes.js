import express from "express";
import { obtenerEpisodes } from "../controladores/episode.js";
import { getAllEpisodes } from "../controladores/getEpisodes.js";

const router = express.Router();

router.get('/', getAllEpisodes)

export default router;