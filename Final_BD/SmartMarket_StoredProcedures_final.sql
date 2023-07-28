-- stored procedures LOCALIZACAO

create or alter procedure InsertLocalizacao
	@concelho nvarchar(50)
as
begin
	begin try
		insert into Localizacao(
			Concelho)
		values(
			@concelho);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateLocalizacao
	@idConcelho int,
	@concelho nvarchar(50)
as
begin
	begin try
		update Localizacao
		set 
			Concelho = @concelho
		where
			IdConcelho = @idConcelho
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteLocalizacao
	@idConcelho int
as
begin
	begin try
		delete from Localizacao
		where
			IdConcelho = @idConcelho
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures USER

create or alter procedure InsertUser
	@primeiroNome nvarchar(100),
	@apelido nvarchar(100),
	@email nvarchar(100),
	@morada nvarchar(max),
	@codigoPostal char(8),
	@idConcelho int,
	@dataNascimento date,
	@telefone char(9),
	@subscricao bit
as 
begin
	begin try
		insert into [User](
			PrimeiroNome,
			Apelido,
			Email,
			Morada,
			CodigoPostal,
			IdConcelho,	
			DataNascimento,
			Telefone,
			Subscricao)
		values(
			@primeiroNome,
			@apelido,
			@email,
			@morada,
			@codigoPostal,
			@idConcelho,
			@dataNascimento,
			@telefone,
			@subscricao);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateUser
	@idUser int,
	@primeiroNome nvarchar(100),
	@apelido nvarchar(100),
	@email nvarchar(100),
	@morada nvarchar(max),
	@codigoPostal char(8),
	@idConcelho int,
	@dataNascimento date,
	@telefone char(9),
	@subscricao bit
as
begin
	begin try
		update [User]
		set 
			PrimeiroNome = @primeiroNome,
			Apelido = @apelido,
			Email = @email,
			Morada = @morada,
			CodigoPostal = @codigoPostal,
			IdConcelho = @idConcelho,
			DataNascimento = @dataNascimento,
			Telefone = @telefone,
			Subscricao = @subscricao
		where
			IdUser = @idUser
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteUser
	@idUser int
as
begin
	begin try
		delete from [User]
		where
			IdUser = @idUser
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures LOGIN

create or alter procedure InsertLogin
	@idUser int,
	@password nvarchar(100),
	@email nvarchar(100)
as
begin
	begin try
		insert into [Login](
			IdUser,
			[Password],
			Email)
		values(
			@idUser,
			@password,
			@email);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateLogin
	@idUser int,
	@password nvarchar(100),
	@email nvarchar(100)
as
begin
	begin try
		update [Login]
		set
			[Password] = @password,
			Email = @email
		where
			IdUser = @idUser
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteLogin
	@idUser int
as
begin
	begin try
		delete from [Login]
		where
			IdUser = @idUser
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures LISTACOMPRAS

create or alter procedure InsertListaCompras
	@idUser int,
	@descricao nvarchar(100)
as
begin
	begin try
		insert into ListaCompras(
			IdUser,
			DataHora,
			Descricao)
		values(
			@idUser,
			getdate(),
			@descricao);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateListaCompras
	@idListaCompras int,
	@idUser int,
	@descricao nvarchar(100)
as
begin
	begin try
		update ListaCompras
		set 
			IdUser = @idUser,
			DataHora = getdate(),
			Descricao = @descricao
		where
			IdListaCompras = @idListaCompras
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteListaCompras
	@idListaCompras int
as
begin
	begin try
		delete from ListaCompras
		where 
			IdListaCompras = @idListaCompras
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures LOJA

create or alter procedure InsertLoja
	@descricao nvarchar(100),
	@idConcelho int,
	@morada nvarchar(max),
	@latitude nvarchar(max),
	@longitude nvarchar(max)
as
begin
	begin try
		insert into Loja(
			Descricao,
			IdConcelho,
			Morada,
			Latitude,
			Longitude)
		values(
			@descricao,
			@idConcelho,
			@morada,
			@latitude,
			@longitude);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateLoja
	@idLoja int,
	@descricao nvarchar(100),
	@idConcelho int,
	@morada nvarchar(max),
	@latitude nvarchar(max),
	@longitude nvarchar(max)
