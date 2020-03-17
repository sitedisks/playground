using Quantum.API.Models;
using System.Collections.Generic;

namespace Quantum.API.Interfaces
{
    public interface IStudentService
    {
        IEnumerable<Student> AllStudents();
        Student GetStudent(int id);
        int AddStudent(Student s);
        void DeleteStudent(int id);
        Student UpdateStudent(Student s);
    }
}
