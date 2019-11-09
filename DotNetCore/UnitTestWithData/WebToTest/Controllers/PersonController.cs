using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebToTest.Data.Entities;
using WebToTest.Services;

namespace WebToTest.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        private readonly IPersonService _servicePerson;

        public PersonController(IPersonService servicePerson) {
            _servicePerson = servicePerson;
        }

        [HttpGet]
        public IEnumerable<Person> GetPersons() {
            return _servicePerson.AllPersons();
        }

        [HttpGet("{id}")]
        public ActionResult<Person> GetPerson(int id) {
            var item = _servicePerson.FindPerson(id);
            if (item == null)
                return NotFound();

            return item;
        }
    }
}