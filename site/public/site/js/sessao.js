

if(sessionStorage.NOME_USUARIO != undefined){
    usuarioSession.innerText = sessionStorage.NOME_USUARIO
}
else{
    usuarioSession.innerText = ""
}


function limparSessao() {
    sessionStorage.clear();
    window.location = "./site/public/index.html";
}