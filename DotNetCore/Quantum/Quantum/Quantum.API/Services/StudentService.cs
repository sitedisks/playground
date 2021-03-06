﻿using Quantum.API.Data;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace Quantum.API.Services
{
    public class StudentService : IStudentService
    {
        private readonly AppDbContext _dbContext;

        public StudentService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Student> AllStudents()
        {
            try
            {
                var query = _dbContext.Students.Where(x => !x.Deleted);
                return query.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public IEnumerable<Student> StudentsInClass(int classId)
        {
            try
            {
                var query = _dbContext.Students.Where(x => x.ClassId == classId && !x.Deleted);
                return query.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public Student GetStudent(int id)
        {
            try { return _dbContext.Students.FirstOrDefault(x => x.Id == id); }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public int AddStudent(Student s)
        {
            try
            {
                _dbContext.Students.Add(s);
                _dbContext.SaveChanges();
                return s.Id;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public void DeleteStudent(int id)
        {
            try
            {
                var record = GetStudent(id);
                if (record == null)
                    throw new DataException($"Can not update student, no record of id {id} is found.");

                record.Deleted = true;
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public Student UpdateStudent(Student s)
        {
            try
            {
                var record = GetStudent(s.Id);

                record.FName = s.FName;
                record.LName = s.LName;
                record.Age = s.Age;
                record.GPA = s.GPA;
                _dbContext.SaveChanges();
                return record;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }
}
