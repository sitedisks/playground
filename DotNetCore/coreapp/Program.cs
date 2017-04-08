using System;
using ClassLibrary;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {

            MyClass myC = new MyClass();
            PrintOut(myC);
            var str = myC.GetStr();
            Console.WriteLine(str);
            Console.WriteLine("Hello World!");
        }

        private static void PrintOut(MyClass myC)
        {
            myC.PrintOut();
        }
    }
}
