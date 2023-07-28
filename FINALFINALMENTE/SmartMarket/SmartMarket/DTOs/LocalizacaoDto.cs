using SmartMarket.Model;

namespace SmartMarket.DTOs
{
    public class LocalizacaoDto
    {
        public int IdConcelho { get; set; }

        public string Concelho { get; set; } = null!;

        public Localizacao DtoToLocalizacaoModel()
        {
            Localizacao localizacao = new Localizacao()
            {
                IdConcelho = this.IdConcelho,
                Concelho = this.Concelho
            };
            return localizacao;
        }

        public LocalizacaoDto LocalizacaoModelToDto(Localizacao localizacao)
        {
            LocalizacaoDto dto = new LocalizacaoDto()
            {
                IdConcelho = localizacao.IdConcelho,
                Concelho = localizacao.Concelho
            };
            return dto;
        }
    }
}
