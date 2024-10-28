import serviceMovie from "../services/service.movie.js";


async function getAllMovies(req, res) {

    try {
        const movies = await serviceMovie.getAllMovies(req.query.year);
        if (movies) {
            res.status(200).json({
                message: 'Route All movies',
                movies: movies
            });
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

export default { getAllMovies };