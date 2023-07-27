using SmartMarket.Model;

namespace SmartMarket.DTOs
{
    public class DescricaoUnidadeDto
    {
        public int IdDescricaoUnidade { get; set; }
        public string Descricao { get; set; } = null!;

        public DescricaoUnidade DtoToDescricaoUnidadeModel()
        {
            DescricaoUnidade descricaoUnidade = new DescricaoUnidade()
            {
                IdDescricaoUnidade = this.IdDescricaoUnidade,
                Descricao = this.Descricao
            };
            return descricaoUnidade;
        }

        public DescricaoUnidadeDto DescricaoUnidadeModelToDto(DescricaoUnidade descricaoUnidade)
        {
            DescricaoUnidadeDto dto = new DescricaoUnidadeDto()
            {
                IdDescricaoUnidade = descricaoUnidade.IdDescricaoUnidade,
                Descricao = descricaoUnidade.Descricao
            };
            return dto;
        }

    }
}
