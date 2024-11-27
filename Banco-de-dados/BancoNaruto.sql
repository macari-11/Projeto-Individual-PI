create database Naruto;

use naruto;

create table naruto (
idCadastro int primary key auto_increment, 
nome varchar(45),
email varchar(45),
senha varchar(45)
);

select * from naruto;

truncate table naruto;

create table respostasQuiz (
id int primary key auto_increment,
resultado int 
);


insert into respostasQuiz (resultado) values
(8),
(9),
(10),
(7),
(6),
(8),
(9),
(6),
(10);

truncate table respostasQuiz;

select * from respostasQuiz 
order by resultado desc 
limit 5;

create table pontuacao (
idPontuacao int primary key auto_increment,
pontuacao int);


select * from respostasQuiz;