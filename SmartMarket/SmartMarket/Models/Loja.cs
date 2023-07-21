using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class Loja
{
    public int IdLoja { get; set; }

    public string Descricao { get; set; } = null!;

    public int IdConcelho { get; set; }

    public string Morada { get; set; } = null!;

    public string Latitude { get; set; } = null!;

    public string Longitude { get; set; } = null!;

    public virtual Localizacao IdConcelhoNavigation { get; set; } = null!;

    public virtual ICollection<LojaProduto> LojaProdutos { get; set; } = new List<LojaProduto>();
}
