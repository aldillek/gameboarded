using Microsoft.IdentityModel.Tokens;
using server.Database;
using server.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text.Json;

namespace server.Services.AuthService
{
    public class AuthService: IAuthService
    {

        private readonly IConfiguration _configuration;
        private readonly DatabaseContext _database;

        public AuthService(IConfiguration configuration, DatabaseContext database)
        {
            _configuration = configuration;
            _database = database;
        }


        public string CreateToken(User user)
        {
            List<Claim> claims = new()
            {
                new Claim("userData", JsonSerializer.Serialize(new {user.Id, user.Email})),
                new Claim(ClaimTypes.Role, StringFromRole(user.Role))
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("JWT").Value));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: cred);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;

        }

        public string? Authenticate(AuthUser authUser)
        {
            var userExists = _database.Users.Where(dbUser => dbUser.Password == authUser.Password && dbUser.Email == authUser.Email).First();
            if (userExists == null)
            {
                return null;
            }

            string token = CreateToken(userExists);

            return token;

        }



        public static string StringFromRole(Roles role) =>
         role switch
         {
             Roles.User => "User",
             Roles.Moderator => "Moderator",
             Roles.Admin => "Admin",
             _ => "Invalid"
         };

    }


    

    
}
