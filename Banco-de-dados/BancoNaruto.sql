create database Naruto;
use naruto;


drop table naruto;
create table naruto (
idCadastro int primary key auto_increment, 
nome varchar(45),
email varchar(45),
senha varchar(45),
preferido varchar(45)
);

select * from naruto;
truncate table naruto;




create table respostasQuiz (
id int primary key auto_increment,
resultado int 
);

select * from respostasQuiz;
truncate table respostasQuiz;
