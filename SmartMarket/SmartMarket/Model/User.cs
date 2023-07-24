using System;
using System.Collections.Generic;

namespace SmartMarket.Model;

public partial class User
{
    public int IdUser { get; set; }

    public string PrimeiroNome { get; set; } = null!;

    public string Apelido { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Morada { get; set; } = null!;

    public string CodigoPostal { get; set; } = null!;

    public int IdConcelho { get; set; }

    public DateTime DataNascimento { get; set; }

    public string Telefone { get; set; } = null!;

    public bool Subscricao { get; set; }

    public virtual Localizacao IdConcelhoNavigation { get; set; } = null!;

    public virtual ICollection<ListaCompra> ListaCompras { get; set; } = new List<ListaCompra>();

    public virtual Login? Login { get; set; }

    public virtual ICollection<Produto> IdProdutos { get; set; } = new List<Produto>();
}
