var coletaMediaQuizModel = require("../models/coletaMediaQuiz.js")


function coletaMediaQuizcontroller(req,res){

    coletaMediaQuizModel.coletaQuizMediaFacil()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function coletaMediaQuizMediocontroller(req,res){

    coletaMediaQuizModel.coletaQuizMediaMedio()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function coletaMediaQuizHardcontroller(req,res){

    coletaMediaQuizModel.coletaQuizMediaHard()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro na coleta de novos Dados:",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}
module.exports = {
    coletaMediaQuizcontroller,
    coletaMediaQuizMediocontroller,
    coletaMediaQuizHardcontroller
};