using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class Marca
{
    public int IdMarca { get; set; }

    public string Descricao { get; set; } = null!;

    public virtual ICollection<Produto> Produtos { get; set; } = new List<Produto>();
}
