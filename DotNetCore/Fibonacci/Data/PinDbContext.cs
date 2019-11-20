using Microsoft.EntityFrameworkCore;
using Fibonacci.Model;

namespace Fibonacci.Data
{
    public class PinDbContext : DbContext
    {
        // public PinDbContext(DbContextOptions<PinDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseMySql("Server=166.62.27.59;Database=PinPiece;Uid=pinmanager;Pwd=EWyU)4,u}eW[;");
        }
    }

}