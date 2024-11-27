var database = require("../database/config")


function coletaQuiz() {
    var instrucaoSql = `
        select * from respostasQuiz 
        order by resultado desc 
        limit 5; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





module.exports = {
    coletaQuiz
};


