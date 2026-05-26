const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, 'frontend')));

const bikeRoutes = require('./routes/bikes');

app.use('/bikes', bikeRoutes);

// Rota padrão para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});





app.use(express.static('public'));