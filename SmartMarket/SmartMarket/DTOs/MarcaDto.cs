using SmartMarket.Model;

namespace SmartMarket.DTOs
{
    public class MarcaDto
    {
        public int IdMarca { get; set; }
        public string Descricao { get; set; } = null!;

        public Marca DtoToMarcaModel()
        {
            Marca marca = new Marca()
            {
                IdMarca = this.IdMarca,
                Descricao = this.Descricao
            };
                return marca;
        }

        public MarcaDto MarcaModelToDto(Marca marca)
        {
            MarcaDto dto = new MarcaDto()
            {
                IdMarca = marca.IdMarca,
                Descricao = marca.Descricao
            };
            return dto;
        }

    }
}
