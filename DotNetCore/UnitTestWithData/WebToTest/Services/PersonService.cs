using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebToTest.Data;
using WebToTest.Data.Entities;

namespace WebToTest.Services
{
    public class PersonService:IPersonService
    {
        private readonly ApplicationDbContext _dbContext;
        public PersonService(ApplicationDbContext dbContext) {
            _dbContext = dbContext;
        }

        public IEnumerable<Person> AllPersons() {
            var query = _dbContext.Persons.OrderBy(x => x.DateOfBirth);
            return query.ToList();
        }

        public Person FindPerson(int id) {
            var query = _dbContext.Persons.FirstOrDefault(x => x.Id == id);
            return query;
        }
    }

    public interface IPersonService {
        IEnumerable<Person> AllPersons();
        Person FindPerson(int id);
    }
}
