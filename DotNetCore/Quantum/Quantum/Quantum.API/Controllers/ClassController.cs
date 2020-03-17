using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using System.Collections.Generic;

namespace Quantum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : Controller
    {
        private readonly IClassService _serviceClass;
        private readonly ILogger _logger;

        public ClassController(IClassService serviceClass, ILogger<ClassController> logger)
        {
            _serviceClass = serviceClass;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Class>> GetClasses()
        {
            _logger.LogInformation("fetch all Classes");
            return Ok(_serviceClass.AllClasses());

        }

        [HttpGet("{id}")]
        public ActionResult<Class> GetClass(int id)
        {
            var item = _serviceClass.GetClass(id);
            if (item == null)
                return NotFound();

            return Ok(item);
        }

        [HttpPost]
        public ActionResult<Class> AddClass(Class c)
        {
            int newId = _serviceClass.AddClass(c);
            var newClass = _serviceClass.GetClass(newId);
            return Ok(newClass);
        }

        [HttpDelete]
        public ActionResult RemoveClass(int id)
        {
            _serviceClass.DeleteClass(id);
            return Ok();
        }

        [HttpPut]
        public ActionResult<Class> UpdateClass(Class c)
        {
            var updatedClass = _serviceClass.UpdateClass(c);
            return Ok(updatedClass);
        }
    }
}