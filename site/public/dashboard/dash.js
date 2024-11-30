
const nome = []
const resultado = []

                              // GRÁFICO DO RESULTADO QUIZ
fetch("/coletaQuiz/coletaQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei os dados do banco")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                nome.push(json[i].Nome)
                resultado.push(json[i].Resultado)
            }

            const barraQuizFacil = document.getElementById('quizBarraFACIL');
            
                        //  GRAFICO FACIL 
            const idRespostaFACIL = {
                labels: nome,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultado,
                    borderColor: 'black', 
                    borderWidth: 2 
                }]
            }
            const configQuizFACIL = {
                type: 'bar',
                data: idRespostaFACIL,
                options: {
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo X
                                }
                            },
                            y: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo Y
                                }
                            }
                        }
                }
            }
              
            new Chart(barraQuizFacil, configQuizFACIL);
             
        });

    } else {

        console.log("Houve um erro ao armazenar o gráfico FACIL!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }
                         
}).catch(function (erro) {
    console.log(erro);
})


const nomeMedio = []
const resultadoMedio = []

                              // GRÁFICO DO RESULTADO QUIZ
fetch("/coletaQuiz/coletaQuizMedio", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei os dados do banco")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                nomeMedio.push(json[i].Nome)
                resultadoMedio.push(json[i].ResultadoMedio)
            }

            const barraQuizMedio = document.getElementById('quizBarraMEDIO');
            
                        //  GRAFICO FACIL 
            const idRespostaMedio = {
                labels: nomeMedio,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadoMedio,
                    borderColor: 'black', 
                    borderWidth: 2 
                }]
            }
            const configQuizMedio = {
                type: 'bar',
                data: idRespostaMedio,
                options: {
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo X
                                }
                            },
                            y: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo Y
                                }
                            }
                        }
                }
            }
              
            new Chart(barraQuizMedio, configQuizMedio);
             
        });

    } else {

        console.log("Houve um erro ao armazenar o gráfico MEDIO!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }
                         
}).catch(function (erro) {
    console.log(erro);
})

const nomeHard = []
const resultadoHard = []

                              // GRÁFICO DO RESULTADO QUIZ
fetch("/coletaQuiz/coletaQuizHard", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei os dados do banco")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            for (i = 0; i < json.length; i++) {
                nomeHard.push(json[i].Nome)
                resultadoHard.push(json[i].ResultadoHard)
            }

            const barraQuizHard = document.getElementById('quizBarraHARD');
            
                        //  GRAFICO FACIL 
            const idRespostaHard = {
                labels: nomeHard,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadoHard,
                    borderColor: 'black', 
                    borderWidth: 2 
                }]
            }
            const configQuizHard = {
                type: 'bar',
                data: idRespostaHard,
                options: {
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo X
                                }
                            },
                            y: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo Y
                                }
                            }
                        }
                }
            }
              
            new Chart(barraQuizHard, configQuizHard);
             
        });

    } else {

        console.log("Houve um erro ao armazenar o gráfico HARD!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }
                         
}).catch(function (erro) {
    console.log(erro);
})







                                                // GRÁFICO PERSONAGENS PREFERIDOS DO USUARIO 
const personagem = [];
const quantidade =[];
const coresPersonagens = {
    'Naruto Uzumaki': '#FF7A03', 
    'Sasuke Uchiha': '#2C1F3E',  
    'Sakura Haruno': '#FAC8E3', 
    'Kakashi Hatake': '#CBCBCB',
    'Minato Namikaze': '#FFC74F',
    'Itachi Uchiha': '#7E2227',
    'Shisui Uchiha': '#3F375A',
    'Madara Uchiha': '#580A16',
    'Shikamaru Nara': '#728B4A',
    'Gaara': '#F3DFC4'
};
                                    
fetch("/coletaPersonagem/coletaPersonagem", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei os dados do sensor")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);

            const cores= [];

            for (i = 0; i < json.length; i++) {

                var nome = json[i].Personagem;
                personagem.push(nome);
                quantidade.push(json[i].quantidade);
                cores.push(coresPersonagens[nome]);
            }

            const quizBarraPersonagens = document.getElementById('quizBarraPersonagens');
       
            const nomePersonagem = {
                labels: personagem,
                datasets: [{
                    label: "",
                    backgroundColor: cores,
                    data: quantidade,
                    borderColor: 'black', 
                    borderWidth: 2
                }]
            }
            const configPersonagem = {
                type: 'doughnut',
                data: nomePersonagem,
                options: {
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo X
                                }
                            },
                            y: {
                                grid: {
                                    display: false // Remove as linhas de grade no eixo Y
                                }
                            }
                        }
                }
            }

            new Chart(quizBarraPersonagens, configPersonagem);
        });


    } else {

        console.log("Houve um erro ao armazenar sua pontuação!");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})

var spanMediaQuiz = document.getElementById("spanQuizFacil")  
var mediaQuiz =[]

fetch("/coletaMediaQuiz/coletaMediaQuiz", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei a media do QuizFacil")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            
            spanMediaQuiz.innerHTML = json[0].quizFacil
            
        });

    } else {

        console.log("Houve um erro ao armazenar a KPI do quiz facil");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})


var mediaQuizMedio =[]
var spanMediaQuizMedio = document.getElementById("spanQuizMedio")

fetch("/coletaMediaQuiz/coletaMediaQuizMedio", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei a media do QuizFacil")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            
            spanMediaQuizMedio.innerHTML = json[0].quizMedio
            
        });

    } else {

        console.log("Houve um erro ao armazenar a KPI do quiz médio");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})


var mediaQuizHard =[]
var spanMediaQuizHard = document.getElementById("spanQuizHard")

fetch("/coletaMediaQuiz/coletaMediaQuizHard", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}).then(function (resposta) {
    console.log("Peguei a media do QuizFacil")

    if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
            console.log(json);
            
            spanMediaQuizHard.innerHTML = json[0].quizHard
            
        });

    } else {

        console.log("Houve um erro ao armazenar a KPI do quiz Hard");

        resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
        });
    }

}).catch(function (erro) {
    console.log(erro);
})