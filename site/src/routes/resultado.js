var express = require("express");
var router = express.Router();


//NORMAL
var resultadoController = require("../controllers/resultadoController");
router.post("/cadastrarResultado", function (req, res) {
    resultadoController.cadastrarResultado(req, res);
})

//MEDIO
var resultadoMedioController = require("../controllers/resultadoController");
router.post("/cadastrarResultadoMedio", function (req, res) {
    resultadoMedioController.cadastrarResultadoMedio(req, res);
})
//HARD
var resultadoHardController = require("../controllers/resultadoController");
router.post("/cadastrarResultadoHard", function (req, res) {
    resultadoHardController.cadastrarResultadoHard(req, res);
})

module.exports = router;