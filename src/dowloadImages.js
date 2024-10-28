import https from 'https';
import fs from 'fs';
import { promises as fsp } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtenha o diretório atual para criar a pasta `images`
const __dirname = dirname(fileURLToPath(import.meta.url));

// OBJETO USE DOWNLOAD IMAGES
const dataMovies = [
    {
      "id": 1,
      "year": 1972,
      "title": "The French Connection",
      "director": "William Friedkin",
      "studio": "20th Century Fox",
      "image_url": "https://m.media-amazon.com/images/I/81oILSjtgaL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 2,
      "year": 1973,
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "studio": "Paramount Pictures",
      "image_url": "https://assets.stoumann.dk/img/1972.jpg"
    },
    {
      "id": 3,
      "year": 1974,
      "title": "The Sting",
      "director": "George Roy Hill",
      "studio": "Universal Pictures",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/The_Sting_%281973_alt_poster%29.jpeg/640px-The_Sting_%281973_alt_poster%29.jpeg"
    },
    {
      "id": 4,
      "year": 1975,
      "title": "The Godfather Part II",
      "director": "Francis Ford Coppola",
      "studio": "Paramount Pictures",
      "image_url": "https://m.media-amazon.com/images/I/41V2AB34KCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 5,
      "year": 1976,
      "title": "One Flew Over the Cuckoo's Nest",
      "director": "Milos Forman",
      "studio": "United Artists",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg"
    },
    {
      "id": 6,
      "year": 1977,
      "title": "Rocky",
      "director": "John G. Avildsen",
      "studio": "United Artists",
      "image_url": "https://i.ebayimg.com/images/g/9AwAAOSwY51l8lwo/s-l400.jpg"
    },
    {
      "id": 7,
      "year": 1978,
      "title": "Annie Hall",
      "director": "Woody Allen",
      "studio": "United Artists",
      "image_url": "https://fr.web.img6.acsta.net/pictures/18/01/08/10/49/4614249.jpg"
    },
    {
      "id": 8,
      "year": 1979,
      "title": "The Deer Hunter",
      "director": "Michael Cimino",
      "studio": "Universal Pictures",
      "image_url": "https://assets.stoumann.dk/img/1978.jpg"
    },
    {
      "id": 9,
      "year": 1980,
      "title": "Kramer vs. Kramer",
      "director": "Robert Benton",
      "studio": "Columbia Pictures",
      "image_url": "https://assets.stoumann.dk/img/1979.jpg"
    },
    {
      "id": 10,
      "year": 1981,
      "title": "Ordinary People",
      "director": "Robert Redford",
      "studio": "Paramount Pictures",
      "image_url": "https://assets.stoumann.dk/img/1980.jpg"
    },
    {
      "id": 11,
      "year": 1982,
      "title": "Chariots of Fire",
      "director": "Hugh Hudson",
      "studio": "Warner Bros.",
      "image_url": "https://assets.stoumann.dk/img/1981.jpg"
    },
    {
      "id": 12,
      "year": 1983,
      "title": "Gandhi",
      "director": "Richard Attenborough",
      "studio": "Columbia Pictures",
      "image_url": "https://assets.stoumann.dk/img/1982.jpg"
    },
    {
      "id": 13,
      "year": 1984,
      "title": "Terms of Endearment",
      "director": "James L. Brooks",
      "studio": "Paramount Pictures",
      "image_url": "https://assets.stoumann.dk/img/1983.jpg"
    },
    {
      "id": 14,
      "year": 1985,
      "title": "Amadeus",
      "director": "Milos Forman",
      "studio": "Orion Pictures",
      "image_url": "https://assets.stoumann.dk/img/1984.jpg"
    },
    {
      "id": 15,
      "year": 1986,
      "title": "Out of Africa",
      "director": "Sydney Pollack",
      "studio": "Universal Pictures",
      "image_url": "https://assets.stoumann.dk/img/1985.jpg"
    },
    {
      "id": 16,
      "year": 1987,
      "title": "Platoon",
      "director": "Oliver Stone",
      "studio": "Orion Pictures",
      "image_url": "https://assets.stoumann.dk/img/1986.jpg"
    },
    {
      "id": 17,
      "year": 1988,
      "title": "The Last Emperor",
      "director": "Bernardo Bertolucci",
      "studio": "Columbia Pictures",
      "image_url": "https://assets.stoumann.dk/img/1987.jpg"
    },
    {
      "id": 18,
      "year": 1989,
      "title": "Rain Man",
      "director": "Barry Levinson",
      "studio": "United Artists",
      "image_url": "https://assets.stoumann.dk/img/1988.jpg"
    },
    {
      "id": 19,
      "year": 1990,
      "title": "Driving Miss Daisy",
      "director": "Bruce Beresford",
      "studio": "Warner Bros.",
      "image_url": "https://assets.stoumann.dk/img/1989.jpg"
    },
    {
      "id": 20,
      "year": 1991,
      "title": "Dances with Wolves",
      "director": "Kevin Costner",
      "studio": "Orion Pictures",
      "image_url": "https://assets.stoumann.dk/img/1990.jpg"
    },
    {
      "id": 21,
      "year": 1992,
      "title": "The Silence of the Lambs",
      "director": "Jonathan Demme",
      "studio": "Orion Pictures",
      "image_url": "https://assets.stoumann.dk/img/1991.jpg"
    },
    {
      "id": 22,
      "year": 1993,
      "title": "Unforgiven",
      "director": "Clint Eastwood",
      "studio": "Warner Bros.",
      "image_url": "https://assets.stoumann.dk/img/1992.jpg"
    },
    {
      "id": 23,
      "year": 1994,
      "title": "Schindler's List",
      "director": "Steven Spielberg",
      "studio": "Universal Pictures",
      "image_url": "https://assets.stoumann.dk/img/1993.jpg"
    },
    {
      "id": 24,
      "year": 1995,
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "studio": "Paramount Pictures",
      "image_url": "https://assets.stoumann.dk/img/1994.jpg"
    },
    {
      "id": 25,
      "year": 1996,
      "title": "Braveheart",
      "director": "Mel Gibson",
      "studio": "Paramount Pictures",
      "image_url": "https://media.senscritique.com/media/000012318304/300/braveheart.jpg"
    },
    {
      "id": 26,
      "year": 1997,
      "title": "The English Patient",
      "director": "Anthony Minghella",
      "studio": "Miramax Films",
      "image_url": "https://m.media-amazon.com/images/M/MV5BNjJjZDIzY2QtMDFiMC00MzFkLWFjMDAtODgzNWIwM2NjYWMwXkEyXkFqcGc@._V1_FMjpg_UX849_.jpg"
    },
    {
      "id": 27,
      "year": 1998,
      "title": "Titanic",
      "director": "James Cameron",
      "studio": "20th Century Fox, Paramount Pictures",
      "image_url": "./src/images/Titanic.jpg"
    },
    {
      "id": 28,
      "year": 1999,
      "title": "Shakespeare in Love",
      "director": "John Madden",
      "studio": "Miramax Films",
      "image_url": "https://fr.web.img2.acsta.net/medias/03/21/43/032143_af.jpg"
    },
    {
      "id": 29,
      "year": 2000,
      "title": "American Beauty",
      "director": "Sam Mendes",
      "studio": "DreamWorks",
      "image_url": "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUfiAHpJMSmgaUFahG6hzPNK7YfWsSA2pwZxgB/jpg"
    },
    {
      "id": 30,
      "year": 2001,
      "title": "Gladiator",
      "director": "Ridley Scott",
      "studio": "DreamWorks, Universal Pictures",
      "image_url": "https://fr.web.img3.acsta.net/c_310_420/img/d6/5b/d65be9c3a6f9dc13a987f71c59351855.jpg"
    },
    {
      "id": 31,
      "year": 2002,
      "title": "A Beautiful Mind",
      "director": "Ron Howard",
      "studio": "Universal Pictures, DreamWorks",
      "image_url": "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/00/02/33/32/69219828_af.jpg"
    },
    {
      "id": 53,
      "year": 2002,
      "title": "City of God",
      "director": "Fernando Meirelles",
      "studio": "RIO STUDIOS",
      "image_url": "https://147242.peda.univ-lille.fr/wp-content/uploads/2023/02/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      "id": 32,
      "year": 2003,
      "title": "Chicago",
      "director": "Rob Marshall",
      "studio": "Miramax Films",
      "image_url": "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/00/02/56/67/affiche.jpg"
    },
    {
      "id": 33,
      "year": 2004,
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "studio": "New Line Cinema",
      "image_url": "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/14/33/18366630.jpg"
    },
    {
      "id": 34,
      "year": 2005,
      "title": "Million Dollar Baby",
      "director": "Clint Eastwood",
      "studio": "Warner Bros.",
      "image_url": "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/48/67/18409541.jpg"
    },
    {
      "id": 35,
      "year": 2006,
      "title": "Crash",
      "director": "Paul Haggis",
      "studio": "Lionsgate",
      "image_url": "https://fr.web.img4.acsta.net/c_310_420/medias/nmedia/18/35/60/86/18441573.jpg"
    },
    {
      "id": 36,
      "year": 2007,
      "title": "The Departed",
      "director": "Martin Scorsese",
      "studio": "Warner Bros.",
      "image_url": "https://i.blogs.es/49feb8/movieposter_7758/450_1000.jpg"
    },
    {
      "id": 37,
      "year": 2008,
      "title": "No Country for Old Men",
      "director": "Joel Coen, Ethan Coen",
      "studio": "Miramax Films, Paramount Vantage",
      "image_url": "https://m.media-amazon.com/images/I/91W8fuTJTfL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 38,
      "year": 2009,
      "title": "Slumdog Millionaire",
      "director": "Danny Boyle",
      "studio": "Fox Searchlight",
      "image_url": "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/67/57/84/19026767.jpg"
    },
    {
      "id": 39,
      "year": 2010,
      "title": "The Hurt Locker",
      "director": "Kathryn Bigelow",
      "studio": "Summit Entertainment",
      "image_url": "https://m.media-amazon.com/images/I/91yCwhnIvrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 40,
      "year": 2011,
      "title": "The King's Speech",
      "director": "Tom Hooper",
      "studio": "The Weinstein Company",
      "image_url": "https://m.media-amazon.com/images/S/pv-target-images/2da469e3079c701deef7ef0e1e614f914c22f0966494fddba10c99e1cb81f8a4.jpg"
    },
    {
      "id": 41,
      "year": 2012,
      "title": "The Artist",
      "director": "Michel Hazanavicius",
      "studio": "Warner Bros.",
      "image_url": "https://www.avoir-alire.com/local/cache-vignettes/L240xH320/arton16488-44b10.jpg?1724771824"
    },
    {
      "id": 42,
      "year": 2013,
      "title": "Argo",
      "director": "Ben Affleck",
      "studio": "Warner Bros.",
      "image_url": "https://fr.web.img4.acsta.net/medias/nmedia/18/87/65/00/20273151.jpg"
    },
    {
      "id": 43,
      "year": 2014,
      "title": "12 Years a Slave",
      "director": "Steve McQueen",
      "studio": "Fox Searchlight",
      "image_url": "https://static.fnac-static.com/multimedia/Images/FR/NR/54/7a/57/5732948/1507-1/tsp20140514140409/12-Years-a-Slave-DVD.jpg"
    },
    {
      "id": 44,
      "year": 2015,
      "title": "Birdman",
      "director": "Alejandro González Iñárritu",
      "studio": "Fox Searchlight",
      "image_url": "https://fr.web.img5.acsta.net/c_310_420/img/d5/b1/d5b12b58653a283e9fba85532b23f8ea.jpg"
    },
    {
      "id": 45,
      "year": 2016,
      "title": "Spotlight",
      "director": "Tom McCarthy",
      "studio": "Open Road Films",
      "image_url": "https://fr.web.img2.acsta.net/c_310_420/pictures/16/01/21/16/04/118433.jpg"
    },
    {
      "id": 46,
      "year": 2017,
      "title": "Moonlight",
      "director": "Barry Jenkins",
      "studio": "A24",
      "image_url": "https://fr.web.img2.acsta.net/c_310_420/o_club-allocine-2024-310x420.png_0_se/pictures/17/03/02/11/56/134486.jpg"
    },
    {
      "id": 47,
      "year": 2018,
      "title": "The Shape of Water",
      "director": "Guillermo del Toro",
      "studio": "Fox Searchlight",
      "image_url": "https://m.media-amazon.com/images/I/A1ZXHdyJQUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 48,
      "year": 2019,
      "title": "Green Book",
      "director": "Peter Farrelly",
      "studio": "Universal Pictures",
      "image_url": "https://m.media-amazon.com/images/I/91PWXIp8FOL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "id": 49,
      "year": 2020,
      "title": "Parasite",
      "director": "Bong Joon-ho",
      "studio": "CJ Entertainment",
      "image_url": "https://esprit.presse.fr/prod/file/esprit_presse/article/img_resize/42185_large.jpg"
    },
    {
      "id": 50,
      "year": 2021,
      "title": "Nomadland",
      "director": "Chloé Zhao",
      "studio": "Searchlight Pictures",
      "image_url": "https://www.revue-etudes.com/prod/file/etudes/article/picture/4889.jpg"
    },
    {
      "id": 51,
      "year": 2022,
      "title": "CODA",
      "director": "Sian Heder",
      "studio": "Apple Original Films",
      "image_url": "https://fr.web.img6.acsta.net/c_310_420/pictures/21/06/24/14/11/3793608.jpg"
    },
    {
      "id": 52,
      "year": 2023,
      "title": "Everything Everywhere All at Once",
      "director": "Daniel Kwan, Daniel Scheinert",
      "studio": "A24",
      "image_url": "https://fr.web.img5.acsta.net/c_310_420/pictures/22/06/14/16/36/2606624.jpg"
    }
];

// Crie a pasta `images` se não existir
async function ensureImagesFolder() {
    try {
        await fsp.mkdir(`${__dirname}/images`, { recursive: true });
        console.log('Pasta "images" pronta.');
    } catch (error) {
        console.error('Erro ao criar a pasta "images":', error.message);
    }
}

// Função para baixar uma única imagem
async function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            const path = fs.createWriteStream(filename);
            res.pipe(path);
            path.on('finish', () => {
                path.close();
                console.log(`Download de ${filename} completo!`);
                resolve();
            });
        }).on('error', (err) => {
            console.error(`Erro ao baixar ${filename}:`, err.message);
            reject(err);
        });
    });
}

// Baixe todas as imagens de `dataMovies`
async function downloadAllImages() {
    await ensureImagesFolder();
    const downloadPromises = dataMovies.map(movie => {
        const filename = `${__dirname}/images/${movie.id}_${movie.year}.jpg`;
        return downloadImage(movie.image_url, filename);
    });

    try {
        await Promise.all(downloadPromises);
        console.log('Todos os downloads concluídos.');
    } catch (error) {
        console.error('Erro ao baixar imagens:', error.message);
    }
}

// Execute o download
downloadAllImages();
