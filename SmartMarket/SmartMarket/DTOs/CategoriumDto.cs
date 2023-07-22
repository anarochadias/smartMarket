using SmartMarket.Model;
using System.Text.RegularExpressions;

namespace SmartMarket.DTOs
{
    public class CategoriumDto
    {
        public int IdCategorium { get; set; }
        public string Descricao { get; set; } = null!;


        public Categorium DtoToCategorium()
        {
            Categorium categorium = new Categorium
            {
                IdCategoria = this.IdCategorium,
                Descricao = this.Descricao
            };
            return categorium;
        }
        public CategoriumDto ProductModelToDto(Categorium categorium)
        {
            CategoriumDto dto = new CategoriumDto
            {
                IdCategorium = this.IdCategorium,
                Descricao = this.Descricao
            };
            return dto;
        }
    }
}
