using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class LinhaListaCompra
{
    public int IdListaCompras { get; set; }

    public int IdProduto { get; set; }

    public decimal Quantidade { get; set; }

    public virtual ListaCompra IdListaComprasNavigation { get; set; } = null!;

    public virtual Produto IdProdutoNavigation { get; set; } = null!;
}
