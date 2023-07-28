use master
go

if exists (select * from sys.databases where name = 'SmartMarket')
begin
	drop database SmartMarket;
end
go

create database SmartMarket;
go

use SmartMarket;
go

create table Localizacao(
	IdConcelho int not null identity(1,1),
	Concelho nvarchar(50) not null

	primary key (IdConcelho)
)	
go

create table [User](
	IdUser int not null identity(1,1),
	PrimeiroNome nvarchar(100) not null,
	Apelido nvarchar(100) not null,
	Email nvarchar(100) not null, 
	Morada nvarchar(max) not null,
	CodigoPostal char(8) not null,
	IdConcelho int not null,
	DataNascimento date not null,
	Telefone char(9) not null,
	Subscricao bit not null

	primary key (IdUser),
	foreign key (IdConcelho) references Localizacao(IdConcelho),
	unique (Email),
	check(Email like '%@%.%')
)
go

create table [Login](
	IdUser int not null,
	[Password] nvarchar(100) not null,
	Email nvarchar(100) not null

	primary key (IdUser),
	foreign key (IdUser) references [User](IdUser),
	check(len([Password]) >= 8),
	check(Email like '%@%.%')
)
go

create table ListaCompras(
	IdListaCompras int not null identity(1,1),
	IdUser int not null,
	DataHora datetime not null default getdate(),
	Descricao nvarchar(100)

	primary key (IdListaCompras),
	foreign key (IdUser) references [User](IdUser)
)
go

create table Loja(
	IdLoja int not null identity(1,1),
	Descricao nvarchar(100) not null,
	IdConcelho int not null,
	Morada nvarchar(max) not null,
	Latitude nvarchar(max) not null,
	Longitude nvarchar(max) not null
  
	primary key(IdLoja),
	foreign key(IdConcelho) references Localizacao(IdConcelho)
)
go

create table Categoria(
	IdCategoria int not null identity(1,1),
	Descricao nvarchar(50) not null

	primary Key(IdCategoria)
)
go

create table SubCategoria(
	IdSubCategoria int not null identity(1,1),
	IdCategoria int not null,
	Descricao nvarchar(60) not null

	primary key (IdSubCategoria),
	foreign Key(IdCategoria) references Categoria(IdCategoria)
)
go

create table Marca(
	IdMarca int not null identity(1,1),
	Descricao nvarchar(50) not null

	primary key(IdMarca)
)
go

create table DescricaoUnidade(
	IdDescricaoUnidade int not null identity(1,1),
	Descricao nvarchar(10) not null

	primary key(IdDescricaoUnidade)
)
go

create table Produto(
	IdProduto int not null identity(1,1),
	NomeProduto nvarchar(50) not null,
	Descricao nvarchar(100) not null,
	IdSubCategoria int not null,
	IdMarca int not null,
	Unidade decimal(10,3) not null,
	IdDescricaoUnidade int not null,
	IsVegetarian bit not null default 0,
	IsVegan bit not null default 0,
	IsGlutenFree bit not null default 0

	primary key(IdProduto),
	foreign key(IdSubCategoria) references SubCategoria(IdSubCategoria),
	foreign key(IdMarca) references Marca(IdMarca),
	foreign key(IdDescricaoUnidade) references DescricaoUnidade(IdDescricaoUnidade)
)
go

create table LinhaListaCompras(
	IdListaCompras int not null,
	IdProduto int not null,
	Quantidade decimal(10,3) not null

	primary key (IdListaCompras, IdProduto),
	foreign key (IdListaCompras) references ListaCompras(IdListaCompras),
	foreign key (IdProduto) references Produto(IdProduto)
)
go


create table LojaProduto(
	IdProduto int not null,
	IdLoja int not null,
	[Data] datetime not null, 
    Preco decimal(10,2) not null
	
	primary key(IdProduto, IdLoja),
	foreign key(IdProduto) references Produto(IdProduto),
	foreign key(IdLoja) references Loja(IdLoja),
	check(Preco > 0)
)
go

create table HistoricoProduto(
	IdProduto int not null,
	IdLoja int not null,
	DataInicial datetime not null,
	DataFinal datetime not null,
	Preco decimal(10,2) not null

	primary key(IdProduto, IdLoja, DataFinal),
	foreign key(IdProduto, IdLoja) references LojaProduto(IdProduto, IdLoja),
	check(Preco > 0)
)
go

create table ListaFavoritos(
	IdUser int not null,
	IdProduto int not null

	primary key (IdUser, IdProduto),
	foreign key(IdUser) references [User](IdUser),
	Foreign Key(IdProduto) references Produto(IdProduto)
)
go