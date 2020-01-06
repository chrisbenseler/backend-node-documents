const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  doc_cnh: {
    type: Boolean,
    default: false
  },
  cep: {
    type: Boolean,
    default: false
  },
  placa_carro: {
    type: Boolean,
    default: false
  },
  doc_carro: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('Document', DocumentSchema); 