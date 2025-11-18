const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Ruta base a la carpeta public
const publicPath = path.join(__dirname, 'public');

// Servir estáticos (css, js, imágenes, etc.)
app.use(express.static(publicPath));

// Helper para mandar HTML sin repetir path.join
function sendHtml(res, fileName) {
  res.sendFile(path.join(publicPath, fileName));
}

/**
 * LANDING
 * Si quieres que la raíz sea la pantalla "pendiente de login",
 * mandamos directo index_logInPending.html
 */
app.get('/', (req, res) => {
  sendHtml(res, 'index_logInPending.html');
});

// Variante explícita usada en el frontend
app.get('/index_logInPending', (req, res) => {
  sendHtml(res, 'index_logInPending.html');
});

// Home ya logueado
app.get('/index_logIn', (req, res) => {
  sendHtml(res, 'index_logIn.html');
});

// Login
app.get('/logIn', (req, res) => {
  sendHtml(res, 'logIn.html');
});

// También permitimos /login por si lo usas en el futuro
app.get('/login', (req, res) => {
  sendHtml(res, 'logIn.html');
});

// Registro
app.get('/register', (req, res) => {
  sendHtml(res, 'register.html');
});

// Perfil
app.get('/profile', (req, res) => {
  sendHtml(res, 'profile.html');
});

// Info
app.get('/info', (req, res) => {
  sendHtml(res, 'info.html');
});

// Reglas
app.get('/rules', (req, res) => {
  sendHtml(res, 'rules.html');
});

// Balance
app.get('/balance', (req, res) => {
  sendHtml(res, 'balance.html');
});

// Actividad
app.get('/activity', (req, res) => {
  sendHtml(res, 'activity.html');
});

// Juegos
app.get('/roulette', (req, res) => {
  sendHtml(res, 'roulette.html');
});

app.get('/hi-lo', (req, res) => {
  sendHtml(res, 'hi-lo.html');
});

// En el frontend usas redirectToGame('mines'), pero el archivo es mineBet.html
app.get('/mines', (req, res) => {
  sendHtml(res, 'mineBet.html');
});

// Template genérico de juegos (si lo quieres exponer)
app.get('/templateGames', (req, res) => {
  sendHtml(res, 'templateGames.html');
});

// Opcional: 404 genérico
// app.get('*', (req, res) => {
//   res.status(404).send('404 - Página no encontrada');
// });

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
