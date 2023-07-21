using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class DescricaoUnidade
{
    public int IdDescricaoUnidade { get; set; }

    public string Descricao { get; set; } = null!;

    public virtual ICollection<Produto> Produtos { get; set; } = new List<Produto>();
}
