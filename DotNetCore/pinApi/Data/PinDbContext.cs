using Microsoft.EntityFrameworkCore;
using pinApi.Model;

namespace pinApi.Data{
    public class PinDbContext: DbContext{

        public PinDbContext(DbContextOptions<PinDbContext> options): base(options){}
        public DbSet<User> Users { get; set; }
    }

}
