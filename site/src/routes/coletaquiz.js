var express = require("express");
var router = express.Router();


var coletaquizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/coletaQuiz", function (req, res) {
    coletaquizController.coletaquizController(req, res);
})

router.post("/coletaQuizMedio", function (req, res) {
    coletaquizController.coletaquizMedioController(req, res);
})

router.post("/coletaQuizHard", function (req, res) {
    coletaquizController.coletaquizHardController(req, res);
})
module.exports = router;