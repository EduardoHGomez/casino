// ---------- Uso de paquetes para el servidor, cors y archivos -----------
const express = require('express'); 
const cors = require('cors');

// ---------- CONFIGURACIÓN DEL SERVIDOR ------------ Ejecutar con npm run dev
const app = express(); 
const port = 3000; 
app.use(express.json())

// --------- Archivos locales (Archivos HTML, CSS, JS) -------------
app.use(express.static('app'));
app.use('/views', express.static('views'));
 
// -------- CORS -----------------
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
  
// ------ Cargar el archivo router.js --------------
const router = require('./routes/router.js'); 

app.use('/', router);

// Después de encender el servidor
app.listen(port, () => {
    console.log("Server running on port: " + port);
});