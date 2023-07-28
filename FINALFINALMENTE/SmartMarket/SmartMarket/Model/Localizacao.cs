using System;
using System.Collections.Generic;

namespace SmartMarket.Model;

public partial class Localizacao
{
    public int IdConcelho { get; set; }

    public string Concelho { get; set; } = null!;

    public virtual ICollection<Loja> Lojas { get; set; } = new List<Loja>();

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
