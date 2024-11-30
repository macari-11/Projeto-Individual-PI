var database = require("../database/config")


function coletaQuiz() {
    var instrucaoSql = `
        select cadastro.nome as 'Nome', 
        resposta.resultado as 'Resultado'
        from cadastro
        left join resposta
        on idCadastro = fkUsuario
        where resposta.resultado is not null
        order by  resposta.resultado desc
        limit 5; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaQuizMedio() {
    var instrucaoSql = `
        select cadastro.nome as 'Nome', 
        resposta.resultadoMedio as 'ResultadoMedio'
        from cadastro
        left join resposta
        on idCadastro = fkUsuario
        where resposta.resultadoMedio is not null
        order by  resposta.resultadoMedio desc
        limit 5; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function coletaQuizHard() {
    var instrucaoSql = `
        select cadastro.nome as 'Nome', 
        resposta.resultadohard as 'ResultadoHard'
        from cadastro
        left join resposta
        on idCadastro = fkUsuario
        where resposta.resultadoHard is not null
        order by  resposta.resultadoHard desc
        limit 5; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    coletaQuiz,
    coletaQuizMedio,
    coletaQuizHard
};


