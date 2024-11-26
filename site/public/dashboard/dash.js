
const id = [];
const resultadosQuiz = [];


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

            const linhaQuizNaruto = document.getElementById('quizLinha');
            
            const idResposta = {
                labels: id,
                datasets: [{
                    label: "",
                    backgroundColor: '#B81476',
                    data: resultadosQuiz,
                    borderRadius: 20
                },
                ]

            }

            const configQuiz = {
                type: 'bar',
                data: idResposta,
                options:{
                    responsive: true, 
                    scales: {
                        y: {
                            beginAtZero: true 
                        }
                    }
                }
            }

            new Chart(linhaQuizNaruto, configQuiz);

        
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

