using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartMarket.DTOs;
using SmartMarket.Model;
using System.Text.RegularExpressions;

namespace SmartMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DescricaoUnidadeController : ControllerBase
    {
        private readonly SmartmarketdbContext _context;

        public DescricaoUnidadeController(SmartmarketdbContext context)
        {
            _context = context;
        }

        // GET: api/<DescricaoUnidadeController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DescricaoUnidade>>> GetDescricaoUnidades()
        {
            return await _context.DescricaoUnidades.ToListAsync();
        }

        // GET api/<DescricaoUnidadeController>
        [HttpGet("{id}")]
        public async Task<ActionResult<DescricaoUnidade>> GetDescricaoUnidadeById(int id)
        {
            //trazer descricao igual ao do id passado
            var descricaoUnidade = await _context.DescricaoUnidades.FindAsync(id);

            if (descricaoUnidade == null)
            {
                return NotFound();
            }

            //retorna descricao do id
            return descricaoUnidade;
        }

        //// POST api/<DEscricaoController>
        [HttpPost]
        public async Task<ActionResult<DescricaoUnidade>> CreateDescricaoUnidade(DescricaoUnidadeDto descricaoUnidade)
        {
            DescricaoUnidade descricaoUnidade1 = new DescricaoUnidade();
            descricaoUnidade1 = descricaoUnidade.DtoToDescricaoUnidadeModel();
            //adicionar marca passada por argumento
            _context.DescricaoUnidades.Add(descricaoUnidade1);

            //guardar marca
            await _context.SaveChangesAsync();

            return Ok(); //CreatedAtRoute(nameof(GetMarcaById), new { id = marca.IdMarca }, marca);
        }

        // PUT api/<MarcaController>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDescricaoUnidade(int id, DescricaoUnidadeDto descricaoUnidade)
        {
            if (id != descricaoUnidade.IdDescricaoUnidade)
            {
                return BadRequest();
            }

            DescricaoUnidade descricaoUnidadeModel = descricaoUnidade.DtoToDescricaoUnidadeModel();

            _context.Entry(descricaoUnidadeModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DescricaoUnidadeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // DELETE api/<MarcaController>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDescricaoUnidade(int id)
        {
            var family = await _context.DescricaoUnidades.FindAsync(id);

            if (family == null)
            {
                return NotFound();
            }

            _context.DescricaoUnidades.Remove(family);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        private bool DescricaoUnidadeExists(int id)
        {
            return _context.DescricaoUnidades.Any(m => m.IdDescricaoUnidade == id);
        }
    }
}
