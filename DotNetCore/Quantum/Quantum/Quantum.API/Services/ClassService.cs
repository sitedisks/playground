using Quantum.API.Data;
using Quantum.API.Interfaces;
using Quantum.API.Models;
using System.Collections.Generic;
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
            var query = _dbContext.Classes.OrderBy(x => x.ClassName);
            return query.ToList();
        }

        public Class GetClass(int id)
        {
            var query = _dbContext.Classes.FirstOrDefault(x => x.Id == id);
            return query;
        }
    }
}
