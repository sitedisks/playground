using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Quantum.API.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public int Age { get; set; }
        public double GPA { get; set; }
        public int ClassId { get; set; }
        public bool Deleted { get; set; }
        public virtual Class Class { get; set; }

        public class Configuration : IEntityTypeConfiguration<Student>
        {
            public void Configure(EntityTypeBuilder<Student> builder)
            {
                builder.HasKey(k => k.Id);
                builder.HasIndex(l => new { l.LName, l.ClassId }).IsUnique();
                builder.HasOne(p => p.Class).WithMany(p => p.Students);
            }
        }
    }
}
