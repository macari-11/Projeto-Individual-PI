var express = require("express");
var router = express.Router();


var coletaMediaQuizController = require("../controllers/coletaMediaQuizController");

//Recebendo os dados do html e direcionando para a função do Controller.js

router.post("/coletaMediaQuiz", function (req, res) {
    coletaMediaQuizController.coletaMediaQuizcontroller(req, res);
})

router.post("/coletaMediaQuizMedio", function (req, res) {
    coletaMediaQuizController.coletaMediaQuizMediocontroller(req, res);
})

router.post("/coletaMediaQuizHard", function (req, res) {
    coletaMediaQuizController.coletaMediaQuizHardcontroller(req, res);
})

module.exports = router;