as
begin
	begin try
		update Loja
		set
			Descricao = @descricao,
			IdConcelho = @idConcelho,
			Morada = @morada,
			Latitude = @latitude,
			Longitude = @longitude
		where
			Idloja = @idLoja
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteLoja
	@idLoja int
as
begin
	begin try
		delete from Loja
		where
			IdLoja = @idLoja
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures CATEGORIA

create or alter procedure InsertCategoria
	@descricao nvarchar(50)
as
begin
	begin try
		insert into Categoria(
			Descricao)
		values(
			@descricao);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateCategoria
	@idCategoria int, 
	@descricao nvarchar(50)
as
begin
	begin try
		update Categoria
		set
			Descricao = @descricao
		where
			IdCategoria = @idCategoria;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteCategoria
	@idCategoria int
as
begin
	begin try
		delete from Categoria
		where
			IdCategoria = @idCategoria;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures SUBCATEGORIA

create or alter procedure InsertSubCategoria
	@idCategoria int,
	@descricao nvarchar(60)
as 
begin
	begin try
		insert into SubCategoria(
			IdCategoria,
			Descricao)
		values(
			@idCategoria,
			@descricao)
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateSubCategoria
	@idSubCategoria int,
	@idCategoria int,
	@descricao nvarchar(60)
as 
begin
	begin try
		update SubCategoria
		set
			IdCategoria = @idCategoria,
			Descricao = @descricao
		where
			IdSubCategoria = @idSubCategoria
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteSubCategoria
	@idSubCategoria int
as 
begin
	begin try
		delete from SubCategoria 
		where
			IdSubCategoria = @idSubCategoria;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures MARCA

create or alter procedure InsertMarca
	@descricao nvarchar(50)
as
begin
	begin try
		insert into Marca(
			Descricao)
		values(
			@descricao);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateMarca
	@idMarca int, 
	@descricao nvarchar(50)
as
begin
	begin try
		update Marca
		set
			Descricao = @descricao
		where
			IdMarca = @idMarca;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteMarca
	@idMarca int
as
begin
	begin try
		delete from Marca
		where
			IdMarca = @idMarca;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures DESCRICAOUNIDADE

create or alter procedure InsertDescricaoUnidade
	@descricao nvarchar(10) 
as
begin
	begin try
		insert into DescricaoUnidade(
			Descricao)
		values(
			@descricao);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateDescricaoUnidade
	@idDescricaoUnidade int,
	@descricao nvarchar(10) 
as
begin
	begin try
		update DescricaoUnidade
		set
			Descricao = @descricao
		where
			IdDescricaoUnidade = @idDescricaoUnidade
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteDescricaoUnidade
	@idDescricaoUnidade int,
	@descricao nvarchar(10) 
as
begin
	begin try
		delete from DescricaoUnidade
		where
			IdDescricaoUnidade = @idDescricaoUnidade
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures PRODUTO

create or alter procedure InsertProduto
	@nomeProduto nvarchar(50),
	@descricao nvarchar(100),
	@idSubCategoria int,
	@idMarca int ,
	@unidade decimal(10,3),
	@idDescricaoUnidade int,
	@isVegetarian bit,
	@isVegan bit,
	@isGlutenFree bit
as
begin
	begin try
		insert into	Produto(
			NomeProduto,
			Descricao,
			IdSubCategoria,
			IdMarca,
			Unidade,
			IdDescricaoUnidade,
			IsVegetarian,
			IsVegan,
			IsGlutenFree)
		values(
			@nomeProduto,
			@descricao,
			@idSubCategoria,
			@idMarca,
			@unidade,
			@idDescricaoUnidade,
			@isVegetarian,
			@isVegan,
			@isGlutenFree);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateProduto
	@idProduto int,
	@nomeProduto nvarchar(50),
	@descricao nvarchar(100),
	@idSubCategoria int,
	@idMarca int ,
	@unidade decimal(10,3),
	@idDescricaoUnidade int,
	@isVegetarian bit,
	@isVegan bit,
	@isGlutenFree bit
