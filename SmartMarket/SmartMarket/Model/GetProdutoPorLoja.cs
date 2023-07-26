using System;
using System.Collections.Generic;

namespace SmartMarket.Model;

public partial class GetProdutoPorLoja
{
    public int IdLoja { get; set; }

    public string Loja { get; set; } = null!;

    public string NomeProduto { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public decimal Unidade { get; set; }

    public bool IsVegetarian { get; set; }

    public bool IsVegan { get; set; }

    public bool IsGlutenFree { get; set; }
}
