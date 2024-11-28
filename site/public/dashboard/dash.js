
const id = [];
const resultadosQuiz = [];

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
                
            }

            const barraQuizAcertos = document.getElementById('quizBarraAcertos');
            
            const idResposta = {
                labels: id,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: resultadosQuiz,
                    borderRadius: 10
                }]
            }
            const configQuiz = {
                type: 'bar',
                data: idResposta,
                options: {
                        responsive: true,
                        scales: {
                                y: {
                                beginAtZero: true
                        }
                    }
                }
            }

            new Chart(barraQuizAcertos, configQuiz);
            
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

            for (i = 0; i < json.length; i++) {
                personagem.push(json[i].Personagem)
                quantidade.push(json[i].quantidade)
            }

            const quizBarraPersonagens = document.getElementById('quizBarraPersonagens');
       
            const nomePersonagem = {
                labels: personagem,
                datasets: [{
                    label: "",
                    backgroundColor: '#FF7A03',
                    data: quantidade,
                    borderRadius: 10
                }]
            }
            const configPersonagem = {
                type: 'bar',
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