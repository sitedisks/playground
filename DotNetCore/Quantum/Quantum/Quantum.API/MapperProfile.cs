using AutoMapper;
using Quantum.API.Models;
using Quantum.API.Models.Dto;

namespace Quantum.API
{
    public class MapperProfile:Profile
    {
        public MapperProfile() {
            CreateMap<Class, ClassDto>();
            CreateMap<ClassDto, Class>();
            CreateMap<Student, StudentDto>();
            CreateMap<StudentDto, Student>();
        }
    }
}
