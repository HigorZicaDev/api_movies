import { Router } from "express";
import controllerMovie from "./controllers/controller.movie.js";

const router = Router();

router.get('/api/movies', controllerMovie.getAllMovies);
router.post('/api/movies', controllerMovie.createMovie);


export default router;