var resultadoModel = require("../models/resultadoModel");



function cadastrarResultado(req, res) {
    // precisa pegar esse valor ainda
    var pontuacao = req.body.pontuacaoServer; 



        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
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


module.exports = {
    cadastrarResultado
}