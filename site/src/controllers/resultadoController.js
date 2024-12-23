var resultadoModel = require("../models/resultadoModel");


//NORMAL
function cadastrarResultado(req, res) {

    var pontuacao = req.body.pontuacaoServer;
    var idUsuario = req.body.usuarioServer;

    resultadoModel.cadastrarResultado(idUsuario,pontuacao)
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
    var idUsuario = req.body.usuarioServer;

    resultadoModel.cadastrarResultadoMedio(idUsuario,pontuacao)
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
    var idUsuario = req.body.usuarioServer;

    resultadoModel.cadastrarResultadoHard(idUsuario,pontuacao)
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