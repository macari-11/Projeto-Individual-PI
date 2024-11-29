var database = require("../database/config")


function coletaQuiz() {
    var instrucaoSql = `
        select cadastro.nome as 'Nome', 
        resposta.resultado as 'Resultado',
        resposta.resultadoMedio as 'ResultadoMedio',
        resposta.resultadoHard as 'ResultadoGrande'
        from cadastro
        join resposta
        on idCadastro = fkUsuario; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    coletaQuiz
};


