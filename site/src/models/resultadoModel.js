var database = require("../database/config")

//NORMAL
function cadastrarResultado(pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",pontuacao);
    
    var instrucaoSql = `
        INSERT INTO respostasQuiz (resultado) VALUES ('${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//MEDIO
function cadastrarResultadoMedio(fkUsuario,pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",pontuacao);
    
    var instrucaoSql = `
    insert into resposta (fkUsuario, resultado, tipoQuiz ) values
    (${fkUsuario}, ${pontuacao}, 'Medio');
        
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//HARD
function cadastrarResultadoHard(pontuacao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",pontuacao);
    
    var instrucaoSql = `
        INSERT INTO respostasQuiz (resultadoHard) VALUES ('${pontuacao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarResultado,
    cadastrarResultadoMedio,
    cadastrarResultadoHard
};