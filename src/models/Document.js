const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  doc_cnh: Boolean,
  cep: Boolean,
  placa_carro: Boolean,
  doc_carro: Boolean,
});

module.exports = mongoose.model('Document', DocumentSchema); 