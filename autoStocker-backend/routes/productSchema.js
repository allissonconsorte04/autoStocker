const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  preco: {
    type: Number,
    required: true
  },
  quantidade: {
    type: Number,
    required: true
  },
  fornecedor: {
    nome: {
      type: String
    },
    contato: {
      email: {
        type: String
      },
      telefone: {
        type: String
      }
    }
  },
  categorias: {
    type: [String]
  }
});

module.exports = mongoose.model('Product', productSchema);
