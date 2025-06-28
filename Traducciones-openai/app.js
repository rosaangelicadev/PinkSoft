// Como el proyecto es pequeño, no se ha dividido en componentes, por lo que todo el código se encuentra en este archivo.

//Importar dependencias
import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Cargar configuración (de api key)
dotenv.config();

// Cargar express
const app = express();
const PORT = process.env.PORT || 3000;

// Servir frontend
app.use("/",express.static("public"));

// Middleware para procesar json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Instancia de openai y pasar el api key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Ruta / endpoint / url para traducir
app.post('/api/traducir/', (req, res) => {
    return res.status(200).json({
        message: "Hola soy una ruta en nodejs",
        contenido: req.body
    });
});
    // Funcionalidad de traducir con UA
    // Llamar al LML o modelo de openai

    
// Servir el backend
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})