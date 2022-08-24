using server.Models;

namespace server.Services.AuthService
{
    public interface IAuthService
    {
        string CreateToken(User user);
        string? Authenticate(AuthUser authUser);
    }
}
