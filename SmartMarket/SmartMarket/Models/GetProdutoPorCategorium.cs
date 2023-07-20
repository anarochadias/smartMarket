using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class GetProdutoPorCategorium
{
    public string NomeProduto { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public decimal Unidade { get; set; }

    public bool IsVegetarian { get; set; }

    public bool IsVegan { get; set; }

    public bool IsGlutenFree { get; set; }

    public string Categoria { get; set; } = null!;
}
