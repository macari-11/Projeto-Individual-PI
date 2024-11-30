var database = require("../database/config")

function coletaQuizMediaFacil() {
    var instrucaoSql = `
        SELECT ROUND(avg(resultado), 2) as quizFacil from resposta; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaQuizMediaMedio() {
    var instrucaoSql = `
        SELECT ROUND(avg(resultadoMedio), 2) as quizMedio from resposta; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaQuizMediaHard() {
    var instrucaoSql = `
        SELECT ROUND(avg(resultadoHard), 2) as quizHard from resposta; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    coletaQuizMediaFacil,
    coletaQuizMediaMedio,
    coletaQuizMediaHard
};
