// hne sna3et serveur mte3i
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const Client = require("./models/Client");
const app = express();

app.use(cors());

const ClientModel = require("./models/Client");
const ProduitModel = require("./models/Produit");

// pour dire q'on va recevoir les donnees de la front dans le format json
app.use(express.json());

// connection a notre base de donnee mongobd
mongoose.connect(
  "mongodb+srv://emna:emna123456@e-commerce.dnfnw.mongodb.net/Gorgeous?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  },
  (err) => {
    console.log({ err });
  }
);

app.get("/read", async (req, res) => {
  const clients = await Client.find();
  console.log(clients);
  res.send("ciiii bon");
});

app.post("/inscription", async (req, res) => {
  console.log("ahnni hoini");

  const client = new ClientModel(req.body);
  console.log({ client });

  try {
    await client.save();
    res.send("inserted data");
  } catch (error) {
    console.log({ error });
  }
});

app.post("/AjoutProduit", async (req, res) => {
  console.log("ahnni hoini");

  const produit = new ProduitModel(req.body);
  console.log({ produit });

  try {
    await produit.save();
    res.send("inserted data");
  } catch (error) {
    console.log({ error });
  }
});

app.post("/connexion", async (req, res) => {
  const { Email, Motdepasee } = req.body;
  const user = await Client.findOne({ Email, Motdepasee });
  console.log({ user });
  if (!user) {
    res.json({ erreur: "utilisateur non trouvé" });
  } else {
    res.json({ user });
  }
});

app.get("/clients", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

app.get("/produits", async (req, res) => {
  const produits = await ProduitModel.find();
  res.json(produits);
});

// hne 3titou port surlequel bch n3mloulou run
app.listen(3001, () => {
  console.log("server running on port 3001 ");
});
