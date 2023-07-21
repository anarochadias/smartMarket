using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class Produto
{
    public int IdProduto { get; set; }

    public string NomeProduto { get; set; } = null!;

    public string Descricao { get; set; } = null!;

    public int IdSubCategoria { get; set; }

    public int IdMarca { get; set; }

    public decimal Unidade { get; set; }

    public int IdDescricaoUnidade { get; set; }

    public bool IsVegetarian { get; set; }

    public bool IsVegan { get; set; }

    public bool IsGlutenFree { get; set; }

    public virtual DescricaoUnidade IdDescricaoUnidadeNavigation { get; set; } = null!;

    public virtual Marca IdMarcaNavigation { get; set; } = null!;

    public virtual SubCategorium IdSubCategoriaNavigation { get; set; } = null!;

    public virtual ICollection<LinhaListaCompra> LinhaListaCompras { get; set; } = new List<LinhaListaCompra>();

    public virtual ICollection<LojaProduto> LojaProdutos { get; set; } = new List<LojaProduto>();

    public virtual ICollection<User> IdUsers { get; set; } = new List<User>();
}
