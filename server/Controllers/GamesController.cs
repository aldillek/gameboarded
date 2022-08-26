﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Database;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GamesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public GamesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Games
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames([FromQuery]string? skip)
        {
            
            var alreadyLoaded = 0;

            try
            {
                int.TryParse(skip, out alreadyLoaded);
            }
            catch
            {
                alreadyLoaded = 0;
            }
            

          if (_context.Games == null)
          {
              return NotFound();
          }
            return await _context.Games.Skip(alreadyLoaded).Take(30).ToListAsync();
        }

        // GET: api/Games/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
          if (_context.Games == null)
          {
              return NotFound();
          }
            var game = await _context.Games.FindAsync(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }

        // PUT: api/Games/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {
            if (id != game.Id)
            {
                return BadRequest();
            }

            _context.Entry(game).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
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

        // POST: api/Games
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {

          if (_context.Games == null)
          {
              return Problem("Entity set 'DatabaseContext.Games'  is null.");
          }
            
            var addedGame =  await _context.Games.AddAsync(game);
            

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = addedGame.Entity.Id }, addedGame.Entity);
        }

        // DELETE: api/Games/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGame(int id)
        {
            if (_context.Games == null)
            {
                return NotFound();
            }
            var game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            _context.Games.Remove(game);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GameExists(int id)
        {
            return (_context.Games?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
