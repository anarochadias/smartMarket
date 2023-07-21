using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class ListaCompra
{
    public int IdListaCompras { get; set; }

    public int IdUser { get; set; }

    public DateTime DataHora { get; set; }

    public string? Descricao { get; set; }

    public virtual User IdUserNavigation { get; set; } = null!;

    public virtual ICollection<LinhaListaCompra> LinhaListaCompras { get; set; } = new List<LinhaListaCompra>();
}
