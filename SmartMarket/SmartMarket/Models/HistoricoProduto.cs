using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class HistoricoProduto
{
    public int IdProduto { get; set; }

    public int IdLoja { get; set; }

    public DateTime DataInicial { get; set; }

    public DateTime DataFinal { get; set; }

    public decimal Preco { get; set; }

    public virtual LojaProduto Id { get; set; } = null!;
}
