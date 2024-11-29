create database Naruto;
use naruto;
drop table naruto;

create table cadastro (
idCadastro int primary key auto_increment, 
nome varchar(45),
email varchar(45),
senha varchar(45),
preferido varchar(45)
);

select * from cadastro;
truncate table naruto;

select preferido as Personagem,  -- select para pegar os personagens
COUNT(preferido) AS quantidade
from cadastro
group by preferido
order by quantidade desc;

create table respostasQuiz (
id int primary key auto_increment,
resultado int,
resultadoMedio int,
resultadoHard int
);

select resultado, resultadoMedio, resultadoHard from respostasQuiz;

select * from respostasQuiz;
truncate table respostasQuiz;
drop table respostasQuiz;
