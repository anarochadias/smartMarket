using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class Categorium
{
    public int IdCategoria { get; set; }

    public string Descricao { get; set; } = null!;

    public virtual ICollection<SubCategorium> SubCategoria { get; set; } = new List<SubCategorium>();
}
