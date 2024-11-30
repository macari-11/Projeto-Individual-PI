
const nome = []
const resultado = []
const resultadoMedio = []
const resultadoHard= []

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
                resultadoMedio.push(json[i].ResultadoMedio)
                resultadoHard.push(json[i].ResultadoGrande)
            }

            const barraQuizFacil = document.getElementById('quizBarraFACIL');
            const barraQuizMedio = document.getElementById('quizBarraMEDIO');
            const barraQuizHard = document.getElementById('quizBarraHARD');
            
                        //  GRAFICO 
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
                         //  GRAFICO MEDIO
            const idRespostaMEDIO = {
                labels: nome,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadoMedio,
                    borderColor: 'black', 
                    borderWidth: 2
                }]
            }
            const configQuizMEDIO = {
                type: 'bar',
                data: idRespostaMEDIO,
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
                        //GRAFICO HARD
            const idRespostaHARD = {
                labels: nome,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadoHard,
                    borderColor: 'black', 
                    borderWidth: 2
                }]
            }
            const configQuizHARD = {
                type: 'bar',
                data: idRespostaHARD,
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
            new Chart(barraQuizMedio, configQuizMEDIO);
            new Chart(barraQuizHard, configQuizHARD);
            
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