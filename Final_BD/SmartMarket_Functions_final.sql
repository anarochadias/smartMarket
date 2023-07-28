-- GetPrecoMaisBaixoPorProduto

create or alter function GetPrecoMaisBaixoPorProduto(@idProduto int)
returns decimal(10,2)
as
begin
	declare @precoMaisBaixo decimal(10,2);
	select @precoMaisBaixo = min(lp.Preco)
    from LojaProduto as lp
    where lp.IdProduto = @idProduto
	return @precoMaisBaixo;
end;
go


-- GetPrecoMaisAltoPorProduto
go
create or alter function GetPrecoMaisAltoPorProduto(@idProduto int)
returns decimal(10,2)
as
begin
	declare @precoMaisAlto decimal(10,2)
	select @precoMaisAlto = max(lp.Preco)
		from LojaProduto as lp
		where lp.IdProduto = @idProduto
	return @precoMaisAlto;
end;
go

go
-- conta os produtos que uma loja tem
create or alter function LojaTemTodosProdutos(
	@idLoja int,
	@idListaCompras int)
returns int
as 
begin
	return(
		select count(ll.IdProduto)
		from LinhaListaCompras as ll
		left join LojaProduto as l on ll.IdProduto = l.IdProduto
		where l.IdLoja = @idLoja and ll.IdListaCompras = @idListaCompras and l.Preco is not null)
end
go


go
-- conta os produtos de 1 lista de compras
create or alter function TodosOsProdutosDaLista(
	@idListaCompras int)
returns int
as
begin
	return(
		select count(l.IdProduto) 
		from LinhaListaCompras as l
		where l.IdListaCompras = @idListaCompras)
end
go


go
-- preço de 1 produto numa loja especifica
create or alter function ProdutoPorLoja(
	@idLoja int,
	@idProduto int)
returns decimal(10,3)
as 
begin
	return(
		select lp.Preco
		from Produto as p
		left join LojaProduto lp on p.IdProduto = lp.IdProduto
		left join Loja l on lp.IdLoja = l.IdLoja
		where p.IdProduto = @idProduto and lp.IdLoja = @idLoja)
end
go



-- GetCustoListaComprasPorLoja
go
create or alter function GetCustoListaComprasPorLoja(
	@idLoja int,
	@idListaCompras int)
returns decimal(10, 3)
as
begin 
	return(
		select sum (l.Preco)
		from LojaProduto as l
		where l.IdLoja = @idLoja and l.IdProduto in(
			select l.IdProduto
			from LinhaListaCompras as l
			where l.IdListaCompras = @idListaCompras))
end;
go
