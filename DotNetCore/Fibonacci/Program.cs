using System;

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
        }
    }
}
