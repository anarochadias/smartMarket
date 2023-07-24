using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartMarket.DTOs;
using SmartMarket.Model;

namespace SmartMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocalizacoesController : ControllerBase
    {
        private readonly SmartmarketdbContext _context;
        public LocalizacoesController(SmartmarketdbContext context)
        {
            _context = context;
        }

        // GET: api/<LocalizacoesController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Localizacao>>> GetLocalizacoes()
        {
            return await _context.Localizacaos.ToListAsync();
        }

        // GET api/<LocalizacoesController>
        [HttpGet("{id}")]
        public async Task<ActionResult<Localizacao>> GetLocalizacaoById(int id)
        {
            //trazer localizacao igual à do id passado
            var localizacao = await _context.Localizacaos.FindAsync(id);

            if (localizacao == null)
            {
                return NotFound();
            }

            //retorna localizacao do id
            return localizacao;
        }

        //// POST api/<LocalizacaoController>
        [HttpPost]
        public async Task<ActionResult<Localizacao>> CreateLocalizacao(LocalizacaoDto localizacao)
        {
            Localizacao localizacao1 = new Localizacao();
            localizacao1 = localizacao.DtoToLocalizacaoModel();
            //adicionar localizacao passada por argumento
            _context.Localizacaos.Add(localizacao1);

            //guardar localizacao
            await _context.SaveChangesAsync();

            return Ok(); //CreatedAtRoute(nameof(GetLocalizacaoById), new { id = localizacao.IdConcelho }, localizacao);
        }

        // PUT api/<LocalizacaoController>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLocalizacao(int id, LocalizacaoDto localizacao)
        {
            if (id != localizacao.IdConcelho)
            {
                return BadRequest();
            }

            //passar de dto pa model
            Localizacao localizacaoModel = localizacao.DtoToLocalizacaoModel();

            _context.Entry(localizacaoModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LocalizacaoExists(id))
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

        // DELETE api/<LocalizacaoController>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLocalizacao(int id)
        {
            var family = await _context.Localizacaos.FindAsync(id);

            if (family == null)
            {
                return NotFound();
            }

            _context.Localizacaos.Remove(family);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LocalizacaoExists(int id)
        {
            return _context.Localizacaos.Any(m => m.IdConcelho == id);
        }
    }
}
