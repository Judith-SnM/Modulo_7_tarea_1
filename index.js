require('dotenv').config();

const express = require('express');
const app = express();
const pool = require('./database/connection'); 

app.use(express.static('public')); 


app.get('/consultarEstudiantes', async (req, res) => {
  try {
    const queryText = 'SELECT nombre, curso FROM estudiantes';
    const result = await pool.query(queryText);
    res.json(result.rows); 
  } catch (error) {
    console.error('Error al consultar estudiantes:', error);
    res.status(500).json({ error: 'Error al consultar estudiantes' });
  }
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
