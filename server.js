// ---------- Uso de paquetes para el servidor, cors y archivos -----------
const express = require('express'); 
const fs = require('node:fs');
const cors = require('cors');

// ---------- CONFIGURACIÓN DEL SERVIDOR ------------ Ejecutar con npm run dev
const app = express(); 
const PORT = 3000; 
app.use(express.json())

// --------- Archivos locales (Archivos HTML, CSS, JS) -------------
app.use(express.static('app'));
app.use('/views', express.static('views'));
 
// -------- CORS -----------------
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
  
// ------ Cargar el archivo router.js --------------
const router = require('./casino/controllers/router.js'); 


// ------------- Rutas iniciales ------------------
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

app.use('/', router);

// Después de encender el servidor
app.listen(port, () => {
    console.log("Server running on port: " + port);
});