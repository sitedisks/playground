using Microsoft.EntityFrameworkCore;
using Moq;
using Quantum.API.Data;
using Quantum.API.Models;
using Quantum.API.Services;
using System.Linq;
using Xunit;

namespace Quantum.Test
{
    public class StudentServiceTest
    {
        private readonly DataFeed data;
        private readonly Student testStudent;

        public StudentServiceTest() {
            data = new DataFeed();
            testStudent = new Student { Id = 1, StudentName = "Beta", Age = 20, GPA = 5.0 };
        }

        [Fact]
        public void ShouldReturnStudentFromClass1() {
            var context = CreateDbContext();
            var service = new StudentService(context.Object);

            var results = service.StudentsInClass(1);
            var count = results.Count();

            Assert.Equal(3, count);
        }

        [Fact]
        public void ShouldReturnStudent1() {
            var context = CreateDbContext();
            var service = new StudentService(context.Object);
            var result = service.GetStudent(1);
            Assert.Equal("Stu1", result.StudentName);
        }

        [Fact]
        public void ShouldAddNewStudent() {
            var context = CreateDbContext();
            var service = new StudentService(context.Object);
            var result = service.AddStudent(testStudent);

            Assert.Equal(1, result);
        }

        [Fact]
        public void ShouldRemoveStudent() {
            var context = CreateDbContext();
            var service = new StudentService(context.Object);
            service.DeleteStudent(1);
            var results = service.StudentsInClass(1);
            Assert.Equal(2, results.Count());
        }

        [Fact]
        public void ShouldUpdateStudent() {
            var context = CreateDbContext();
            var service = new StudentService(context.Object);
            var result = service.UpdateStudent(testStudent);
            Assert.Equal("Beta", result.StudentName);
        }

        private Mock<AppDbContext> CreateDbContext()
        {
            var students = data.GetFakeStudents().AsQueryable();

            var studentDbSet = new Mock<DbSet<Student>>();
            studentDbSet.As<IQueryable<Student>>().Setup(m => m.Provider).Returns(students.Provider);
            studentDbSet.As<IQueryable<Student>>().Setup(m => m.Expression).Returns(students.Expression);
            studentDbSet.As<IQueryable<Student>>().Setup(m => m.ElementType).Returns(students.ElementType);
            studentDbSet.As<IQueryable<Student>>().Setup(m => m.GetEnumerator()).Returns(students.GetEnumerator());

            var context = new Mock<AppDbContext>();
            context.Setup(c => c.Students).Returns(studentDbSet.Object);
            return context;
        }
    }
}
