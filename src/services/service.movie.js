import repositoryMovie from "../repositories/repository.movie.js";

async function getAllMovies(year) {
    const movies = await repositoryMovie.getAllMovies(year);

    return movies;
}


export default { getAllMovies };