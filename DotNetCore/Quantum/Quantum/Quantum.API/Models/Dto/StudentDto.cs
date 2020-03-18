namespace Quantum.API.Models.Dto
{
    public class StudentDto
    {
        public int Id { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public int Age { get; set; }
        public double GPA { get; set; }
        public int ClassId { get; set; }
    }
}
