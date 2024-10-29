import repositoryMovie from "../repositories/repository.movie.js";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getAllMovies(year) {
    const movies = await repositoryMovie.getAllMovies(year);

    return movies;
}

async function createMovie(data, cover) {
    try {
        let imageUrl = null;

        if (cover) {
            const uploadsDir = path.join(__dirname, '../uploads');

            // Verifica se o diretório "uploads" existe, se não existir, cria
            if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir);
            }

            const fileName = `${Date.now()}_${cover.name}`;
            const uploadPath = path.join(uploadsDir, fileName);

            // Move o arquivo para o diretório de uploads
            await cover.mv(uploadPath);

            imageUrl = `/uploads/${fileName}`;
        }

        const newMovie = {
            title: data.title,
            year: data.year,
            director: data.director,
            studio: data.studio,
            image_url: imageUrl
        };

        // Chama o repositório para salvar o filme no banco de dados
        return await repositoryMovie.createMovie(newMovie);

    } catch (error) {
        throw new Error(`Erro ao criar filme: ${error.message}`);
    }
}




export default { getAllMovies, createMovie };