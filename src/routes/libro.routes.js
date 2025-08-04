import { Router } from "express"
const router = Router()

router.get('/libros', (req, res) => {
  res.send('Obtener todos los libros');
});

router.get('/libros/:id', (req, res) => {
  res.send("Obtener un libro por su id_libro");
});

router.post('/libros', (req, res) => {
  res.send("Crear un nuevo libros");
});

router.put('/libros/:id', (req, res) => {
  res.send("Actualizar los datos de un libro");
});

router.put('/libros/:id/existencia', (req, res) => {
  res.send("Actualizar la existencia de un libro");
});

router.delete('/libros/:id', (req, res) => {
  res.send("Eliminar un libro");
});

export default router;