using server.Models;

namespace server.Services
{
    public interface IUserService
    {
        User GetUserFromToken();
    }
}
