const express = require("express");
const PORT = 3000;

const server = express();
const router = express.Router();

router.get("/", (req,res) => res.send("Bienvenido a la página"));

server.use('/', router);


const serverAp =server.listen(
    PORT, () => (`Se ha levantado el servidor en el port ${PORT}`)
);