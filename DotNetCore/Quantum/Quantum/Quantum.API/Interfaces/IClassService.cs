using Quantum.API.Models;
using System.Collections.Generic;

namespace Quantum.API.Interfaces
{
    public interface IClassService
    {
        IEnumerable<Class> AllClasses();
        Class GetClass(int id);
    }
}
