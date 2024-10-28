import { Router } from "express";
import controllerMovie from "./controllers/controller.movie.js";

const router = Router();

router.get('/api/movies', controllerMovie.getAllMovies);


export default router;