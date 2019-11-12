using System;
using System.Linq;

namespace EFGetStarted
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            using (var db = new BloggingContext())
            {
                /* 
                db.Blogs.Add(new Blog { Url = "http://blogs.msdn.com/adonet002" });

                Console.WriteLine("Save new blog");

                db.ProductTier.Add(new ProductTier
                {
                    VisibleRange = 100,
                    InteractiveRange = 300,
                    Deleted = false
                });

                db.SaveChanges();

                Console.WriteLine("Save new ProductTier");
                */

                var pro = db.ProductTier.OrderBy(p=>p.ProductTierId);
                foreach(var b in pro){
                    Console.WriteLine("Range " + b.VisibleRange);
                }
            }
        }
    }
}
