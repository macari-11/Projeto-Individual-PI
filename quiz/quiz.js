// CHAMANDO AS VARIAVEIS ATRAVES DO CSS 
const startGamebutton = document.querySelector(".start-quiz")
const questionsContainer = document.querySelector(".questions-container")
const answerContainer = document.querySelector(".answer-container")
const questionText = document.querySelector(".questions")
const nextQuestionButton = document.querySelector(".next-question")

var currentQuestionIndex = 0 
var questoesCorretas = 0  

nextQuestionButton.addEventListener("click", displayNextQuestion)

// AQUI AO CLICAR NO BOTÃO DE INICIAR  ADICIONAMOS E REMOVEMOS A CLASS HIDE
// ASSIM ELE FICA DINAMICO
function startGame(){
    startGamebutton.classList.add("hide")
    questionsContainer.classList.remove("hide")
    
    displayNextQuestion()
}



// NESSA FUNÇÃO COMEÇAMOS LIMPANDO O LOCAL PARA A NOVA QUESTÃO E DEPOIS COLOCAMOS A NOVA 
function displayNextQuestion(){
    resetState()

    if(questions.length == currentQuestionIndex){
        return finishGame()
    }

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {

        const newAnswer = document.createElement("button")
        newAnswer.classList.add("answer", "button")
        newAnswer.textContent = answer.text


        // ADICIONANDO INFORMAÇÃO PARA O BOTÃO CRIADO ACIMA
        if(answer.correct){                               
            newAnswer.dataset.correct = answer.correct
        }
        answerContainer.appendChild(newAnswer)

    // AQUI ELE CAPTA O EVENTO DE CLICK, E APÓS ISSO IRÁ RODAR A FUNÇÃO PARA VERIFICAR 
    // SE ESTÁ CERTA OU NÃO 
        newAnswer.addEventListener("click", selectAnswer)
    })
}

// NESSA FUNÇÃO FAZEMOS COM QUE O BOTÃO DA PROXÍMA PERGUNTA SUMA RETIRANDO A CLASS DELE
// E TAMBÉM LIMPAMOS AS RESPOSTAS ANTERIORES RETIRANDO OS BOTÕES DA DIV *ANSWER CONTAINER*
function resetState(){
    nextQuestionButton.classList.add("hide")
        
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild)
    }
}

//VERIFICANDO SE A QUESTÃO ESTÁ CORRETA
// O EVENT ELE RETORNAR O BOTÃO DO CLICK
// SE VIER O TRUE NO ELEMENTO SABEMOS QUE FOI A CERTA
function selectAnswer(event){
    const answerClicked = event.target

    if(answerClicked.dataset.correct){
        questoesCorretas ++
    }
    
    nextQuestionButton.classList.remove("hide")
    currentQuestionIndex ++
}

function finishGame(){
    const totalQuestoes = questions.length
    const performance = Math.floor((questoesCorretas * 100) / totalQuestoes)

    var mensagemFinal = ""

    if(performance >= 90){
        mensagemFinal = "hogake"
    }

    questionsContainer.innerHTML = 
    `<p> Você acertou: ${questoesCorretas} de  ${questions.length} questões <br> 
    <span> Você é um: ${mensagemFinal} </span></p>`

}



















const questions = [
    {
        question: "Pergunta1",
        answers: [
            {text: "resposta1a", correct: true},
            {text: "resposta1b", correct: false},
            {text: "resposta1c", correct: false},
            {text: "resposta1d", correct: false},
        ]
    },
    {
        question: "Pergunta2",
        answers: [
            {text: "respostada2a", correct: true},
            {text: "respostada2b", correct: false},
            {text: "respostada2c", correct: false},
            {text: "respostada2d", correct: false},
        ]
    },
    {
        question: "Pergunta3",
        answers: [
            {text: "respostada3a", correct: true},
            {text: "respostada3b", correct: false},
            {text: "respostada3c", correct: false},
            {text: "respostada3d", correct: false},
        ]
    },
]