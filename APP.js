const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});

//Usuarios
app.get('/usuarios', (req, res) => {
  res.send("Obtener todos los usuarios");
});

app.get('/usuarios/:id', (req, res) => {
  res.send("Obtener un usuario con id_usuario");
});

app.post('/usuarios', (req, res) => {
  res.send("Crear un nuevo usuario.");
});

app.put('/usuarios/:id', (req, res) => {
  res.send("Actualizar los datos de usuario");
});

app.delete('/usuarios/:id', (req, res) => {
  res.send("Eliminar un usuario");
});

//Libros
app.get('/libros', (req, res) => {
  res.send('Obtener todos los libros');
});

app.get('/libros/:id', (req, res) => {
  res.send("Obtener un libro por su id_libro");
});

app.post('/libros', (req, res) => {
  res.send("Crear un nuevo libros");
});

app.put('/libros/:id', (req, res) => {
  res.send("Actualizar los datos de un libro");
});

app.put('/libros/:id/existencia', (req, res) => {
  res.send("Actualizar la existencia de un libro");
});

app.delete('/libros/:id', (req, res) => {
  res.send("Eliminar un libro");
});

//Préstamos
app.get('/prestamos', (req, res) => {
  res.send("Obtener todos los préstamos");
});

app.get('/prestamos/:id', (req, res) => {
  res.send("Obtener un préstamo por su id");
});

app.post('/prestamos', (req, res) => {
  res.send("Crear un nuevo préstamo");
});

app.put('/prestamos/:id', (req, res) => {
  res.send("Actualizar los datos de un préstamo");
});

app.delete('/prestamos/:id', (req, res) => {
  res.send("Eliminar un préstamo");
});

//Reseñas
app.get('/resenias', (req, res) => {
  res.send("Obtener todas las reseñas");
});

app.get('/resenias/:id', (req, res) => {
  res.send("Obtener una reseña por su id");
});

app.get('/resenias/libro/:id_libro', (req, res) => {
  res.send("Obtener reseñas de un libro especifico");
});

app.post('/resenias', (req, res) => {
  res.send("Crear una nueva reseña");
});

app.put('/resenias/:id', (req, res) => {
  res.send("Actualizar una reseña existente");
});

app.delete('/resenias/:id', (req, res) => {
  res.send("Eliminar una reseña");
});

//Lógicas específicas
app.get('/libros/disponibles', (req, res) => {
  res.send("Obtener todos los libros con existencia disponible para préstamo");
});

app.get('/prestamos/usuario/:id_usuario', (req, res) => {
  res.send("Obtener todos los préstamos de un usuario especifico");
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
  res.send("Obtener todos los préstamos realizados para un libro especifico");
});