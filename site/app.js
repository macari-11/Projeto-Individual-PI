process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express(); // Cria uma instância do Express

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var coletaQuizRouter = require("./src/routes/coletaquiz");
var coletaPersonagemRouter = require("./src/routes/coletaPersonagem");
var coletaMediaQuizRouter = require("./src/routes/coletaMediaQuiz");
var resultadoRouter = require("./src/routes/resultado");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/coletaQuiz",coletaQuizRouter);
app.use("/coletaPersonagem",coletaPersonagemRouter)
app.use("/coletaMediaQuiz",coletaMediaQuizRouter)
app.use("/resultado",resultadoRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});