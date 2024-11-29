function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email == null && nome == null) {
        return window.location = "../index.html"; 
    } 
    return window.location = "../quiz/quiz.html"; 
}

function validarSessaoMedio() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email == null && nome == null) {
        return window.location = "../index.html"; 
    } 
    return window.location = "../quiz/quizMedio.html"; 
}

function validarSessaoHard() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email == null && nome == null) {
        return window.location = "../index.html"; 
    } 
    return window.location = "../quiz/quizHard.html"; 
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "./site/public/index.html";
}