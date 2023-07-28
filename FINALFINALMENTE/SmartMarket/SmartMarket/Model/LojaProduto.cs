using System;
using System.Collections.Generic;

namespace SmartMarket.Model;

public partial class LojaProduto
{
    public int IdProduto { get; set; }

    public int IdLoja { get; set; }

    public DateTime Data { get; set; }

    public decimal Preco { get; set; }

    public virtual ICollection<HistoricoProduto> HistoricoProdutos { get; set; } = new List<HistoricoProduto>();

    public virtual Loja IdLojaNavigation { get; set; } = null!;

    public virtual Produto IdProdutoNavigation { get; set; } = null!;
}
