using System;
using System.Collections.Generic;

namespace SmartMarket.Model;

public partial class GetProdutoPorOrdemAlfabeticaAz
{
    public string NomeProduto { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public string Marca { get; set; } = null!;

    public decimal Un { get; set; }

    public string UnidadeDes { get; set; } = null!;

    public bool IsVegetarian { get; set; }

    public bool IsVegan { get; set; }

    public bool IsGlutenFree { get; set; }
}
