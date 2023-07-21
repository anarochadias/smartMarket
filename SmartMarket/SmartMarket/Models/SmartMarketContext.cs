using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SmartMarket.Models;

public partial class SmartMarketContext : DbContext
{
    public SmartMarketContext()
    {
    }

    public SmartMarketContext(DbContextOptions<SmartMarketContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Categorium> Categoria { get; set; }

    public virtual DbSet<DescricaoUnidade> DescricaoUnidades { get; set; }

    public virtual DbSet<GetProdutoPorCategorium> GetProdutoPorCategoria { get; set; }

    public virtual DbSet<GetProdutoPorLoja> GetProdutoPorLojas { get; set; }

    public virtual DbSet<GetProdutoPorMarca> GetProdutoPorMarcas { get; set; }

    public virtual DbSet<GetProdutoPorOrdemAlfabeticaAz> GetProdutoPorOrdemAlfabeticaAzs { get; set; }

    public virtual DbSet<GetProdutoPorOrdemAlfabeticaZa> GetProdutoPorOrdemAlfabeticaZas { get; set; }

    public virtual DbSet<GetProdutoPorSubCategorium> GetProdutoPorSubCategoria { get; set; }

    public virtual DbSet<HistoricoProduto> HistoricoProdutos { get; set; }

    public virtual DbSet<LinhaListaCompra> LinhaListaCompras { get; set; }

    public virtual DbSet<ListaCompra> ListaCompras { get; set; }

    public virtual DbSet<Localizacao> Localizacaos { get; set; }

    public virtual DbSet<Login> Logins { get; set; }

    public virtual DbSet<Loja> Lojas { get; set; }

    public virtual DbSet<LojaProduto> LojaProdutos { get; set; }

    public virtual DbSet<Marca> Marcas { get; set; }

    public virtual DbSet<Produto> Produtos { get; set; }

    public virtual DbSet<SubCategorium> SubCategoria { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("name=Miguel");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Categorium>(entity =>
        {
            entity.HasKey(e => e.IdCategoria).HasName("PK__Categori__A3C02A10C8D7E3FB");

            entity.Property(e => e.Descricao).HasMaxLength(50);
        });

        modelBuilder.Entity<DescricaoUnidade>(entity =>
        {
            entity.HasKey(e => e.IdDescricaoUnidade).HasName("PK__Descrica__8C9765B4CB0C2A5C");

            entity.ToTable("DescricaoUnidade");

            entity.Property(e => e.Descricao).HasMaxLength(10);
        });

        modelBuilder.Entity<GetProdutoPorCategorium>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("GetProdutoPorCategoria");

            entity.Property(e => e.Categoria).HasMaxLength(50);
            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.Unidade).HasColumnType("decimal(10, 3)");
        });

        modelBuilder.Entity<GetProdutoPorLoja>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("GetProdutoPorLoja");

            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.Loja).HasMaxLength(100);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.Unidade).HasColumnType("decimal(10, 3)");
        });

        modelBuilder.Entity<GetProdutoPorMarca>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("GetProdutoPorMarca");

            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.Marca).HasMaxLength(50);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.Unidade).HasColumnType("decimal(10, 3)");
        });

        modelBuilder.Entity<GetProdutoPorOrdemAlfabeticaAz>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("GetProdutoPorOrdemAlfabeticaAZ");

            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.Marca).HasMaxLength(50);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.Un).HasColumnType("decimal(10, 3)");
            entity.Property(e => e.UnidadeDes).HasMaxLength(10);
        });

        modelBuilder.Entity<GetProdutoPorOrdemAlfabeticaZa>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("GetProdutoPorOrdemAlfabeticaZA");

            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.Marca).HasMaxLength(50);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.Un).HasColumnType("decimal(10, 3)");
            entity.Property(e => e.UnidadeDes).HasMaxLength(10);
        });

        modelBuilder.Entity<GetProdutoPorSubCategorium>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("GetProdutoPorSubCategoria");

            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.DescricaoUnidade).HasMaxLength(10);
            entity.Property(e => e.Marca).HasMaxLength(50);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.SubCategoria).HasMaxLength(60);
            entity.Property(e => e.Unidade).HasColumnType("decimal(10, 3)");
        });

        modelBuilder.Entity<HistoricoProduto>(entity =>
        {
            entity.HasKey(e => new { e.IdProduto, e.IdLoja, e.DataFinal }).HasName("PK__Historic__85AC54B1CF7624D7");

            entity.ToTable("HistoricoProduto");

            entity.Property(e => e.DataFinal).HasColumnType("datetime");
            entity.Property(e => e.DataInicial).HasColumnType("datetime");
            entity.Property(e => e.Preco).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Id).WithMany(p => p.HistoricoProdutos)
                .HasForeignKey(d => new { d.IdProduto, d.IdLoja })
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__HistoricoProduto__160F4887");
        });

        modelBuilder.Entity<LinhaListaCompra>(entity =>
        {
            entity.HasKey(e => new { e.IdListaCompras, e.IdProduto }).HasName("PK__LinhaLis__413371230D500962");

            entity.Property(e => e.Quantidade).HasColumnType("decimal(10, 3)");

            entity.HasOne(d => d.IdListaComprasNavigation).WithMany(p => p.LinhaListaCompras)
                .HasForeignKey(d => d.IdListaCompras)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__LinhaList__IdLis__46E78A0C");

            entity.HasOne(d => d.IdProdutoNavigation).WithMany(p => p.LinhaListaCompras)
                .HasForeignKey(d => d.IdProduto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__LinhaList__IdPro__47DBAE45");
        });

        modelBuilder.Entity<ListaCompra>(entity =>
        {
            entity.HasKey(e => e.IdListaCompras).HasName("PK__ListaCom__63DBF2E1FAF709C6");

            entity.Property(e => e.DataHora)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Descricao).HasMaxLength(100);

            entity.HasOne(d => d.IdUserNavigation).WithMany(p => p.ListaCompras)
                .HasForeignKey(d => d.IdUser)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__ListaComp__IdUse__30F848ED");
        });

        modelBuilder.Entity<Localizacao>(entity =>
        {
            entity.HasKey(e => e.IdConcelho).HasName("PK__Localiza__376BBFE0C904F232");

            entity.ToTable("Localizacao");

            entity.Property(e => e.Concelho).HasMaxLength(50);
        });

        modelBuilder.Entity<Login>(entity =>
        {
            entity.HasKey(e => e.IdUser).HasName("PK__Login__B7C92638F04D5C6B");

            entity.ToTable("Login");

            entity.Property(e => e.IdUser).ValueGeneratedNever();
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Password).HasMaxLength(100);

            entity.HasOne(d => d.IdUserNavigation).WithOne(p => p.Login)
                .HasForeignKey<Login>(d => d.IdUser)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Login__IdUser__2B3F6F97");
        });

        modelBuilder.Entity<Loja>(entity =>
        {
            entity.HasKey(e => e.IdLoja).HasName("PK__Loja__38C45D6403F7744B");

            entity.ToTable("Loja");

            entity.Property(e => e.Descricao).HasMaxLength(100);

            entity.HasOne(d => d.IdConcelhoNavigation).WithMany(p => p.Lojas)
                .HasForeignKey(d => d.IdConcelho)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Loja__IdConcelho__33D4B598");
        });

        modelBuilder.Entity<LojaProduto>(entity =>
        {
            entity.HasKey(e => new { e.IdProduto, e.IdLoja }).HasName("PK__LojaProd__7D0479F510191B76");

            entity.ToTable("LojaProduto", tb => tb.HasTrigger("InsertHistoricoProdutoOnLojaProdutoUpdate"));

            entity.Property(e => e.Data).HasColumnType("datetime");
            entity.Property(e => e.Preco).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.IdLojaNavigation).WithMany(p => p.LojaProdutos)
                .HasForeignKey(d => d.IdLoja)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__LojaProdu__IdLoj__4BAC3F29");

            entity.HasOne(d => d.IdProdutoNavigation).WithMany(p => p.LojaProdutos)
                .HasForeignKey(d => d.IdProduto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__LojaProdu__IdPro__4AB81AF0");
        });

        modelBuilder.Entity<Marca>(entity =>
        {
            entity.HasKey(e => e.IdMarca).HasName("PK__Marca__4076A887BD82C39C");

            entity.ToTable("Marca");

            entity.Property(e => e.Descricao).HasMaxLength(50);
        });

        modelBuilder.Entity<Produto>(entity =>
        {
            entity.HasKey(e => e.IdProduto).HasName("PK__Produto__2E883C2352076DA7");

            entity.ToTable("Produto");

            entity.Property(e => e.Descricao).HasMaxLength(100);
            entity.Property(e => e.NomeProduto).HasMaxLength(50);
            entity.Property(e => e.Unidade).HasColumnType("decimal(10, 3)");

            entity.HasOne(d => d.IdDescricaoUnidadeNavigation).WithMany(p => p.Produtos)
                .HasForeignKey(d => d.IdDescricaoUnidade)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Produto__IdDescr__440B1D61");

            entity.HasOne(d => d.IdMarcaNavigation).WithMany(p => p.Produtos)
                .HasForeignKey(d => d.IdMarca)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Produto__IdMarca__4316F928");

            entity.HasOne(d => d.IdSubCategoriaNavigation).WithMany(p => p.Produtos)
                .HasForeignKey(d => d.IdSubCategoria)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Produto__IdSubCa__4222D4EF");
        });

        modelBuilder.Entity<SubCategorium>(entity =>
        {
            entity.HasKey(e => e.IdSubCategoria).HasName("PK__SubCateg__0A1EFFE501508A67");

            entity.Property(e => e.Descricao).HasMaxLength(60);

            entity.HasOne(d => d.IdCategoriaNavigation).WithMany(p => p.SubCategoria)
                .HasForeignKey(d => d.IdCategoria)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__SubCatego__IdCat__38996AB5");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.IdUser).HasName("PK__User__B7C9263814F83920");

            entity.ToTable("User");

            entity.HasIndex(e => e.Email, "UQ__User__A9D105344701ACE8").IsUnique();

            entity.Property(e => e.Apelido).HasMaxLength(100);
            entity.Property(e => e.CodigoPostal)
                .HasMaxLength(8)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.DataNascimento).HasColumnType("date");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.PrimeiroNome).HasMaxLength(100);
            entity.Property(e => e.Telefone)
                .HasMaxLength(9)
                .IsUnicode(false)
                .IsFixedLength();

            entity.HasOne(d => d.IdConcelhoNavigation).WithMany(p => p.Users)
                .HasForeignKey(d => d.IdConcelho)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__User__IdConcelho__276EDEB3");

            entity.HasMany(d => d.IdProdutos).WithMany(p => p.IdUsers)
                .UsingEntity<Dictionary<string, object>>(
                    "ListaFavorito",
                    r => r.HasOne<Produto>().WithMany()
                        .HasForeignKey("IdProduto")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__ListaFavo__IdPro__5441852A"),
                    l => l.HasOne<User>().WithMany()
                        .HasForeignKey("IdUser")
                        .OnDelete(DeleteBehavior.ClientSetNull)
                        .HasConstraintName("FK__ListaFavo__IdUse__534D60F1"),
                    j =>
                    {
                        j.HasKey("IdUser", "IdProduto").HasName("PK__ListaFav__9521A5FA6425CDF1");
                        j.ToTable("ListaFavoritos");
                    });
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
