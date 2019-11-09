using Moq;
using WebToTest.Services;
using Xunit;
using System.Linq;
using WebToTest.Controllers;


namespace WebToTest.Tests
{
    public class PersonControllerTest
    {
        private readonly DataFeed data;

        public PersonControllerTest() {
            data = new DataFeed();
        }

        [Fact]
        public void GetPersonsTest()
        {
            var service = new Mock<IPersonService>();

            var persons = data.GetFakeData();

            // Moq Setup!
            service.Setup(x => x.AllPersons()).Returns(persons);

            var controller = new PersonController(service.Object);

            // Act
            var results = controller.GetPersons();

            var count = results.Count();

            // Assert
            Assert.Equal(count, 26);

        }

        [Fact]
        public void GetPersonTest() {

            var service = new Mock<IPersonService>();
            var persons = data.GetFakeData();
            var firstPerson = persons.First();

            service.Setup(x => x.FindPerson(1)).Returns(firstPerson);

            var controller = new PersonController(service.Object);

            // act
            var result = controller.GetPerson(1);
            var person = result.Value;

            // assert
            Assert.Equal(1, person.Id);
        }
    }
}
