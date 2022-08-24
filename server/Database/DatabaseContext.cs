using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Database
{
    public class DatabaseContext: DbContext { 
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

       
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
  
}
