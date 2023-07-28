-- lista de compras por loja

create or alter procedure GetListForStore
	@idListaCompras int
as
begin
	begin try
	create table Auxiliar (idLoja int, DescricaoLoja nvarchar(100), idProduto int, NomeProduto nvarchar(50),preco decimal (10, 3))
		declare @countProduto int = 0;
		declare @countLoja int = 0;
		declare @MAXProduto int;
		declare @MAXLoja int = (select count(IdLoja) from Loja);
		declare @DescLoja nvarchar(100);
		declare @nomeProduto nvarchar(50);
		declare @idLoja int;
		declare @idProduto int;
		declare @preco decimal(10, 3);

		set @MAXProduto = [dbo].TodosOsProdutosDaLista(@idListaCompras);

		while @countLoja < @MAXLoja
		begin
			set @idLoja = (select IdLoja
							from (
								select row_number() over (order by idLoja) as RowNum, idLoja
								from Loja) t2
							where RowNum = @countLoja + 1); 
			set @countProduto = 0;
			while @countProduto < @MAXProduto 
			begin
				set @DescLoja = (select descricao from Loja where idLoja = @idLoja);
				set @idProduto = (select idProduto
									from (
										select row_number() over (order by p.idProduto) as RowNum, p.IdProduto
										from Produto as p
										join LinhaListaCompras as ll on p.IdProduto = ll.IdProduto
										where ll.IdListaCompras = @idListaCompras) t3 
									where RowNum = @countProduto + 1);
				set @nomeProduto = (select nomeProduto from Produto where idProduto = @idProduto);
				set @preco = [dbo].ProdutoPorLoja(@idLoja, @idProduto);

				if (@preco is null)
				begin
					set @preco = 0
				end
				set @preco = @preco * (
					select Quantidade
					from LinhaListaCompras as ll
					where ll.IdListaCompras = @idListaCompras and ll.IdProduto = @idProduto);

				insert into Auxiliar(idLoja, DescricaoLoja, idProduto, NomeProduto , preco)
				values (@idLoja, @DescLoja, @idProduto, @nomeProduto, @preco)
				set @countProduto = @countProduto + 1
			end
		set @countLoja = @countLoja + 1
		end
		select a.idLoja, a.DescricaoLoja, a.idProduto, a.NomeProduto, a.preco
		from Auxiliar as a
		drop table Auxiliar
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go


-- preço total da lista de compras por cada loja

create or alter procedure ValorParaTodasAsLojas
	@idListaCompras int
as
begin
	begin try
		select lp.idLoja, l.Descricao, [dbo].GetCustoListaComprasPorLoja(lp.idLoja, @idListaCompras) as TotalPrecoCompras, 
		count(lp.IdProduto) as QuantidadeProdutosDaListaNaLoja, 
			(select count(idProduto)
			from LinhaListaCompras
			where IdListaCompras = @idListaCompras) as NumeroTotalDeProdutosLista
		from Produto as p 
		left join LojaProduto as lp on p.IdProduto = lp.IdProduto
		join LinhaListaCompras as ll on ll.IdProduto = p.IdProduto
		join Loja as l on l.IdLoja = lp.IdLoja
		where ll.IdListaCompras = @idListaCompras
		group by lp.IdLoja, l.Descricao
		order by QuantidadeProdutosDaListaNaLoja desc, TotalPrecoCompras asc
	end try
	begin catch
		declare @ErrorMessage nvarchar(4000) = error_message();
		declare @ErrorNumber int = error_number();
		declare @ErrorSeverity int = error_severity();
		raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
	end catch
end
go

