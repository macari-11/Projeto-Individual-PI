// CHAMANDO AS VARIAVEIS ATRAVES DO CSS 
const botaoInicarQuiz = document.querySelector(".iniciar-quiz")
const questoesBox = document.querySelector(".questoes-box")
const respostaBox = document.querySelector(".resposta-box")
const textoQuestoes = document.querySelector(".questoes")
const botaoProximaQuestao = document.querySelector(".proximaQuestao")

var questaoAtual = 0 
var questoesCorretas = 0  

botaoProximaQuestao.addEventListener("click", mostrarQuestaoNova)

// AQUI AO CLICAR NO BOTÃO DE INICIAR  ADICIONAMOS E REMOVEMOS A CLASS HIDE
// ASSIM ELE FICA DINAMICO
function IniciarGame(){
    botaoInicarQuiz.classList.add("esconder")
    questoesBox.classList.remove("esconder")
    
    mostrarQuestaoNova()
}



// NESSA FUNÇÃO COMEÇAMOS LIMPANDO O LOCAL PARA A NOVA QUESTÃO E DEPOIS COLOCAMOS A NOVA 
function mostrarQuestaoNova(){
    resetState()

    if(questions.length == questaoAtual){
        return terminarGame()
    }

    textoQuestoes.textContent = questions[questaoAtual].question
    questions[questaoAtual].answers.forEach(answer => {

        const newAnswer = document.createElement("button")
        newAnswer.classList.add("answer", "button")
        newAnswer.textContent = answer.text


        // ADICIONANDO INFORMAÇÃO PARA O BOTÃO CRIADO ACIMA
        if(answer.correct){                               
            newAnswer.dataset.correct = answer.correct
        }
        respostaBox.appendChild(newAnswer)

    // AQUI ELE CAPTA O EVENTO DE CLICK, E APÓS ISSO IRÁ RODAR A FUNÇÃO PARA VERIFICAR 
    // SE ESTÁ CERTA OU NÃO 
        newAnswer.addEventListener("click", selecionarPergunta)
    })
}

// NESSA FUNÇÃO FAZEMOS COM QUE O BOTÃO DA PROXÍMA PERGUNTA SUMA RETIRANDO A CLASS DELE
// E TAMBÉM LIMPAMOS AS RESPOSTAS ANTERIORES RETIRANDO OS BOTÕES DA DIV *ANSWER CONTAINER*
function resetState(){
    botaoProximaQuestao.classList.add("esconder")
        
    while(respostaBox.firstChild){
        respostaBox.removeChild(respostaBox.firstChild)
    }
}

//VERIFICANDO SE A QUESTÃO ESTÁ CORRETA
// O EVENT ELE RETORNAR O BOTÃO DO CLICK
// SE VIER O TRUE NO ELEMENTO SABEMOS QUE FOI A CERTA
function selecionarPergunta(event){
    const answerClicked = event.target

    if(answerClicked.dataset.correct){
        questoesCorretas ++
    }
    
    botaoProximaQuestao.classList.remove("esconder")
    questaoAtual ++

    mostrarQuestaoNova()
}

function terminarGame(){
    const totalQuestoes = questions.length
    const performance = Math.floor((questoesCorretas * 100) / totalQuestoes)

    var mensagemFinal = ""

    if(performance >= 90){
        mensagemFinal = "hogake"
    }

    questoesBox.innerHTML = 
    `<p> Você acertou: ${questoesCorretas} de  ${questions.length} questões <br> 
    <span> Você é um: ${mensagemFinal} </span></p>`

    fetch("/resultado/cadastrarResultadoHard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pontuacaoServer: questoesCorretas,
          usuarioServer: sessionStorage.ID_USUARIO
        })
      }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
          console.log(resposta);
        } else {

          console.log("Houve um erro ao colocar o resultado no Banco");
        }

      }).catch(function (erro) {
        console.log(erro);
      })

}
function Voltar(){
    window.location = "../index.html";
}



function validarSessaoHard() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email === undefined && nome === undefined) {
        return window.location = "../login2.html"; 
    } 
}














const questions = [
    {
        question: "Qual ninja completou mais missões por Konoha",
        answers: [
            {text: "Kakashi Hatake", correct: false},
            {text: "Maito Gai", correct: false},
            {text: "Jiraya", correct: true},
            {text: "Sakumo Hatake ", correct: false},
        ]
    },
    {
        question: "Qual é o nome da vila oculta da Névoa?",
        answers: [
            {text: "Kirigakure", correct: true},
            {text: "Iwagakure", correct: false},
            {text: "Otogakure", correct: false},
            {text: "Takigakure", correct: false},
        ]
    },
    {
        question: " Qual desses símbolos de anéis é o de Itachi? ",
        answers: [
            {text: "南", correct: false},
            {text: "朱", correct: true},
            {text: "玉", correct: false},
            {text: "北", correct: false},
        ]
    },
    {
        question: "Qual Bijuu foi capturada pelo Itachi e Kisame",
        answers: [
            {text: "Isobu", correct: false},
            {text: "Choumei", correct: false},
            {text: "Son Gokuu", correct: true},
            {text: "Saiken", correct: false},
        ]
    },
    {
        question: "Qual o nome do tio do Lamen?",
        answers: [
            {text: "Touchi", correct: false},
            {text: "Tunchi", correct: false},
            {text: "Tenchi", correct: false},
            {text: "Teuchi", correct: true},
        ]
    },
]