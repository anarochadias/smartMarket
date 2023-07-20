using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class SubCategorium
{
    public int IdSubCategoria { get; set; }

    public int IdCategoria { get; set; }

    public string Descricao { get; set; } = null!;

    public virtual Categorium IdCategoriaNavigation { get; set; } = null!;

    public virtual ICollection<Produto> Produtos { get; set; } = new List<Produto>();
}
