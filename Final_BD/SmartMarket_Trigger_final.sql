create or alter trigger InsertHistoricoProdutoOnLojaProdutoUpdate
on LojaProduto
after update
as
	begin
		begin try
			Insert into HistoricoProduto(
				IdLoja,
				IdProduto,
				DataInicial,
				DataFinal,
				Preco)
			select
				i.IdLoja,
				i.IdProduto,
				d.[Data],
				i.[Data],
				d.Preco
			from inserted i
			inner join deleted d on i.IdLoja = d.IdLoja and i.IdProduto = d.IdProduto
		end try
		begin catch
			rollback
			declare @ErrorMessage nvarchar(4000) = error_message();
			declare @ErrorNumber int = error_number();
			declare @ErrorSeverity int = error_severity();
			raiserror('Error Number: %d, Severity: %d, Message: %s', @ErrorSeverity, 1, @ErrorNumber, @ErrorSeverity, @ErrorMessage);
		end catch
	end
go
