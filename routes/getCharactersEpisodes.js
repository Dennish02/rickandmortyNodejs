import express from "express";
import { getAllData } from "../controladores/getAllData.js";



const router = express.Router();

router.get('/', getAllData)


export default router;