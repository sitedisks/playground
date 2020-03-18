using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using Quantum.API.Models.Dto;
using System.Collections.Generic;

namespace Quantum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : Controller
    {
        private readonly IClassService _serviceClass;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;

        public ClassController(
                IClassService serviceClass,
                ILogger<ClassController> logger,
                IMapper mapper)
        {
            _serviceClass = serviceClass;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ClassDto>> GetClasses()
        {
            var classes = _serviceClass.AllClasses();
            var results = _mapper.Map<IEnumerable<Class>, IEnumerable<ClassDto>>(classes);
            return Ok(results);

        }

        [HttpGet("{id}")]
        public ActionResult<ClassDto> GetClass(int id)
        {
            var item = _serviceClass.GetClass(id);
            if (item == null)
                return NotFound();

            var result = _mapper.Map<Class, ClassDto>(item);
            return Ok(result);
        }

        [HttpPost]
        public ActionResult<ClassDto> AddClass(ClassDto c)
        {
            int newId = _serviceClass.AddClass(_mapper.Map<ClassDto, Class>(c));
            Class newClass = _serviceClass.GetClass(newId);
            var result = _mapper.Map<Class, ClassDto>(newClass);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public ActionResult RemoveClass(int id)
        {
            _serviceClass.DeleteClass(id);
            return Ok();
        }

        [HttpPut]
        public ActionResult<ClassDto> UpdateClass(ClassDto c)
        {
            Class updatedClass = _serviceClass.UpdateClass(_mapper.Map<ClassDto, Class>(c));
            var result = _mapper.Map<Class, ClassDto>(updatedClass);
            return Ok(result);
        }
    }
}