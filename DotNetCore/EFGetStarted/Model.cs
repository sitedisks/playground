using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EFGetStarted{
    
    public class BloggingContext: DbContext{
        protected override void OnConfiguring(DbContextOptionsBuilder options) {
            options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=EFGetStartedDB;Trusted_Connection=True;MultipleActiveResultSets=true");
            // options.UseSqlServer("Server=localhost;Database=EFGetStartedDB;Uid=root;Pwd=123456;");
            // options.UseSqlServer("Server=166.62.27.59;Database=PraDB;Uid=pinmanager;Pwd=EWyU)4,u}eW[;");
        }

        public DbSet<Blog> Blogs { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<ProductTier> ProductTier { get; set; }     
    }

    public class Blog{
        public int BlogId { get; set; }
        public string Url { get; set; }       
        public List<Post> Posts { get; } = new List<Post>();  
    }

    public class Post {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int ReadCount {get;set;}

        public int BlogId { get; set; }
        public Blog Blog { get; set; }
    }

    public class ProductTier{
        public int ProductTierId { get; set; }
        public int VisibleRange { get; set; }
        public int InteractiveRange { get; set; }
        public bool Deleted { get; set; }

    }

}