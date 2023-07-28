using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartMarket.DTOs;
using SmartMarket.Model;

namespace SmartMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcasController : ControllerBase
    {
        private readonly SmartmarketdbContext _context;

        public MarcasController(SmartmarketdbContext context)
        {
            _context = context;
        }

        // GET: api/<MarcasController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Marca>>> GetMarcas()
        {
            return await _context.Marcas.ToListAsync();
        }

        // GET api/<MarcasController>
        [HttpGet("{id}")]
        public async Task<ActionResult<Marca>> GetMarcaById(int id)
        {
            //trazer marca igual ao do id passado
            var marca = await _context.Marcas.FindAsync(id);

            if (marca == null)
            {
                return NotFound();
            }

            //retorna marca do id
            return marca;
        }

        //// POST api/<MarcaController>
        [HttpPost]
        public async Task<ActionResult<Marca>> CreateMarca(MarcaDto marca)
        {
            Marca marca1 = new Marca();
            marca1 = marca.DtoToMarcaModel();
            //adicionar marca passada por argumento
            _context.Marcas.Add(marca1);

            //guardar marca
            await _context.SaveChangesAsync();

            return Ok(); //CreatedAtRoute(nameof(GetMarcaById), new { id = marca.IdMarca }, marca);
        }

        // PUT api/<MarcaController>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMarca(int id, MarcaDto marca)
        {
            marca.IdMarca = id;

            if (id != marca.IdMarca)
            {
                return BadRequest();
            }

            Marca marcaModel = marca.DtoToMarcaModel();

            _context.Entry(marcaModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MarcaExists(id))
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
        public async Task<IActionResult> DeleteMarca(int id)
        {
            var family = await _context.Marcas.FindAsync(id);

            if (family == null)
            {
                return NotFound();
            }

            _context.Marcas.Remove(family);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        private bool MarcaExists(int id)
        {
            return _context.Marcas.Any(m => m.IdMarca == id);
        }
    }
}
