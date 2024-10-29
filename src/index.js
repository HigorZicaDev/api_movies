import express from "express";
import cors from "cors";
import router from "./routes.js";
import fileUpload from 'express-fileupload';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Calcula __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para permitir CORS
app.use(cors());

// Configurar express-fileupload antes das rotas
app.use(fileUpload());

// Middleware para interpretar JSON e dados URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do diretório "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Definir as rotas após os middlewares de parsing
app.use(router);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});