import express from "express";
import { obtenerCaracteres } from "../controladores/charcounter.js";

const router = express.Router();

router.get('/', obtenerCaracteres)


export default router;