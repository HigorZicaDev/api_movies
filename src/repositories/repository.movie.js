import { query } from "../data/sqlite.js";

async function getAllMovies(year) {

    let filter = [];
    let sql = "SELECT id,year,title,director,studio,image_url FROM movies";

    if (year) {
        sql = sql + ` WHERE year = ?`;
        filter.push(year);
    }

    sql = sql + " order by year ASC";

    
    const movies = await query(sql, filter);

    return movies;
}

async function createMovie(data) {

    let sql = `INSERT INTO movies(title,year,director,studio,image_url) VALUES(?,?,?,?,?) returning id`;
    
    const movie = await query(sql, [data.title, data.year, data.director, data.studio, data.image_url]);

    return movie;
}

export default { getAllMovies, createMovie };