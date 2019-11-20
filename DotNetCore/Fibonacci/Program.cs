using System;
using System.Linq;
using Fibonacci.Data;

namespace Fibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello Fibonacci");
            var fib = new FibonacciGenerator();
            foreach (var item in fib.Generate(15))
            {
                Console.WriteLine(item);
            }

            Console.WriteLine("EntityFramework ===");

            using (var _context = new PinDbContext())
            {
                var query = _context.Users.Where(u => u.Id == 1 && !u.Deleted);
                Console.WriteLine(query.FirstOrDefault().Alias);
            }
        }
    }
}
