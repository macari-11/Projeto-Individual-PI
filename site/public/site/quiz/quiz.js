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

    fetch("/resultado/cadastrarResultado", {
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


    function validarSessao() {
        var email = sessionStorage.EMAIL_USUARIO;
        var nome = sessionStorage.NOME_USUARIO;
    
    
        if (email === undefined && nome === undefined) {
             return window.location = "../login2.html"; 
        } 
        
    }














const questions = [
    {
        question: "Qual o criador de Naruto?",
        answers: [
            {text: "Akira Toriyama", correct: false},
            {text: "Rumiko Takahashi", correct: false},
            {text: "Masashi Kishimoto", correct: true},
            {text: "Eiichiro Oda", correct: false},
        ]
    },
    {
        question: "Qual o nome da Vila Oculta da Folha?",
        answers: [
            {text: "Konohagakure", correct: true},
            {text: "Kirigakure", correct: false},
            {text: "Sunagakure", correct: false},
            {text: "Amegakure", correct: false},
        ]
    },
    {
        question: "Quais são os 3 principais Doujutsu no mundo ninja?",
        answers: [
            {text: "Jougan, Teseigan e Byakugan", correct: false},
            {text: "Sharingan, Mangekyou Sharingan e Byakugan", correct: false},
            {text: "Rinegan, Byakugan e Mangekyou Sharingan ", correct: false},
            {text: "Sharingan, Byakugan e Rinegan", correct: true},
        ]
    },
    {
        question: "Uzumaki Naruto faz parte de qual time?",
        answers: [
            {text: "Time 8", correct: false},
            {text: "Time 5", correct: false},
            {text: "Time 9 ", correct: false},
            {text: "Time 7", correct: true},
        ]
    },
    {
        question: "Qual o nome do Sensei do time 7",
        answers: [
            {text: "Kakashi Sarutobi", correct: false},
            {text: "Kakashi Uchiha", correct: false},
            {text: "Kakashi Hanake ", correct: false},
            {text: "Kakashi Hatake", correct: true},
        ]
    },
    {
        question: "Quais são as cinco principais transformações naturais de Chakra? ",
        answers: [
            {text: "Fogo, Água, Relampago, Vento e Pedra", correct: false},
            {text: "Fogo, Água, Relampago, Gelo e Terra", correct: false},
            {text: "Fogo, Água, Relampago, Vento e Terra", correct: true},
            {text: "Fogo, Água, Trovão, Vento e Terra", correct: false},
        ]
    },
    {
        question: "Quais os nomes dos companheiros de time do Naruto",
        answers: [
            {text: "Sasuke Haruno e Sakura Uchiha", correct: false},
            {text: "Sasuke Uchiha e Sakura Haruno", correct: true},
            {text: "Sasuke Uchiha e Ino Yamanaka", correct: false},
            {text: "Sakura Haruno e Ino Yamanaka", correct: false},
        ]
    },
]