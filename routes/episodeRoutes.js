import express from "express";
import { obtenerEpisodes } from "../controladores/episode.js";

const router = express.Router();

router.get('/', obtenerEpisodes)

export default router;