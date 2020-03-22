using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using Quantum.API.Models.Dto;
using System;
using System.Collections.Generic;

namespace Quantum.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private readonly IStudentService _serviceStudent;
        private readonly ILogger _logger;
        private readonly IMapper _mapper;

        public StudentController(
                IStudentService serviceStudent,
                ILogger<StudentController> logger,
                IMapper mapper)
        {
            _serviceStudent = serviceStudent;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("class/{classId}")]
        public ActionResult<IEnumerable<StudentDto>> GetStudentsByClass(int classId)
        {
            try
            {
                var students = _serviceStudent.StudentsInClass(classId);
                var results = _mapper.Map<IEnumerable<Student>, IEnumerable<StudentDto>>(students);
                return Ok(results);
            }
            catch (Exception ex) {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<StudentDto> GetStudent(int id)
        {
            try {
                var item = _serviceStudent.GetStudent(id);
                if (item == null)
                    return NotFound();

                var result = _mapper.Map<Student, StudentDto>(item);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult<StudentDto> AddStudent(StudentDto s)
        {
            try {
                int newId = _serviceStudent.AddStudent(_mapper.Map<StudentDto, Student>(s));
                Student newStudent = _serviceStudent.GetStudent(newId);
                var result = _mapper.Map<Student, StudentDto>(newStudent);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult RemoveStudent(int id)
        {
            try {
                _serviceStudent.DeleteStudent(id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public ActionResult<StudentDto> UpdateStudent(StudentDto s)
        {
            try {
                Student updatedStudent = _serviceStudent.UpdateStudent(_mapper.Map<StudentDto, Student>(s));
                var result = _mapper.Map<Student, StudentDto>(updatedStudent);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(ex.Message);
            }
        }
    }
}