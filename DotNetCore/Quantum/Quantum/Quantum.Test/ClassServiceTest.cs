using Microsoft.EntityFrameworkCore;
using Moq;
using Quantum.API.Data;
using Quantum.API.Models;
using Quantum.API.Services;
using System.Linq;
using Xunit;

namespace Quantum.Test
{
    public class ClassServiceTest
    {
        private readonly DataFeed data;
        private readonly Class testClass;
        public ClassServiceTest()
        {
            data = new DataFeed();
            testClass = new Class { Id = 1, ClassName = "Alpha", Location = "nowhere", Teacher = "Dr.Who" };
        }

        [Fact]
        public void ShouldReturnAllClasses()
        {
            var context = CreateDbContext();
            var service = new ClassService(context.Object);

            //act
            var results = service.AllClasses();
            var count = results.Count();

            //assert
            Assert.Equal(2, count);
        }

        [Fact]
        public void ShouldReturnClass1()
        {
            var context = CreateDbContext();
            var service = new ClassService(context.Object);

            //act
            var result = service.GetClass(1);

            //assert
            Assert.Equal("Class1", result.ClassName);
        }

        [Fact]
        public void ShouldAddNewClass()
        {
            var context = CreateDbContext();
            var service = new ClassService(context.Object);

            //act 
            var result = service.AddClass(testClass);
            //assert
            Assert.Equal(1, result);
        }

        [Fact]
        public void ShouldRemoveClass()
        {
            var context = CreateDbContext();
            var service = new ClassService(context.Object);

            //act
            service.DeleteClass(1);
            var results = service.AllClasses();
            var count = results.Count();
            //assert
            Assert.Equal(1, count);
        }

        [Fact]
        public void ShouldUpdateClassNameAsAlpha()
        {
            var context = CreateDbContext();
            var service = new ClassService(context.Object);

            //act
            var result = service.UpdateClass(testClass);
            //assert
            Assert.Equal("Alpha", result.ClassName);
        }

        private Mock<AppDbContext> CreateDbContext()
        {
            var classes = data.GetFakeClasses().AsQueryable();

            var classDbSet = new Mock<DbSet<Class>>();
            classDbSet.As<IQueryable<Class>>().Setup(m => m.Provider).Returns(classes.Provider);
            classDbSet.As<IQueryable<Class>>().Setup(m => m.Expression).Returns(classes.Expression);
            classDbSet.As<IQueryable<Class>>().Setup(m => m.ElementType).Returns(classes.ElementType);
            classDbSet.As<IQueryable<Class>>().Setup(m => m.GetEnumerator()).Returns(classes.GetEnumerator());

            var context = new Mock<AppDbContext>();
            context.Setup(c => c.Classes).Returns(classDbSet.Object);
            return context;
        }
    }
}
