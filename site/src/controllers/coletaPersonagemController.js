var coletaPersonagemModel = require("../models/coletaPersonagemModel")


function coletaPersonagemController(req,res){

    coletaPersonagemModel.coletaPersonagem()
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
    coletaPersonagemController
};