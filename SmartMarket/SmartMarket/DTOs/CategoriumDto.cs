using SmartMarket.Model;
using System.Text.RegularExpressions;

namespace SmartMarket.DTOs
{
    public class CategoriumDto
    {
        public int IdCategorium { get; set; }
        public string Descricao { get; set; } = null!;


        public Categorium DtoToCategoriumModel()
        {
            Categorium categorium = new Categorium()
            {
                IdCategoria = this.IdCategorium,
                Descricao = this.Descricao
            };
            return categorium;
        }
        public CategoriumDto CategoriumModelToDto(Categorium categorium)
        {
            CategoriumDto dto = new CategoriumDto()
            {
                IdCategorium = categorium.IdCategoria,
                Descricao = categorium.Descricao
            };
            return dto;
        }
    }
}
