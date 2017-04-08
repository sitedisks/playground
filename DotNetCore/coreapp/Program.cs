using System;
using ClassLibrary;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
        
			MyClass myC=new MyClass();
			myC.PrintOut();
			var str = myC.GetStr();
			Console.WriteLine(str);
			Console.WriteLine("Hello World!");
        }
    }
}
