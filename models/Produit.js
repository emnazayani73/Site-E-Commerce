const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema({
  ImageProduit: {
    type: String,
    required: true,
  },
  NomProduit: {
    type: String,
    required: true,
  },
  PrixProduit: {
    type: String,
    required: true,
  },
});

const Produit = mongoose.model("produitdatas", ProduitSchema);
module.exports = Produit;
