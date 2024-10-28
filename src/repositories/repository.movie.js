import { query } from "../data/sqlite.js";

async function getAllMovies(year) {

    let filter = [];
    let sql = "SELECT year,title,director,studio,image_url FROM movies";

    if (year) {
        sql = sql + ` WHERE year = ?`;
        filter.push(year);
    }

    sql = sql + " order by year ASC";

    
    const movies = await query(sql, filter);

    return movies;
}

export default { getAllMovies };