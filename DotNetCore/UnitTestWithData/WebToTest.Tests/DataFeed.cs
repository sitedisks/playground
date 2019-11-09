using GenFu;
using System.Collections.Generic;
using System.Linq;
using WebToTest.Data.Entities;

namespace WebToTest.Tests
{
    public class DataFeed
    {
        public IEnumerable<Person> GetFakeData()
        {
            var i = 1;
            var persons = A.ListOf<Person>(26);
            persons.ForEach(x => x.Id = i++);

            return persons.Select(_ => _);
        }
    }
}
