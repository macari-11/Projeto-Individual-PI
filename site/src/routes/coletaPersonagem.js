var express = require("express");
var router = express.Router();


var coletaPersonagemController = require("../controllers/coletaPersonagemController");

//Recebendo os dados do html e direcionando para a função do Controller.js

router.post("/coletaPersonagem", function (req, res) {
    coletaPersonagemController.coletaPersonagemController(req, res);
})

module.exports = router;