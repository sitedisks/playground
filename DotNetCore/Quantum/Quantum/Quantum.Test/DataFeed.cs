using Quantum.API.Models;
using System.Collections.Generic;

namespace Quantum.Test
{
    public class DataFeed
    {
        public IEnumerable<Class> GetFakeClasses()
        {
            return new List<Class> {
                new Class { Id = 1, ClassName = "Class1", Location = "Here", Teacher = "T1" },
                new Class { Id = 2, ClassName = "Class2", Location = "Here", Teacher = "T2" }
            };
        }

        public IEnumerable<Student> GetFakeStudents()
        {
            return new List<Student>
            {
                new Student { Id= 1, FName="Stu1", LName="Alpha1", Age=21, GPA=3.1, ClassId=1 },
                new Student { Id= 2, FName="Stu2", LName="Alpha2", Age=22, GPA=3.2, ClassId=1 },
                new Student { Id= 3, FName="Stu3", LName="Alpha3",Age=23, GPA=3.3, ClassId=1 },
            };
        }
    }
}
