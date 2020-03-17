using Quantum.API.Data;
using Quantum.API.Interfaces;
using Quantum.API.Models;
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
            var query = _dbContext.Classes.Where(x => !x.Deleted).OrderBy(x => x.ClassName);
            return query.ToList();
        }

        public Class GetClass(int id)
        {
            var query = _dbContext.Classes.FirstOrDefault(x => x.Id == id);
            return query;
        }


        public int AddClass(Class c)
        {
            _dbContext.Classes.Add(c);
            _dbContext.SaveChanges();
            return c.Id;
        }

        public void DeleteClass(int id)
        {
            var record = GetClass(id);
            record.Deleted = true;
            _dbContext.SaveChanges();
        }

        public Class UpdateClass(Class c)
        {
            var record = GetClass(c.Id);
            record.ClassName = c.ClassName;
            record.Location = c.Location;
            record.Teacher = c.Teacher;
            _dbContext.SaveChanges();
            return record;
        }
    }
}
