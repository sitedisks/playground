using Microsoft.EntityFrameworkCore;
using Quantum.API.Models;

namespace Quantum.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public AppDbContext() { }


        public virtual DbSet<Class> Classes { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new Student.Configuration());
            modelBuilder.ApplyConfiguration(new Class.Configuration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
