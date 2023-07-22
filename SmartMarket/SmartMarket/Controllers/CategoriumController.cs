using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartMarket.DTOs;
using SmartMarket.Model;

namespace SmartMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriumController : ControllerBase
    {
        private readonly SmartmarketdbContext _context;

        public CategoriumController(SmartmarketdbContext context)
        {
            _context = context;
        }

        // GET: api/<CategoriumController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categorium>>> GetCategorium()
        {
            return await _context.Categoria.ToListAsync();
        }

        // GET api/<CategoriumController>
        [HttpGet("{id}")]
        public async Task<ActionResult<Categorium>> GetCategoriumById(int id)
        {
            //trazer categoria igual ao do id passado
            var categorium = await _context.Categoria.FindAsync(id);

            if (categorium == null)
            {
                return NotFound();
            }
            //retorna categoria do id
            return categorium;
        }
        //// POST api/<CategoriumController>
        [HttpPost]
        public async Task<ActionResult<Categorium>> CreateCategorium(CategoriumDto categorium)
        {
            Categorium categorium1 = new Categorium();
            categorium1 = categorium.DtoToCategorium();

            _context.Categoria.Add(categorium1);

            //guardar marca
            await _context.SaveChangesAsync();

            return Ok();
        }
        // PUT api/<CategoriumController>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategorium(int id, Categorium categorium)
        {
            if (id != categorium.IdCategoria)
            {
                return BadRequest();
            }

            _context.Entry(categorium).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriumExists(id))
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


        // DELETE api/<CategoriumController>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategorium(int id)
        {
            var family = await _context.Categoria.FindAsync(id);

            if (family == null)
            {
                return NotFound();
            }

            _context.Categoria.Remove(family);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        private bool CategoriumExists(int id)
        {
            return _context.Categoria.Any(m => m.IdCategoria == id);
        }
    }
}
