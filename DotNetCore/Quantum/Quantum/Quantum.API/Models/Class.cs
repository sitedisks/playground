using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Collections.Generic;

namespace Quantum.API.Models
{
    public class Class
    {
        public int Id { get; set; }
        public string ClassName { get; set; }
        public string Location { get; set; }
        public string Teacher { get; set; }
        public bool Deleted { get; set; }

        public virtual IEnumerable<Student> Students { get; set; }

        public class Configuration : IEntityTypeConfiguration<Class>
        {
            public void Configure(EntityTypeBuilder<Class> builder)
            {
                builder.HasKey(k => k.Id);
            }
        }
    }
}
