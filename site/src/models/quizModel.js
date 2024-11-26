var database = require("../database/config")


function coletaQuiz() {
    var instrucaoSql = `
        select resultado from respostasQuiz;;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    coletaQuiz
};


