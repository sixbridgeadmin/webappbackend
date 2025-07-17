const mongoose = require("mongoose");

const ContadorProveedorSchema = new mongoose.Schema({
  _id: {
    type: String, // skuproveedor
    required: true
  },
  contador: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model("ContadorProveedor", ContadorProveedorSchema);
