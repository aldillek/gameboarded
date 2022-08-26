using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using server.Database;
using server.Models;
using server.Services.AuthService;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }


        [HttpPost]
        public ActionResult Authenticate([FromBody] AuthUser authUser)
        {
            var token = _authService.Authenticate(authUser);

            return Ok(token);
        }

        [HttpGet("me"), Authorize]
        public ActionResult GetInfoAboutMe()
        {

            var data = User.Claims.Where(claimType => claimType.Type == ClaimTypes.Role).First().Value;
            //if(informationsAboutUser == null)
            //{
            //    return NotFound();
            //}

            return Ok(data);
        }


        


    }
}
