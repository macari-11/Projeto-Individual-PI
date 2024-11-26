var database = require("../database/config")


function coletaQuiz() {
    var instrucaoSql = `
        select * from respostasQuiz order by resultado desc; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    coletaQuiz
};


