using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using System.Collections.Generic;

namespace Quantum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private readonly IStudentService _serviceStudent;
        private readonly ILogger _logger;

        public StudentController(IStudentService serviceStudent, ILogger<StudentController> logger) {
            _serviceStudent = serviceStudent;
            _logger = logger;
        }

        [HttpGet("class/{classId}")]
        public ActionResult<IEnumerable<Student>> GetStudentsByClass(int classId) {
            return Ok(_serviceStudent.StudentsInClass(classId));
        }

        [HttpGet("{id}")]
        public ActionResult<Student> GetStudent(int id) {
            var item = _serviceStudent.GetStudent(id);
            if (item == null)
                return NotFound();

            return Ok(item);
        }

        [HttpPost]
        public ActionResult<Student> AddStudent(Student s) {
            int newId = _serviceStudent.AddStudent(s);
            var newStudent = _serviceStudent.GetStudent(newId);

            return Ok(newStudent);
        }

        [HttpDelete]
        public ActionResult RemoveStudent(int id) {
            _serviceStudent.DeleteStudent(id);
            return Ok();
        }

        [HttpPut]
        public ActionResult<Student> UpdateStudent(Student s) {
            var updatedStudent = _serviceStudent.UpdateStudent(s);
            return Ok(updatedStudent);
        }
    }
}