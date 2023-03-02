const express = require('express');
const router = express.Router();
const db = require('../db');
const Product = require('./productSchema'); // importando o schema


// Rota para obter todos os products
router.get('/', async (req, res) => {
  try {
    const collection = (await db.connect()).collection('products');
    const products = await collection.find({}).toArray();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao obter os products');
  } finally {
    await db.close();
  }
});

// Rota para criar um novo produto
router.post('/', async (req, res) => {
  try {
    const collection = (await db.connect()).collection('products');
    const result = await collection.insertOne(req.body);
    console.log(req.body)
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao adicionar o produto');
  } finally {
    await db.close();
  }
});

// Rota para obter um produto específico
router.get('/:id', (req, res) => {
  res.send(`Obtendo detalhes do produto ${req.params.id}`);
});

// Rota para atualizar um produto existente
router.put('/:id', (req, res) => {
  res.send(`Atualizando o produto ${req.params.id}`);
});

// Rota para excluir um produto
router.delete('/:id', (req, res) => {
  res.send(`Excluindo o produto ${req.params.id}`);
});

module.exports = router;
