using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using Moq;
using WebToTest.Data;
using WebToTest.Services;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using WebToTest.Data.Entities;

namespace WebToTest.Tests
{
    public class PersonServiceTest
    {
        private readonly DataFeed data;

        public PersonServiceTest() {
            data = new DataFeed();
        }

        [Fact]
        public void AllPersonTest()
        {
            var context = CreateDbContext();

            var service = new PersonService(context.Object);

            // act
            var results = service.AllPersons();
            var count = results.Count();

            // assert
            Assert.Equal(26, count);
        }

        [Fact]
        public void FindPersonTest() {
            var context = CreateDbContext();

            var service = new PersonService(context.Object);
            // act
            var person = service.FindPerson(1);

            // assert
            Assert.Equal(1, person.Id);
        }

        private Mock<ApplicationDbContext> CreateDbContext()
        {

            var persons = data.GetFakeData().AsQueryable();
            var dbSet = new Mock<DbSet<Person>>();
            dbSet.As<IQueryable<Person>>().Setup(m => m.Provider).Returns(persons.Provider);
            dbSet.As<IQueryable<Person>>().Setup(m => m.Expression).Returns(persons.Expression);
            dbSet.As<IQueryable<Person>>().Setup(m => m.ElementType).Returns(persons.ElementType);
            dbSet.As<IQueryable<Person>>().Setup(m => m.GetEnumerator()).Returns(persons.GetEnumerator());

            var context = new Mock<ApplicationDbContext>();
            context.Setup(c => c.Persons).Returns(dbSet.Object);
            return context;

        }
    }
}
