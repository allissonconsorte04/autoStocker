const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Importa as rotas de produtos
const productsRoute = require('./routes/products');


mongoose.connect('mongodb://localhost:27017/autoStocker', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao banco de dados MongoDB'))
    .catch((err) => console.log(err));



const app = express();

// Middleware para conseguir ler JSON
app.use(express.json());

// Define as rotas de produtos
app.use('/products', productsRoute);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
