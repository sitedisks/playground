using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Quantum.API.Interfaces;
using Quantum.API.Models;

namespace Quantum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : Controller
    {
        private readonly IClassService _serviceClass;

        public ClassController(IClassService serviceClass) {
            _serviceClass = serviceClass;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Class>> GetClasses() {
            return Ok(_serviceClass.AllClasses());
        }

        [HttpGet("{id}")]
        public ActionResult<Class> GetClass(int id) {
            var item = _serviceClass.GetClass(id);
            if (item == null)
                return NotFound();

            return Ok(item);
        }
    }
}