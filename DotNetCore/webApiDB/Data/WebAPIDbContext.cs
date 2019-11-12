using Microsoft.EntityFrameworkCore;
using webApiDB.Model;

namespace webApiDB.Data
{

    public class WebAPIDbContext : DbContext
    {

        public WebAPIDbContext(DbContextOptions<WebAPIDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Prodcut> Products { get; set; }
    }
}