as
begin
	begin try
		update Produto
		set
			NomeProduto = @nomeProduto,
			Descricao = @descricao,
			IdSubCategoria = @idSubCategoria,
			IdMarca = @idMarca,
			Unidade = @unidade,
			IdDescricaoUnidade = @idDescricaoUnidade,
			IsVegetarian = @isVegetarian,
			IsVegan = @isVegan,
			IsGlutenFree = @isGlutenFree
		where
			IdProduto = @idProduto;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteProduto
	@idProduto int
as
begin
	begin try
		delete from Produto
		where
			IdProduto = @idProduto;
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures LINHALISTACOMPRAS

create or alter procedure InsertLinhaListaCompras
	@idListaCompras int,
	@idProduto int,
	@quantidade decimal(10,3)
as
begin
	begin try
		insert into LinhaListaCompras(
			IdListaCompras,
			IdProduto,
			Quantidade)
		values(
			@idListaCompras,
			@idProduto,
			@quantidade);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateLinhaListaCompras
	@idListaCompras int,
	@idProduto int,
	@quantidade decimal(10,3)
as
begin
	begin try
		update LinhaListaCompras
		set
			Quantidade = @quantidade
		where
			IdListaCompras = @idListaCompras and
			IdProduto = @idProduto
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteLinhaListaCompras
	@idListaCompras int,
	@idProduto int
as
begin
	begin try
		delete from LinhaListaCompras
		where
			IdListaCompras = @idListaCompras and
			IdProduto = @idProduto
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures LOJAPRODUTO

create or alter procedure InsertLojaProduto
	@idProduto int,
	@idLoja int,
	@preco decimal(10,2) 
as
begin
	begin try
		insert into LojaProduto(
			IdProduto,
			IdLoja,
			[Data],
			Preco)
		values(
			@idProduto,
			@idLoja,
			getdate(),
			@preco);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateLojaProduto
	@idProduto int,
	@idLoja int,
	@preco decimal(10,2) 
as
begin
	begin try
		update LojaProduto
		set
			[Data] = getdate(),
			Preco = @preco
		where
			IdProduto = @idProduto and
			IdLoja = @idLoja
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteLojaProduto
	@idProduto int,
	@idLoja int
as
begin
	begin try
		delete from LojaProduto
		where
			IdProduto = @idProduto and
			IdLoja = @idLoja
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures HISTORICOPRODUTO

create or alter procedure InsertHistoricoProduto
	@idProduto int,
	@idLoja int,
	@dataInicial date,
	@dataFinal date,
	@preco decimal(10,2) 
as
begin
	begin try
		insert into HistoricoProduto(
			IdProduto,
			IdLoja,
			DataInicial,
			DataFinal,
			Preco)
		values(
			@idProduto,
			@idLoja,
			@dataInicial,
			@dataFinal,
			@preco);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure UpdateHistoricoProduto
	@idProduto int,
	@idLoja int,
	@dataInicial date,
	@dataFinal date,
	@preco decimal(10,2) 
as
begin
	begin try
		update HistoricoProduto
		set
			DataInicial = @dataInicial,
			Preco = @preco
		where
			IdProduto = @idProduto and
			IdLoja = @idLoja and
			DataFinal = @dataFinal
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteHistoricoProduto
	@idProduto int,
	@idLoja int,
	@dataFinal date 
as
begin
	begin try
		delete from HistoricoProduto
		where
			IdProduto = @idProduto and
			IdLoja = @idLoja and
			DataFinal = @dataFinal
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

-- stored procedures LISTAFAVORITOS

create or alter procedure InsertListaFavoritos
	@idUser int,
	@idProduto int
as 
begin
	begin try
		insert into ListaFavoritos(
			IdUser,
			IdProduto)
		values(
			@idUser,
			@idProduto);
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

create or alter procedure DeleteListaFavoritos
	@idUser int,
	@idProduto int
as 
begin
	begin try
		delete from ListaFavoritos 
		where
			IdUser = @idUser and
			IdProduto = @idProduto
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go