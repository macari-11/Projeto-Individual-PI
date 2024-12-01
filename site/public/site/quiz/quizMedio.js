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

    fetch("/resultado/cadastrarResultadoMedio", {
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



function validarSessaoMedio() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email === undefined && nome === undefined) {
        return window.location = "../login2.html"; 
    } 
}












const questions = [
    {
        question: " Qual o parceiro do Itachi na Akatsuki?",
        answers: [
            {text: "Pain", correct: false},
            {text: "Tobi", correct: false},
            {text: "Hidan", correct: false},
            {text: "Kisame", correct: true},
        ]
    },
    {
        question: " Qual é o nome da vila oculta da areia? ",
        answers: [
            {text: "Konohagakure", correct: false},
            {text: "Kirigakure", correct: false},
            {text: "Sunagakure", correct: true},
            {text: "Amegakure", correct: false},
        ]
    },
    {
        question: "Qual o nome do pai do Naruto",
        answers: [
            {text: "Minato Namikaze", correct: true},
            {text: "Minato Uzumaki", correct: false},
            {text: "Minato Sarotobi", correct: false},
            {text: "Minato Hyuuga ", correct: false},
        ]
    },
    {
        question: "Quantos episódios tem Naruto Classico?",
        answers: [
            {text: "215", correct: false},
            {text: "220", correct: true},
            {text: "225", correct: false},
            {text: "230", correct: false},
        ]
    },
    {
        question: "Quem matou o Asuma? ",
        answers: [
            {text: "Deidara", correct: false},
            {text: "Kabuto", correct: false},
            {text: "Kakuzo", correct: false},
            {text: "Hidan", correct: true},
        ]
    },
]