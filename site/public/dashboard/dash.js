
const id = [];
const resultadosQuiz = [];
const resultadoQuizMedio = []
const resultadoQuizHard = []

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
                resultadosQuiz.push(json[i].resultado)
                id.push(json[i].id)
                resultadoQuizMedio.push(json[i].resultadoMedio)
                resultadoQuizHard.push(json[i].resultadoHard)
                
            }

            const barraQuizFacil = document.getElementById('quizBarraFACIL');
            const barraQuizMedio = document.getElementById('quizBarraMEDIO');
            const barraQuizHard = document.getElementById('quizBarraHARD');
            
                        //  GRAFICO HARD
            const idRespostaFACIL = {
                labels: id,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadosQuiz,
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
                                y: {
                                beginAtZero: true
                        }
                    }
                }
            }
                         //  GRAFICO MEDIO
            const idRespostaMEDIO = {
                labels: id,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadoQuizMedio,
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
                                y: {
                                beginAtZero: true
                        }
                    }
                }
            }
                        //  GRAFICO HARD
            const idRespostaHARD = {
                labels: id,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadoQuizMedio,
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
                                y: {
                                beginAtZero: true
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
                type: 'pie',
                data: nomePersonagem,
                options: {
                        responsive: true,
                        scales: {
                                y: {
                                beginAtZero: true
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