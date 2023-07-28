-- GetProdutoPorCategoria

create or alter view GetProdutoPorCategoria
as
select p.NomeProduto, p.Descricao, p.Unidade, p.IsVegetarian, p.IsVegan, p.IsGlutenFree, c.Descricao as Categoria
from Produto as p
join SubCategoria as sc on p.IdSubCategoria = sc.IdSubCategoria
join Categoria as c on sc.IdCategoria = c.IdCategoria;
go

-- GetProdutoPorSubCategoria

create or alter view GetProdutoPorSubCategoria
as
select p.NomeProduto, p.Descricao, p.Unidade, p.IsVegetarian, p.IsVegan, p.IsGlutenFree, sc.Descricao as SubCategoria, du.Descricao as DescricaoUnidade, m.Descricao as Marca
from Produto as p
join SubCategoria as sc on p.IdSubCategoria = sc.IdSubCategoria
join DescricaoUnidade as du on p.IdDescricaoUnidade = du.IdDescricaoUnidade
join Marca as m on p.IdMarca = m.IdMarca;
go

-- GetProdutoPorLoja

create or alter view GetProdutoPorLoja
as
	select lp.IdLoja, l.Descricao as Loja, p.NomeProduto, p.Descricao, p.Unidade, p.IsVegetarian, p.IsVegan, p.IsGlutenFree
		from Produto as p
		join LojaProduto as lp on p.IdProduto = lp.IdProduto
		join Loja as l on lp.IdLoja = l.IdLoja
	order by l.Descricao asc offset 0 rows
go

-- GetProdutoPorMarca

create or alter view GetProdutoPorMarca
as 
	Select p.NomeProduto, p.Descricao, p.Unidade, p.IsVegetarian, p.IsVegan, p.IsGlutenFree, m.Descricao as Marca
	from Produto as p join Marca as m on p.idMarca = m.idMarca
go

-- GetProdutoPorOrdemAlfabeticaAZ

create or alter view GetProdutoPorOrdemAlfabeticaAZ
as
	select p.NomeProduto, p.Descricao, m.Descricao as Marca, p.Unidade as Un, du.Descricao as UnidadeDes, p.IsVegetarian, p.IsVegan, p.IsGlutenFree
		from Produto as p
		join Marca as m on p.IdMarca = m.IdMarca
		join DescricaoUnidade as du on p.IdDescricaoUnidade = du.IdDescricaoUnidade
	order by p.NomeProduto asc offset 0 rows
go

-- GetProdutoPorOrdemAlfabeticaZA

create or alter view GetProdutoPorOrdemAlfabeticaZA
as
	select p.NomeProduto, p.Descricao, m.Descricao as Marca, p.Unidade as Un, du.Descricao as UnidadeDes, p.IsVegetarian, p.IsVegan, p.IsGlutenFree
		from Produto as p
		join Marca as m on p.IdMarca = m.IdMarca
		join DescricaoUnidade as du on p.IdDescricaoUnidade = du.IdDescricaoUnidade
	order by p.NomeProduto desc offset 0 rows
go
