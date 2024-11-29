var resultadoModel = require("../models/resultadoModel");


//NORMAL
function cadastrarResultado(req, res) {

    var pontuacao = req.body.pontuacaoServer;

    resultadoModel.cadastrarResultado(pontuacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

//MEDIO
function cadastrarResultadoMedio(req, res) {

    var pontuacao = req.body.pontuacaoServer;

    resultadoModel.cadastrarResultadoMedio(pontuacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

//HARD
function cadastrarResultadoHard(req, res) {

    var pontuacao = req.body.pontuacaoServer;

    resultadoModel.cadastrarResultadoHard(pontuacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrarResultado,
    cadastrarResultadoMedio,
    cadastrarResultadoHard
}