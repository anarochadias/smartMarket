using System;
using System.Collections.Generic;

namespace SmartMarket.Models;

public partial class Login
{
    public int IdUser { get; set; }

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual User IdUserNavigation { get; set; } = null!;
}
