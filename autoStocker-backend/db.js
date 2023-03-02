const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Conecta ao banco de dados
async function connect() {
  try {
    await client.connect();
    console.log('Conectado ao banco de dados');
    return client.db('autoStocker');
  } catch (error) {
    console.log('Erro ao conectar ao banco de dados', error);
    process.exit(1);
  }
}

// Fecha a conexão com o banco de dados
function close() {
  return client.close();
}

module.exports = { connect, close };
