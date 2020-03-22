using Quantum.API.Data;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace Quantum.API.Services
{
    public class ClassService : IClassService
    {
        private readonly AppDbContext _dbContext;

        public ClassService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Class> AllClasses()
        {
            try
            {
                var query = _dbContext.Classes.Where(x => !x.Deleted).OrderBy(x => x.ClassName);
                return query.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Class GetClass(int id)
        {
            try
            {
                var query = _dbContext.Classes.FirstOrDefault(x => x.Id == id);
                return query;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        public int AddClass(Class c)
        {
            try
            {
                _dbContext.Classes.Add(c);
                _dbContext.SaveChanges();
                return c.Id;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public void DeleteClass(int id)
        {
            try
            {
                var record = GetClass(id);
                if (record == null)
                    throw new DataException($"Can not update class, no record of id {id} is found.");
                record.Deleted = true;
                _dbContext.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

        public Class UpdateClass(Class c)
        {
            try
            {
                var record = GetClass(c.Id);
                record.ClassName = c.ClassName;
                record.Location = c.Location;
                record.Teacher = c.Teacher;
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
