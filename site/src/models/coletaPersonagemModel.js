var database = require("../database/config")


function coletaPersonagem() {
    var instrucaoSql = `
        select preferido as Personagem,  
        COUNT(preferido) AS quantidade
        from cadastro
        group by preferido
        order by quantidade desc; `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    coletaPersonagem
};