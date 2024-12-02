create database Naruto;
use naruto;

create table cadastro (
idCadastro int primary key auto_increment, 
nome varchar(45),
email varchar(45),
senha varchar(45),
preferido varchar(45)
);

create table resposta (
id int primary key auto_increment,
fkUsuario int,
resultado int,
resultadoMedio int,
resultadoHard int,
CONSTRAINT fkUSuarioid foreign key(fkUsuario) references cadastro (idCadastro)
);



select * from cadastro;
select * from resposta;

    
-- SELECTS PARA A DASHBOARD
select cadastro.nome as 'Nome', 
resposta.resultado as 'Resultado'
from cadastro
left join resposta
on idCadastro = fkUsuario
where resposta.resultado is not null
order by  resposta.resultado desc
limit 5;

select cadastro.nome as 'Nome', 
resposta.resultadoMedio as 'ResultadoMedio'
from cadastro
left join resposta
on idCadastro = fkUsuario
where resposta.resultadoMedio is not null
order by  resposta.resultadoMedio desc
limit 5;

select cadastro.nome as 'Nome', 
resposta.resultadohard as 'ResultadoHard'
from cadastro
left join resposta
on idCadastro = fkUsuario
where resposta.resultadoHard is not null
order by  resposta.resultadoHard desc
limit 5;


-- SELECTS PARA A MEDIA
SELECT ROUND(avg(resultado), 2) as quizFacil from resposta;
SELECT ROUND(avg(resultadoMedio), 2) as quizMedio from resposta;
SELECT ROUND(avg(resultadoHard), 2) as quizHard from resposta;


-- SELECT PARA OS PERSONAGENS
select preferido as Personagem,  -- select para pegar os personagens
COUNT(preferido) AS quantidade
from cadastro
group by preferido
order by quantidade desc;




