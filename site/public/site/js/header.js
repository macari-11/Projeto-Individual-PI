
function AbrirOpcoes(){

    const menuOptions = menu

    if (menuOptions.style.display === "block") {
        menuOptions.style.display = "none";
    } else {
        menuOptions.style.display = "block";
    }
}


function SairDaSecao(){
    sessionStorage.clear();
    window.location = "../site/index.html"
}
